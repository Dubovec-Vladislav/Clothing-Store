import React, { FC } from 'react'
import style from './index.module.scss'
import { Hello } from '../hello'
import { Header } from 'widgets/header'
import { BrandsLine } from 'shared/ui'
import { ClothRow, getNewCloth, getTopSellingCloth } from 'features/cloth-row'
import { CategoryBlock } from 'shared/ui'
import { CommentSlider } from 'features/comment-slider'
import { NewsSubscription } from 'features/news-subscription'

export const Main: FC = (props) => {
  const newClothQuery = getNewCloth('');
  const topSellingClothQuery = getTopSellingCloth('');

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
      </div>
    </main>
  );
};
