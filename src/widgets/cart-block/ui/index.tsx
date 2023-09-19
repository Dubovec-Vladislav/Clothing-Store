import React, { FC } from 'react'
import style from './index.module.scss'
import { CartCard } from 'entities/cart-card'

export const CartBlock: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.title}>Ваша корзина</div>
      <div className={style.body}>
        <div className={style.content}>
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </div>
    </section>
  );
};
