// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { CategoryContent } from '../components'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

export const CategoryPage: FC = () => {
  return (
    <main className={style.block}>
      <Header />
      <CategoryContent />
      <NewsSubscription />
      <Footer />
    </main>
  );
};
