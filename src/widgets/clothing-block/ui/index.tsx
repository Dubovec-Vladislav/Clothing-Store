// General
import React, { FC } from 'react'
import style from './index.module.scss'
import { Link } from 'react-router-dom'
// Components
import { ClothingCard } from 'entities/clothing-card'
// Api
import { ClothingInterface } from 'app/api'

interface ClothingBlockProps {
  data: ClothingInterface[] | undefined,
  isLoading: boolean,
}

export const ClothingBlock: FC<ClothingBlockProps> = ({ data, isLoading }) => {

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.row}>
          {isLoading
            ? <div>Идет загрузка одежды...</div>
            : data
              ? data.map((item: ClothingInterface) =>
                <Link to={`cloth/${item.id}`} key={item.id} className={style.item} target={"_blank"}>
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
      </div>
    </section>
  );
};
