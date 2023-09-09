// General
import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
// Components
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'
// Api
import { getClothingItemsByPage } from 'app/api'

export const CategoryContent: FC = (props) => {
  useEffect(() => window.scrollTo(0, 0), []); // Scroll to top of page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit,] = useState<number>(3);
  const [selectedColorList, changeSelectedColorList] = useState<string[]>([]);
  const { data, isFetching } = getClothingItemsByPage({ page: currentPage, limit: pageLimit });
  
  return (
    <div className={style.content}>
      <Filters data={data} isLoading={isFetching} selectedColorList={selectedColorList} changeSelectedColorList={changeSelectedColorList} />
      <ClothingBlock data={data} isLoading={isFetching} currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={pageLimit} />
    </div>
  );
};
