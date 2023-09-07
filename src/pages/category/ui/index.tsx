// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { Filters } from 'widgets/filters'
import { ClothingBlock } from 'widgets/clothing-block'

export const CategoryPage: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <Header />
        <div className={style.content}>
          <Filters />
          <ClothingBlock />
        </div>
      </div>
    </section>
  );
};
