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
  const { id } = useParams<{ id: string }>();
  const [selectedColorsList, changeSelectedColorsList] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimit,] = useState<number>(1);
  useEffect(() => window.scrollTo(0, 0), [currentPage]); // Scroll to top of the page, when changing the current page

  const { data, isFetching } = getClothingItemsByPage({ category: id, page: currentPage, limit: pageLimit });

  return (
    <div className={style.content}>
      <Filters data={data} isLoading={isFetching} selectedColorsList={selectedColorsList} changeSelectedColorsList={changeSelectedColorsList} />
      <ClothingBlock data={data} isLoading={isFetching} currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={pageLimit} />
    </div>
  );
};
