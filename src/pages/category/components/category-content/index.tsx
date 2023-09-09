// General
import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
import { useParams } from 'react-router'
// Components
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'
// Api
import { getClothingItemsByPage } from 'app/api'

export const CategoryContent: FC = (props) => {
  useEffect(() => window.scrollTo(0, 0), []); // Scroll to top of page
  const { id } = useParams<{ id: string }>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit,] = useState<number>(3);
  const [selectedColorsList, changeSelectedColorsList] = useState<string[]>([]);
  const { data, isFetching } = getClothingItemsByPage({ page: currentPage, limit: pageLimit, category: id });

  return (
    <div className={style.content}>
      <Filters data={data} isLoading={isFetching} selectedColorsList={selectedColorsList} changeSelectedColorsList={changeSelectedColorsList} />
      <ClothingBlock data={data} isLoading={isFetching} currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={pageLimit} />
    </div>
  );
};
