import React, { FC } from 'react'
import style from './index.module.scss'
import { CartCard } from 'entities/cart-card'
import { useAppSelector } from 'app/model'
import { selectCartClothingItems } from '../model'

export const CartBlock: FC = (props) => {
  const clothingItems = useAppSelector(selectCartClothingItems);
  console.log(clothingItems);
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.content}>
          {clothingItems.length
            ? clothingItems.map(clothingItem =>
              <CartCard
                previewImg={clothingItem.previewImg}
                name={clothingItem.name}
                price={clothingItem.price}
                color={clothingItem.color}
                size={clothingItem.size}
                numOfClothing={clothingItem.numOfClothing}
              />
            )
            : <div>Упс... кажется ваша корзина пуста</div>
          }
        </div>
      </div>
    </section>
  );
};
