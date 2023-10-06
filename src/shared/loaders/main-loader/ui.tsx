import React, { FC } from 'react'
import style from './style.module.scss'
import loader from './main-loader.svg'

export const MainLoader: FC = (props) => {
  return (
    <div className={style.block}>
      <img src={loader} alt="main-loader" />
    </div>
  );
};