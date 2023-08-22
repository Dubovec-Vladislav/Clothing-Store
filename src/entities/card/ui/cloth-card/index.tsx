import React, { FC } from 'react'
import style from './index.module.scss'
import { StarsLine } from 'shared/ui'
import one from '../../img/1.jpg'

export const ClothCard: FC = (props) => {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.img}><img src={one} alt="one" /></div>
        <div className={style.title}>T-SHIRT WITH TAPE DETAILS</div>
        <div className={style.rating}><StarsLine rating={4} /></div>
        <div className={style.priceBlock}>
          <div className={style.price}>$120</div>
          <div className={style.prevPrice}>$220</div>
          <div className={style.percent}>-30%</div>
        </div>
      </div>
    </div>
  );
};