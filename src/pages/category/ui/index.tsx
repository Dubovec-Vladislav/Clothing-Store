// General(0, 0)useEffect
import React, { FC, useEffect } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { CategoryContent } from '../components'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

export const CategoryPage: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <Header />
        <CategoryContent />
        <NewsSubscription />
        <Footer />
      </div>
    </section>
  );
};
