// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { ClothingContent } from '../components'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

interface ClothingPageProps {
  pageName: "category" | "search"
};

export const ClothingPage: FC<ClothingPageProps> = ({ pageName }) => {
  return (
    <main className={style.block}>
      <Header />
      <ClothingContent pageName={pageName}/>
      <NewsSubscription />
      <Footer />
    </main>
  );
};
