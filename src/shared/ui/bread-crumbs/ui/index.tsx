import React, { FC } from 'react'
import style from './index.module.scss'
import arrowRight from '../img/arrow-right.svg'

export const BreadCrumbs: FC = (props) => {
  return (
    <div className={style.breadCrumbs}>
      <div className={style.breadCrumb}><span>Главная</span><img src={arrowRight} alt="arrow-right" /></div>
      <div className={style.breadCrumb}><span>Магазин</span><img src={arrowRight} alt="arrow-right" /></div>
      <div className={style.breadCrumb}><span>Мужская</span><img src={arrowRight} alt="arrow-right" /></div>
      <div className={style.breadCrumb}><span>Майки</span></div>
    </div>
  );
};