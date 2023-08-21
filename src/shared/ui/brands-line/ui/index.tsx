import React, { FC } from 'react'
import style from './index.module.scss'
import versace from '../img/versace.png'
import zara from '../img/zara.png'
import gucci from '../img/gucci.png'
import prada from '../img/prada.png'
import calvinKlein from '../img/calvin-klein.png'

export const BrandsLine: FC = (props) => {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.item}><img src={versace} alt="versace" /></div>
        <div className={style.item}><img src={zara} alt="zara" /></div>
        <div className={style.item}><img src={gucci} alt="gucci" /></div>
        <div className={style.item}><img src={prada} alt="prada" /></div>
        <div className={style.item}><img src={calvinKlein} alt="calvinKlein" /></div>
      </div>
    </div>
  );
};