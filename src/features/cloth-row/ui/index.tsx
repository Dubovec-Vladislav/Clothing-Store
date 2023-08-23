import React, { FC } from 'react'
import style from './index.module.scss'
import { ClothCard } from 'entities/cloth-card'
import { BlockTitle, Button } from 'shared/ui'
import { useGetClothQuery } from '../api'

export const ClothRow: FC = (props) => {
  const { data, isLoading } = useGetClothQuery('');
  console.log(data, isLoading);

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'NEW ARRIVALS'} /></div>
      <div className={style.body}>
        <div className={style.row}>
          {isLoading
            ? <div>Идет загрузка...</div>
            : data
              ? data.map(item =>
                <div className={style.item}>
                  <ClothCard
                    imageUrl={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    rating={item.rating}
                  />
                </div>
              )
              : <div>Упс... кажется что-то пошло не так</div>
          }
        </div>
        <div className={style.btn}><Button text={'View All'} color={'#000'} fill={'#FFF'} borderFill={'rgba(0, 0, 0, 0.10)'} /></div>
      </div>
    </section>
  );
};