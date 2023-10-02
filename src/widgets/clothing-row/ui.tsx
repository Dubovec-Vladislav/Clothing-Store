// General
import React, { FC, useState } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
// Components
import { BlockTitle, Button } from 'shared/ui'
import { ClothingCard } from 'entities/clothing-card'
// Api
import { ClothingInterface, getClothingItems, getNewClothing, getTopSellingClothing } from 'app/commonApi'
// Skeleton
import { ClothingCardSkeleton } from 'shared/skeletons'

interface ClothingRowProps {
  titleText: string,
  endBlockLine?: boolean,
  newClothing?: boolean,
  topClothing?: boolean,
}

export const ClothingRow: FC<ClothingRowProps> = ({ titleText, endBlockLine, newClothing, topClothing }) => {
  const getHook = topClothing ? getTopSellingClothing : newClothing ? getNewClothing : getClothingItems;

  const [limit, setLimit] = useState<number>(4);
  const { data, isLoading } = getHook(limit);

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={titleText} /></div>
      <div className={style.body}>
        <div className={style.row}>
          {isLoading
            ? <div className={style.skeletons}>
              {[...new Array(4)].map((_, index) =>
                <div className={style.skeleton} key={index}><ClothingCardSkeleton key={index} /></div>
              )}</div>
            : data
              ? data.map((item: ClothingInterface) =>
                <Link to={`/cloth/${item.id}`} key={item.id} className={style.item}>
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
        {limit < 8 && <div className={style.btn} onClick={() => setLimit(limit + 4)}>
          <Button text={"Посмотреть ещё (4)"} color={"#000"} fill={"#fff"} borderFill={"#E6E6E6"} hoverFill={"#E6E6E6"} />
        </div>}
      </div>
      {endBlockLine && <div className={style.endLine}></div>}
    </section>
  );
};