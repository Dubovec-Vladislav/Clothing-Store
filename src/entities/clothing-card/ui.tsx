import React, { FC } from "react";
import style from "./style.module.scss";
import { Rating } from "shared/ui";

export interface ClothingCardProps {
  imageUrl: string;
  name: string;
  price: number;
  prevPrice: number;
  rating: number;
}

export const ClothingCard: FC<ClothingCardProps> = ({
  imageUrl,
  name,
  price,
  prevPrice,
  rating,
}) => {
  return (
    <div className={style.body}>
      <div className={style.img}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={style.title}>{name}</div>
      <div className={style.rating}>
        <Rating rating={rating} />
      </div>
      <div className={style.priceBlock}>
        <div className={style.price}>{price}₽</div>
        <div className={style.prevPrice}>{prevPrice}₽</div>
        <div className={style.percent}>-30%</div>
      </div>
    </div>
  );
};
