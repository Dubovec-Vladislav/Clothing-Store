import React, { FC } from 'react'
import style from './index.module.scss'

interface ButtonProps {
  text: string,
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <div className={style.block}>{text}</div>
  );
};