import React, { FC } from 'react'
import style from './style.module.scss'

interface CartCounterBtnProps {
  number: number;
  changeNumber: (newNum: number) => void;
}

export const CartCounterBtn: FC<CartCounterBtnProps> = ({ number, changeNumber }) => {
  return (
    <div className={style.block}>
      {number > 1
        ? <div className={style.minus} onClick={() => changeNumber(number - 1)}></div>
        : <div className={`${style.minus} ${style.disabledMinus}`}></div>
      }
      <span>{number}</span>
      <div className={style.plus} onClick={() => changeNumber(number + 1)}></div>
    </div>
  );
};
