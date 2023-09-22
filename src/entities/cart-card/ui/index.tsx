import React, { FC, useEffect, useState } from 'react'
import style from './index.module.scss'
import { CartCounterBtn } from 'features/cart-counter-btn'
import cart from '../img/cart.svg'
import { changeNumberOfClothingItems, removeClothingItem } from 'widgets/cart-section'
import { useDispatch } from 'react-redux'

interface CartCardProps {
  id: string,
  previewImg: string,
  name: string,
  price: number,
  color: string,
  size: number,
  numOfClothing: number,
}

export const CartCard: FC<CartCardProps> = ({ id, previewImg, name, price, color, size, numOfClothing }) => {
  const dispatch = useDispatch()
  const [localNumOfClothing, changeNumOfClothing] = useState<number>(numOfClothing);

  useEffect(() => {
    const clothingItem = { id, color, size, numOfClothing: localNumOfClothing };
    dispatch(changeNumberOfClothingItems(clothingItem));
  }, [localNumOfClothing])

  const handleDelClick = () => {
    const clothingItem = { id, color, size, numOfClothing: localNumOfClothing };
    dispatch(removeClothingItem(clothingItem));
  }

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
        <img src={cart} alt="del-cart" onClick={handleDelClick} />
        <div className={style.btn}><CartCounterBtn number={localNumOfClothing} changeNumber={changeNumOfClothing} /></div>
      </div>
    </div>
  );
};
