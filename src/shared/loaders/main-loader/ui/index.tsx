import React, { FC } from 'react'
import style from './index.module.scss'
import loader from '../loaders/main-loader.svg'

export const MainLoader: FC = (props) => {
  return (
    <div className={style.block}>
      <img src={loader} alt="main-loader" />
    </div>
  );
};