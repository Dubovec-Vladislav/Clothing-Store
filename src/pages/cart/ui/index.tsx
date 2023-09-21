// General
import React, { FC, useEffect } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { CartBlock } from 'widgets/cart-section'
import { CheckBlock } from 'widgets/check-section'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

export const CartPage: FC = (props) => {
  useEffect(() => window.scrollTo(0, 0), []); // Scroll to top of page

  return (
    <main className={style.block}>
      <Header />
      <div className={style.content}>
        <div className={style.title}>Ваша корзина</div>
        <CartBlock />
        <CheckBlock />
      </div>
      <NewsSubscription />
      <Footer />
    </main>
  );
};
