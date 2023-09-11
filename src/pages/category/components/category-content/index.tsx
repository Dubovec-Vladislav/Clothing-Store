// General
import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
import { useParams } from 'react-router'
// Components
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'
// Api
import { ClothingInterface, ImageObjectInterface, getClothingItemsByPage } from 'app/api'

export const CategoryContent: FC = (props) => {

  // ---------- Filters data and hooks ----------- //
  const { id } = useParams<{ id: string }>();
  const [selectedColorsList, changeSelectedColorsList] = useState<string[]>([]);
  // --------------------------------------------- //


  // ------- Clothing Block data and hooks ------- //
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit,] = useState<number>(8);
  useEffect(() => window.scrollTo(0, 0), [currentPage]); // Scroll to top of the page, when changing the current page
  // --------------------------------------------- //


  // ---------- General data and hooks ----------- //
  const { data, isFetching } = getClothingItemsByPage({ category: id, page: currentPage, limit: pageLimit });
  const dataSortedByColor = data?.filter((item: ClothingInterface) => selectedColorsList.includes(item.imageObjects[0].color));
  // --------------------------------------------- //


  return (
    <div className={style.content}>
      <Filters
        data={data}
        isLoading={isFetching}
        selectedColorsList={selectedColorsList}
        changeSelectedColorsList={changeSelectedColorsList}
      />
      <ClothingBlock
        data={dataSortedByColor?.length !== 0 ? dataSortedByColor : data}
        isLoading={isFetching}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageLimit={pageLimit}
      />
    </div>
  );
};
