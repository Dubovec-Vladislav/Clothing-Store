import React, { FC } from 'react'
import style from './index.module.scss'

interface ColorSelectionLineProps {
  colorsList: string[],
  selectedColor?: string,
  selectedColorsList?: string[],
  handleColorClick: (newColorIndex: number) => void,
}

export const ColorSelectionLine: FC<ColorSelectionLineProps> = React.memo(({ colorsList, selectedColor, selectedColorsList, handleColorClick }) => {
  return (
    <div className={style.row}>
      {selectedColorsList
        ? colorsList.map((color, i) => (
          selectedColorsList.includes(color)
            ? <div key={i} className={`${style.item} ${style.selectedItem}`} style={{ backgroundColor: `${color}` }} onClick={() => handleColorClick(i)}></div>
            : <div key={i} className={style.item} style={{ backgroundColor: `${color}` }} onClick={() => handleColorClick(i)}></div>
        ))
        : colorsList.map((color, i) => (
          color === selectedColor
            ? <div key={i} className={`${style.item} ${style.selectedItem}`} style={{ backgroundColor: `${color}` }}></div>
            : <div key={i} className={style.item} style={{ backgroundColor: `${color}` }} onClick={() => handleColorClick(i)}></div>
        ))}
    </div>
  );
});