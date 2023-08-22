import React, { FC } from 'react'
import style from './index.module.scss'
import { ClothCard } from 'entities/card'
import { BlockTitle, Button } from 'shared/ui';

export const ClothRow: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'NEW ARRIVALS'} /></div>
      <div className={style.body}>
        <div className={style.row}>
          <div className={style.item}><ClothCard /></div>
          <div className={style.item}><ClothCard /></div>
          <div className={style.item}><ClothCard /></div>
          <div className={style.item}><ClothCard /></div>
        </div>
        <div className={style.btn}><Button text={'View All'} color={'#000'} fill={'#FFF'} borderFill={'rgba(0, 0, 0, 0.10)'} /></div>
      </div>
    </section>
  );
};