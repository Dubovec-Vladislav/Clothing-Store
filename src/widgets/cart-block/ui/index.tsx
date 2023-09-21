import React, { FC } from 'react'
import style from './index.module.scss'
import { CartCard } from 'entities/cart-card'
import { useAppSelector } from 'app/model'
import { selectCartPizzas } from '../model'

export const CartBlock: FC = (props) => {
  const clothingItems = useAppSelector(selectCartPizzas);
  // console.log(clothingItems);
  return (
    <section className={style.block}>
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
