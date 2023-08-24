import React, { FC } from 'react'
import style from './index.module.scss'
import { Rating } from 'shared/ui'
import check from '../img/check.svg'

export const Comment: FC = (props) => {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.rating}><Rating rating={5} /></div>
        <div className={style.name}>Sarah M.<img src={check} alt="check" /></div>
        <div className={style.text}>
          "I'm blown away by the quality and style of the clothes I received from Shop.co.
          From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
        </div>
      </div>
    </div>
  );
};