// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { ClothingContent } from '../components'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

export const ClothingPage: FC = () => {
  
  return (
    <main className={style.block}>
      <Header />
      <ClothingContent/>
      <NewsSubscription />
      <Footer />
    </main>
  );
};
