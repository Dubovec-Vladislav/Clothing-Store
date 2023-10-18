import React, { FC } from 'react'
import style from './style.module.scss'
import loader from './loader.svg'

export const PaySuccessLoader: FC = (props) => {
  return (
    <div className={style.block}>
      <img src={loader} alt="loader" />
    </div>
  );
};