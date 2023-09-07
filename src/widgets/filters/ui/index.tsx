import React, { FC, useState, useEffect, useMemo } from 'react'
import style from './index.module.scss'
import filters from '../img/filters.svg'
import { ColorSelectionLine } from 'features/color-selection-line'
import { getClothingItems } from 'widgets/clothing-constructor'
// import { SizeSelectionLine } from 'features/size-selection-line'

export const Filters: FC = (props) => {
  const { data, isLoading } = getClothingItems(4);

  const colorsList: string[] = useMemo(() => {
    const colorsList: string[] = [];
    data?.forEach(item => item.imageObjects.forEach(imageObject => colorsList.push(imageObject.color)));
    return colorsList;
  }, [data]);
  const [selectedColor, changeSelectedColor] = useState<string>('');
  const [selectedColorList, changeSelectedColorList] = useState<string[]>([]);

  useEffect(() => {
    if (!isLoading) {
      const color = colorsList[0];

      changeSelectedColor(color);
      changeSelectedColorList(prevSelectedColorList => [...prevSelectedColorList, color]);
    }
  }, [isLoading, colorsList]);

  const handleColorClick = (i: number) => {
    const color = colorsList[i];

    changeSelectedColor(color);
    selectedColorList.includes(color)
      ? changeSelectedColorList(selectedColorList.filter(item => item !== color))
      : changeSelectedColorList([...selectedColorList, color])
  };

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.item}>
          <div className={style.title}><span>Фильтры</span><img src={filters} alt="filters" /></div>
        </div>
        <div className={style.item}>
          <div className={style.title}>Цена</div>
          <input type="range" min="0" max="100" />
        </div>
        <div className={style.item}>
          <div className={style.title}>Расцветки</div>
          <ColorSelectionLine
            colorsList={colorsList}
            selectedColor={selectedColor}
            selectedColorList={selectedColorList}
            handleColorClick={handleColorClick}
          />
        </div>
        <div className={style.item}>
          <div className={style.title}>Размер</div>
          {/* <SizeSelectionLine /> */}
        </div>
        <div className={style.item}>
          <div className={style.title}>Другие категории</div>
          {/* <SizeSelectionLine /> */}
        </div>
      </div>
    </section>
  );
};