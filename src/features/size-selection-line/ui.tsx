import React, { FC } from 'react'
import style from './style.module.scss'

interface colorSelectionLineProps {
  colorsList: string[],
  selectedColor: string,
  changeSelectedColor: (newColor: string) => void,
}

export const ColorSelectionLine: FC<colorSelectionLineProps> = ({ colorsList, selectedColor, changeSelectedColor }) => {
  return (
    <div className={style.row}>
      {colorsList.map((color, i) => (
        color === selectedColor
          ? <div key={i} className={`${style.item} ${style.selectedItem}`} style={{ backgroundColor: `${color}` }}></div>
          : <div key={i} className={style.item} style={{ backgroundColor: `${color}` }} onClick={() => changeSelectedColor(color)}></div>
      ))}
    </div>
  );
};