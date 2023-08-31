import React, { FC } from 'react'
import style from './index.module.scss'

interface ColorSelectionLineProps {
  colorsList: string[],
  selectedColor: string,
  handleColorClick: (i: number) => void,
}

export const ColorSelectionLine: FC<ColorSelectionLineProps> = ({ colorsList, selectedColor, handleColorClick }) => {
  return (
    <div className={style.row}>
      {colorsList.map((color, i) => (
        color === selectedColor
          ? <div key={i} className={`${style.item} ${style.selectedItem}`} style={{ backgroundColor: `${color}` }}></div>
          : <div key={i} className={style.item} style={{ backgroundColor: `${color}` }} onClick={() => handleColorClick(i)}></div>
      ))}
    </div>
  );
};