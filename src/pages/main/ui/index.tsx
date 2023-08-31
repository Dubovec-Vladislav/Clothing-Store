// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Api
import { useGetNewClothQuery, useGetTopSellingClothQuery } from '../api'
// Components
import { Header } from 'widgets/header'
import { Hello } from '../components'
import { BrandsLine } from 'shared/ui'
import { ClothRow } from 'features/cloth-row'
import { CategoryBlock } from 'shared/ui'
import { CommentSlider } from 'features/comment-slider'
import { NewsSubscription } from 'features/news-subscription'
import { Footer } from 'features/footer'

export const Main: FC = (props) => {
  const newClothQuery = useGetNewClothQuery('');
  const topSellingClothQuery = useGetTopSellingClothQuery('');

  return (
    <main className={style.block}>
      <div className={style.body}>
        <Header />
        <Hello />
        <BrandsLine />
        <ClothRow titleText={'Новые поступления'} clothData={newClothQuery.data} isLoading={newClothQuery.isLoading} endBlockLine />
        <ClothRow titleText={'Лучшие продажи'} clothData={topSellingClothQuery.data} isLoading={topSellingClothQuery.isLoading} />
        <CategoryBlock />
        <CommentSlider />
        <NewsSubscription />
        <Footer />
      </div>
    </main>
  );
};
