import React, { FC } from 'react'
import style from './style.module.scss'

interface SizeSelectionLineProps {
  sizeList: number[],
  selectedSize: number,
  changeSelectedSize: (newColor: number) => void,
}

export const SizeSelectionLine: FC<SizeSelectionLineProps> = ({ sizeList, selectedSize, changeSelectedSize }) => {
  return (
    <div className={style.row}>
      {sizeList.map((size, i) => (
        size === selectedSize
          ? <div key={i} className={`${style.item} ${style.selectedItem}`}>{size}</div>
          : <div key={i} className={style.item} onClick={() => changeSelectedSize(size)}>{size}</div>
      ))}
    </div>
  );
};