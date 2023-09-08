// General
import React, { FC, useState } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'
// Api
import { getClothingItemsByPage } from 'app/api'

export const CategoryPage: FC = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit,] = useState(9);
  const { data, isLoading } = getClothingItemsByPage({ page: pageNumber, limit: pageLimit });

  return (
    <section className={style.block}>
      <div className={style.body}>
        <Header />
        <div className={style.content}>
          <Filters data={data} isLoading={isLoading} />
          <ClothingBlock data={data} isLoading={isLoading} />
        </div>
      </div>
    </section>
  );
};
