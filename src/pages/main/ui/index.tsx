// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Api
import { getTopSellingClothing } from 'widgets/clothes-constructor'
// Components
import { Header } from 'widgets/header'
import { Hello } from '../components'
import { BrandsLine } from 'shared/ui'
import { ClothingRow } from 'features/cloth-row'
import { CategoryBlock } from 'shared/ui'
import { CommentSlider } from 'features/comment-slider'
import { NewsSubscription } from 'features/news-subscription'
import { Footer } from 'features/footer'


export const Main: FC = (props) => {
  return (
    <main className={style.block}>
      <div className={style.body}>
        <Header />
        <Hello />
        <BrandsLine />
        <ClothingRow titleText={'Новые поступления'} endBlockLine newClothing />
        <ClothingRow titleText={'Лучшие продажи'} topClothing />
        <CategoryBlock />
        <CommentSlider />
        <NewsSubscription />
        <Footer />
      </div>
    </main>
  );
};
