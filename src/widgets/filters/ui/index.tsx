import React, { FC } from 'react'
import style from './index.module.scss'
import filters from '../img/filters.svg'
import { ColorSelectionLine } from 'features/color-selection-line'
import { SizeSelectionLine } from 'features/size-selection-line'

export const Filters: FC = (props) => {

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.item}>
          <div className={style.title}><span>Фильтры</span><img src={filters} alt="filters" /></div>
        </div>
        <div className={style.item}>
          <div className={style.title}>Цена</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>Расцветки</div>
          {/* <ColorSelectionLine /> */}
        </div>
        <div className={style.item}>
          <div className={style.title}>Размер</div>
          {/* <SizeSelectionLine /> */}
        </div>
        <div className={style.item}>
          <div className={style.title}>Другие категории</div>
          {/* <SizeSelectionLine /> */}
        </div>
      </div>
    </section>
  );
};
