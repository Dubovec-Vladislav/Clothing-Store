// General
import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
import { useParams } from 'react-router'
// Components
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'
// Api
import { ClothingInterface, getClothingItemsByPageAndSort } from 'app/api'
// Lib
import { filterData, getCommonVariantsFromArrays, sortTypes } from '../../lib'
// import { FilterPopup } from 'shared/ui'

export const CategoryContent: FC = (props) => {

  // ---------- Filters Block data and hooks ----------- //
  const { id } = useParams<{ id: string }>();
  const [selectedColorsList, changeSelectedColorsList] = useState<string[]>([]);
  const [selectedSizesList, changeSelectedSizesList] = useState<number[]>([]);
  // --------------------------------------------- //


  // ------- Clothing Block data and hooks ------- //
  const DEFAULT_PAGE_LIMIT = 8;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit,] = useState<number>(DEFAULT_PAGE_LIMIT);
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page, when changing the current page
    changeSelectedColorsList([]); // Clear list
    changeSelectedSizesList([]); // Clear list
  }, [currentPage]);
  // --------------------------------------------- //


  // ------------- Price Block data -------------- //
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(4000);
  // --------------------------------------------- //


  // ---------- General data and hooks ----------- //
  const [indexOfActiveSortType, setIndexOfActiveSortType] = useState<number>(0);
  const [isFilteringMenuActive, toggleIsFilteringMenuActive] = useState<boolean>(false);
  const activeSortType = sortTypes[indexOfActiveSortType];

  const { data, isFetching } = getClothingItemsByPageAndSort(
    { category: id, page: currentPage, limit: pageLimit, sortBy: activeSortType.urlName, order: activeSortType.order }
  );

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

  return (
    <div className={style.content}>
      <Filters
        data={data}
        isLoading={isFetching}

        selectedColorsList={selectedColorsList}
        changeSelectedColorsList={changeSelectedColorsList}

        selectedSizesList={selectedSizesList}
        changeSelectedSizesList={changeSelectedSizesList}

        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        // Toggle menu active
        isFilteringMenuActive={isFilteringMenuActive}
        toggleIsFilteringMenuActive={toggleIsFilteringMenuActive}
      />
      <ClothingBlock
        data={sortedData}
        isLoading={isFetching}

        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageLimit={pageLimit}

        indexOfActiveSortType={indexOfActiveSortType}
        setIndexOfActiveSortType={setIndexOfActiveSortType}
        activeSortTypeName={activeSortType.name}
        sortTypes={sortTypes}
        // Toggle menu active
        toggleIsFilteringMenuActive={toggleIsFilteringMenuActive}
      />
    </div>
  );
};
