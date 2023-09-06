// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { Hello } from '../components'
import { BrandsLine } from 'shared/ui'
import { ClothingRow } from 'widgets/cloth-row'
import { CategoryBlock } from 'shared/ui'
import { CommentSlider } from 'widgets/comment-slider'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

export const MainPage: FC = (props) => {
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
