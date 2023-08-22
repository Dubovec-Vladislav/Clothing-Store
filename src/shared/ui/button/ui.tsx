import React, { FC } from 'react'
import style from './index.module.scss'

interface ButtonProps {
  text: string,
  color?: string,
  fill?: string,
  borderFill?: string,
}

export const Button: FC<ButtonProps> = ({ text, color, fill, borderFill }) => {
  const propsStyle = {
    color: color || '#FFF',
    backgroundColor: fill || '#000',
    border: `1px solid ${borderFill}` || '',
  };

  return (
    <div className={style.block} style={propsStyle}>{text}</div>
  );
};