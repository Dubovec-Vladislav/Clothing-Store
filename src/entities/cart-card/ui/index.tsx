import React, { FC, useState } from 'react'
import style from './index.module.scss'
import { CartCounterBtn } from 'features/cart-counter-btn'
import cart from '../img/cart.svg'

interface CartCardProps {
  previewImg: string,
  name: string,
  price: number,
  color: string,
  size: number,
  numOfClothing: number,
}

export const CartCard: FC<CartCardProps> = ({ previewImg, name, price, color, size, numOfClothing }) => {
  const [numberOfClothing, changeNumOfClothing] = useState<number>(numOfClothing);

  return (
    <div className={style.block}>
      <div className={style.img}><img src={previewImg} alt="clothing-card" /></div>
      <div className={style.content}>
        <div className={style.title}>{name}</div>
        <div className={style.size}>Size: <span>{size}</span></div>
        <div className={style.color}>Color: <span style={{ backgroundColor: color }}></span></div>
        <div className={style.price}>{price}₽</div>
      </div>
      <div className={style.widgets}>
        <img src={cart} alt="del-cart" />
        <div className={style.btn}><CartCounterBtn number={numberOfClothing} changeNumber={changeNumOfClothing} /></div>
      </div>
    </div>
  );
};
