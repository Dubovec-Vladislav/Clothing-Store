// General
import React, { FC } from 'react'
import style from './index.module.scss'
import filters from '../img/filters.svg'
// Components
import { ColorSelectionLine } from 'features/color-selection-line'
// import { SizeSelectionLine } from 'features/size-selection-line'
// Api
import { ClothingInterface } from 'app/api'

interface FiltersProps {
  data: ClothingInterface[] | undefined,
  isLoading: boolean,
  selectedColorList: string[],
  changeSelectedColorList: (newList: string[]) => void,
}

export const Filters: FC<FiltersProps> = ({ data, isLoading, selectedColorList, changeSelectedColorList }) => {
  const colorsList: string[] = [];
  data?.forEach(item => colorsList.push(item.imageObjects[0].color));

  const handleColorClick = (i: number) => {
    const color = colorsList[i];
    selectedColorList.includes(color)
      ? changeSelectedColorList(selectedColorList.filter(item => item !== color)) // If includes, remove it
      : changeSelectedColorList([...selectedColorList, color]) // if not included, expand the old array and add a new element
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
          {isLoading
            ? <div>Идет загрузка расцветок...</div>
            : colorsList
              ? <ColorSelectionLine
                colorsList={colorsList}
                selectedColorList={selectedColorList}
                handleColorClick={handleColorClick}
              />
              : <div>Упс... кажется что-то пошло не так</div>
          }
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