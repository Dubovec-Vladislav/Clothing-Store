import React, { FC, useState } from 'react'
import style from './index.module.scss'
import { CartCounterBtn } from 'features/cart-counter-btn'
import cart from '../img/cart.svg'

export const CartCard: FC = (props) => {
  const [numOfClothing, changeNumOfClothing] = useState<number>(1);

  return (
    <div className={style.block}>
      <div className={style.img}><img src={"https://a.lmcdn.ru/img600x866/R/T/RTLACV835401_20699356_1_v1_2x.jpg"} alt="clothing-card" /></div>
      <div className={style.content}>
        <div className={style.title}>Короткая рубашка</div>
        <div className={style.size}>Size: <span>48</span></div>
        <div className={style.color}>Color: <span style={{ backgroundColor: "#D22F54" }}></span></div>
        <div className={style.price}>145₽</div>
      </div>
      <div className={style.widgets}>
        <img src={cart} alt="del-cart" />
        <div className={style.btn}><CartCounterBtn number={numOfClothing} changeNumber={changeNumOfClothing}/></div>
      </div>
    </div>
  );
};
