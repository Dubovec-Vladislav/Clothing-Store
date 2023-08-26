import React, { FC } from 'react'
import style from './index.module.scss'
import { ClothCard, ClothInterface } from 'entities/cloth-card'
import { BlockTitle, Button } from 'shared/ui'

interface ClothRowProps {
  titleText: string,
  endBlockLine?: boolean,
  data: ClothInterface[] | undefined,
  isLoading: boolean,
}

export const ClothRow: FC<ClothRowProps> = ({ titleText, endBlockLine, data, isLoading }) => {
  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={titleText} /></div>
      <div className={style.body}>
        <div className={style.row}>
          {isLoading
            ? <div>Идет загрузка одежды...</div>
            : data
              ? data.map(item => 
                <div className={style.item}>
                  <ClothCard
                    key={item.id}
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
        <div className={style.btn}><Button text={'View All'} color={'#000'} fill={'#fff'} borderFill={'rgba(0, 0, 0, 0.10)'} /></div>
      </div>
      {endBlockLine ? <div className={style.endLine}></div> : <></>}
    </section>
  );
};