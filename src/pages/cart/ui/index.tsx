// General
import React, { FC, useEffect } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { CartSection } from 'widgets/cart-section'
import { CheckSection } from 'widgets/check-section'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

export const CartPage: FC = (props) => {
  useEffect(() => window.scrollTo(0, 0), []); // Scroll to top of page

  return (
    <main className={style.block}>
      <Header />
      <div className={style.content}>
        <div className={style.title}>Ваша корзина</div>
        <CartSection />
        <CheckSection />
      </div>
      <NewsSubscription />
      <Footer />
    </main>
  );
};
