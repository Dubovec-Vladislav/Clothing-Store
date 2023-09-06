// General
import React, { FC, useState } from 'react'
import style from './index.module.scss'
import { Link } from 'react-router-dom'
// Components
import { BlockTitle, Button } from 'shared/ui'
import { ClothingCard } from 'entities/clothing-card'
// Api
import { getClothingItems, getNewClothing, getTopSellingClothing } from 'widgets/clothing-constructor'

interface ClothingRowProps {
  titleText: string,
  endBlockLine?: boolean,
  newClothing?: boolean,
  topClothing?: boolean,
}

export const ClothingRow: FC<ClothingRowProps> = ({ titleText, endBlockLine, newClothing, topClothing }) => {
  const getHook = topClothing ? getTopSellingClothing : newClothing ? getNewClothing : getClothingItems;

  const [limit, setLimit] = useState<number>(9);
  const { data, isLoading } = getHook(limit);

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={titleText} /></div>
      <div className={style.body}>
        <div className={style.row}>
          {isLoading
            ? <div>Идет загрузка одежды...</div>
            : data
              ? data.map((item: any) =>
                <Link to={`cloth/${item.id}`} key={item.id} className={style.item}>
                  <ClothingCard
                    imageUrl={item.imageObjects[0].previewImg}
                    name={item.name}
                    price={item.price}
                    prevPrice={item.prevPrice}
                    rating={item.rating}
                  />
                </Link>
              )
              : <div>Упс... кажется что-то пошло не так</div>
          }
        </div>
        <div className={style.btn} onClick={() => setLimit(limit + 2)}><Button text={'View All'} color={'#000'} fill={'#fff'} borderFill={'rgba(0, 0, 0, 0.10)'} /></div>
      </div>
      {endBlockLine && <div className={style.endLine}></div>}
    </section>
  );
};