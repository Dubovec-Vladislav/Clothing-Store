import React, { FC } from 'react'
import style from './index.module.scss'
import { Rating } from 'shared/ui'

export interface Cloth {
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  category: number,
  rating: number,
};

export const ClothCard:  FC<Omit<Cloth, 'id'>> = ({imageUrl, name, price, category, rating}) => {
  return (
      <div className={style.body}>
        <div className={style.img}><img src={imageUrl} alt={name} /></div>
        <div className={style.title}>{name}</div>
        <div className={style.rating}><Rating rating={rating} /></div>
        <div className={style.priceBlock}>
          <div className={style.price}>{price}₽</div>
          <div className={style.prevPrice}>220₽</div>
          <div className={style.percent}>-30%</div>
        </div>
      </div>
  );
};