// General
import React, { FC, useEffect, useState, useRef, useMemo } from 'react'
import style from './index.module.scss'
import { useNavigate, useParams } from 'react-router'
import qs from 'qs'
// Components
import { Filters } from 'widgets/filters'
import { ClothingSection } from 'widgets/clothing-section'
// Api
import { ClothingInterface, getClothingItemsByCategoryAndPageAndSort, getClothingItemsBySearchAndPage, getClothingItems } from 'app/commonApi'
// Slice
import { useAppSelector } from 'app/model'
import { selectSearchString } from 'features/search'
// Lib
import { filterData, getCommonVariantsFromArrays, sortTypes } from '../../lib'

interface ClothingContentProps {
  pageName: "category" | "search"
};

export const ClothingContent: FC<ClothingContentProps> = ({ pageName }) => {

  // ------- Filters Block data and hooks -------- //
  const { id } = useParams<{ id: string | undefined }>();

  const searchStr = useAppSelector(selectSearchString);
  const [selectedColorsList, changeSelectedColorsList] = useState<string[]>([]);
  const [selectedSizesList, setSelectedSizesList] = useState<number[]>([]);
  // --------------------------------------------- //


  // ---------- Work with active title ----------- //
  const categoriesList = useMemo(() => ['Деловая', 'Повседневная', 'На вечеринку', 'Для зала'], []);
  const [activeTitle, setActiveTitle] = useState<string>('');
  useEffect(() => {
    id ? setActiveTitle(categoriesList[Number(id) - 1]) : setActiveTitle('Поиск');
  }, [id, categoriesList]);
  // --------------------------------------------- //


  // ------- Clothing Block data and hooks ------- //
  const DEFAULT_PAGE_LIMIT = 8;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit,] = useState<number>(DEFAULT_PAGE_LIMIT);
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page, when changing the current page
    changeSelectedColorsList([]); // Clear list
    setSelectedSizesList([]); // Clear list
  }, [currentPage]);
  // --------------------------------------------- //


  // ------------- Working with URL -------------- //
  // Setting URL
  const isMounted = useRef(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (window.location.search) {
      // Get params
      const params = qs.parse(window.location.search.substring(1));
      // Updating page
      setCurrentPage(Number(params.page))
    };
  }, []);

  // URL Path
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page: currentPage,
      }); // => currentPage=1
      navigate(`?${queryString}`);
    };
    isMounted.current = true;
  }, [currentPage, navigate]);
  // --------------------------------------------- //


  // ------------- Price Block data -------------- //
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(4000);
  // --------------------------------------------- //


  // ---------- General data and hooks ----------- //
  const [indexOfActiveSortType, setIndexOfActiveSortType] = useState<number>(0);
  const [isFilteringMenuActive, toggleIsFilteringMenuActive] = useState<boolean>(false);
  const activeSortType = sortTypes[indexOfActiveSortType];

  const { data, isFetching } = pageName === "category"
    ? getClothingItemsByCategoryAndPageAndSort(
      { category: id, page: currentPage, limit: pageLimit, sortBy: activeSortType.urlName, order: activeSortType.order })
    : pageName === "search"
      ? getClothingItemsBySearchAndPage({ str: searchStr, page: currentPage, limit: pageLimit })
      : getClothingItems('');


  // Filtering by color
  const dataSortedByColor = filterData(data, (item) => selectedColorsList.includes(item.imageObjects[0].color));
  // Filtering by size
  const dataSortedBySize = filterData(data, (item) => item.sizesList.some((size) => selectedSizesList.includes(size)));
  // Filtering by price
  const dataSortedByPrice = filterData(data, (item) => item.price >= minPrice && item.price <= maxPrice);

  // Creating a general array
  const generalArray: ClothingInterface[][] = []; // This will be an array that contains other arrays with ClothingInterface items
  dataSortedByColor && generalArray.push(dataSortedByColor);
  dataSortedBySize && generalArray.push(dataSortedBySize);
  dataSortedByPrice && generalArray.push(dataSortedByPrice);

  // Active filter counter
  let numberOfActiveFilters = 1; // Price is always active
  selectedColorsList.length && numberOfActiveFilters++;
  selectedSizesList.length && numberOfActiveFilters++;

  const sortedData: ClothingInterface[] = getCommonVariantsFromArrays(generalArray, numberOfActiveFilters);

  useEffect(() => {
    changeSelectedColorsList([]);
    setSelectedSizesList([]);
    setMinPrice(1000);
    setMaxPrice(4000);
  }, [activeSortType]); //When changing the activeSortType, clear the filters
  // --------------------------------------------- //

  return (
    <div className={style.content}>
      <Filters
        data={data}
        isLoading={isFetching}
        selectedColorsList={selectedColorsList}
        changeSelectedColorsList={changeSelectedColorsList}
        selectedSizesList={selectedSizesList}
        setSelectedSizesList={setSelectedSizesList}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        isFilteringMenuActive={isFilteringMenuActive}
        toggleIsFilteringMenuActive={toggleIsFilteringMenuActive}
      />
      <ClothingSection
        data={sortedData}
        isLoading={isFetching}
        title={activeTitle}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageLimit={pageLimit}
        indexOfActiveSortType={indexOfActiveSortType}
        setIndexOfActiveSortType={setIndexOfActiveSortType}
        activeSortTypeName={activeSortType.name}
        sortTypes={sortTypes}
        toggleIsFilteringMenuActive={toggleIsFilteringMenuActive}
        pageName={pageName}
        categoryId={id || ""}
      />
    </div>
  );
};
