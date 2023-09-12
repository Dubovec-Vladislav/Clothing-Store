// General
import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
import { useParams } from 'react-router'
// Components
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'
// Api
import { ClothingInterface, getClothingItemsByPage } from 'app/api'

export const CategoryContent: FC = (props) => {

  // ---------- Filters data and hooks ----------- //
  const { id } = useParams<{ id: string }>();
  const [selectedColorsList, changeSelectedColorsList] = useState<string[]>([]);
  const [selectedSizesList, changeSelectedSizesList] = useState<number[]>([]);
  // --------------------------------------------- //


  // ------- Clothing Block data and hooks ------- //
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit,] = useState<number>(6);
  useEffect(() => window.scrollTo(0, 0), [currentPage]); // Scroll to top of the page, when changing the current page
  // --------------------------------------------- //


  // ---------- General data and hooks ----------- //
  const { data, isFetching } = getClothingItemsByPage({ category: id, page: currentPage, limit: pageLimit });


  const dataSortedByColor = data?.filter((item: ClothingInterface) =>
    selectedColorsList.includes(item.imageObjects[0].color
    )); // Filtering by color

  const dataSortedBySize = data?.filter((item: ClothingInterface) => {
    // Checking if there is at least one size from selectedSizesList in the element's sizesList
    return item.sizesList.some(size => selectedSizesList.includes(size));
  }); // Filtering by size


  // Union of two arrays
  const arrayWithSortedColorsAndSizes: ClothingInterface[] | undefined = dataSortedBySize && dataSortedByColor?.concat(dataSortedBySize);

  const arrayWithCommonSortedColorsAndSizes: ClothingInterface[] = [];
  // If item is contained in both arrays and has not yet been added, then add
  arrayWithSortedColorsAndSizes?.forEach(item => (dataSortedByColor?.includes(item) && dataSortedBySize?.includes(item))
    && !arrayWithCommonSortedColorsAndSizes.includes(item) && arrayWithCommonSortedColorsAndSizes.push(item));


  const sortedData: ClothingInterface[] | undefined =
    (selectedColorsList.length !== 0 && selectedSizesList.length !== 0)
      ? arrayWithCommonSortedColorsAndSizes
      : selectedColorsList.length !== 0
        ? dataSortedByColor
        : selectedSizesList.length !== 0
          ? dataSortedBySize
          : data
  // --------------------------------------------- //

  return (
    <div className={style.content}>
      <Filters
        data={data}
        isLoading={isFetching}
        selectedColorsList={selectedColorsList}
        changeSelectedColorsList={changeSelectedColorsList}
        selectedSizesList={selectedSizesList}
        changeSelectedSizesList={changeSelectedSizesList}
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
