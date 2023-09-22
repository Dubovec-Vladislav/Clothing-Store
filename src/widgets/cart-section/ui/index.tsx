import React, { FC } from 'react'
import style from './index.module.scss'
import { CartCard } from 'entities/cart-card'
import { useAppSelector } from 'app/model'
import { selectCartClothingItems } from '../model'

export const CartSection: FC = (props) => {
  const clothingItems = useAppSelector(selectCartClothingItems);
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.content}>
          {clothingItems.length
            ? clothingItems.map((clothingItem, i) =>
              <CartCard
                key={i}
                id={clothingItem.id}
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
