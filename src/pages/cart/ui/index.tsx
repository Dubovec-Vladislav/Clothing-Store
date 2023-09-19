// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Components
import { Header } from 'widgets/header'
import { CartBlock } from 'widgets/cart-block'
import { CheckBlock } from 'widgets/check'
import { NewsSubscription } from 'widgets/news-subscription'
import { Footer } from 'widgets/footer'

export const CartPage: FC = (props) => {
  return (
    <main className={style.block}>
      <Header />
      <div className={style.content}>
        <CartBlock />
        <CheckBlock />
      </div>
      <NewsSubscription />
      <Footer />
    </main>
  );
};
