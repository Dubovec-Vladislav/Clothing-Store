// General
import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
import { useParams } from 'react-router'
// Components
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'
// Api
import { ClothingInterface, getClothingItemsByPage } from 'app/api'
import { getCommonVariantsFromArrays } from '../lib'

export const CategoryContent: FC = (props) => {

  // ---------- Filters data and hooks ----------- //
  const { id } = useParams<{ id: string }>();
  const [selectedColorsList, changeSelectedColorsList] = useState<string[]>([]);
  const [selectedSizesList, changeSelectedSizesList] = useState<number[]>([]);
  // --------------------------------------------- //


  // ------- Clothing Block data and hooks ------- //
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit,] = useState<number>(3);
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page, when changing the current page
    changeSelectedColorsList([]); // Clear list
    changeSelectedSizesList([]); // Clear list
  }, [currentPage]);
  // --------------------------------------------- //


  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(4000);


  // ---------- General data and hooks ----------- //
  const { data, isFetching } = getClothingItemsByPage({ category: id, page: currentPage, limit: pageLimit });



  const filterData = (data: ClothingInterface[] | undefined, filterFunction: (item: ClothingInterface) => boolean) => {
    return data?.filter(filterFunction) || [];
  };

  // ------------ Filtering by color ------------- //
  const dataSortedByColor = filterData(data, (item) =>
    selectedColorsList.includes(item.imageObjects[0].color)
  );

  // ------------- Filtering by size ------------- //
  const dataSortedBySize = filterData(data, (item) =>
    item.sizesList.some((size) => selectedSizesList.includes(size))
  );

  // ------------ Filtering by price ------------- //
  const dataSortedByPrice = filterData(data, (item) =>
    item.price >= minPrice && item.price <= maxPrice
  );

  const generalArray: ClothingInterface[][] = [];
  dataSortedByColor && generalArray.push(dataSortedByColor);
  dataSortedBySize && generalArray.push(dataSortedBySize);
  dataSortedByPrice && generalArray.push(dataSortedByPrice);

  const commonClothingVariants = getCommonVariantsFromArrays(generalArray);
  const sortedData: ClothingInterface[] = commonClothingVariants;

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
      />
      <ClothingBlock
        data={sortedData}
        isLoading={isFetching}

        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageLimit={pageLimit}
      />
    </div>
  );
};
