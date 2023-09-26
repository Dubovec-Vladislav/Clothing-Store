import React, { FC, useState } from 'react'
import style from './index.module.scss'
import { CartCard } from 'entities/cart-card'
import { useAppSelector } from 'app/model'
import { selectCartClothingItems } from '../model'
import { Button } from 'shared/ui'

export const CartSection: FC = (props) => {
  const DEFAULT_CART_LIMIT = 4;
  const [cartLimit, changeCartLimit] = useState<number>(DEFAULT_CART_LIMIT);

  const clothingItems = useAppSelector(selectCartClothingItems);
  const limitedClothingItems = useAppSelector(selectCartClothingItems).slice(0, cartLimit);

  const btnPlaceholder = clothingItems.length < cartLimit + DEFAULT_CART_LIMIT
    ? `Посмотреть еще (${clothingItems.length - cartLimit})`
    : `Посмотреть еще ${DEFAULT_CART_LIMIT}`;

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.content}>
          {limitedClothingItems.length
            ? limitedClothingItems.map((clothingItem, i) =>
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
          {clothingItems.length > cartLimit &&
            <div className={style.btnBlock}>
              <div className={style.moreBtn} onClick={() => changeCartLimit(cartLimit + 4)}>
                <Button
                  text={btnPlaceholder}
                  color={"#000"}
                  fill={"#fff"}
                  borderFill={"#E6E6E6"}
                  hoverFill={"#E6E6E6"}
                />
              </div>
              <div className={style.allBtn} onClick={() => changeCartLimit(clothingItems.length)}>
                <span>Все ({clothingItems.length})</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};
