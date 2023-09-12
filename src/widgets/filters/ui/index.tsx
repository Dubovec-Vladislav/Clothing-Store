// General
import React, { FC } from 'react'
import style from './index.module.scss'
import filters from '../img/filters.svg'
// Components
import { ColorSelectionLine } from 'features/color-selection-line'
import { SizeSelectionLine } from 'features/size-selection-line'
// Api
import { ClothingInterface } from 'app/api'

interface FiltersProps {
  data: ClothingInterface[] | undefined,
  isLoading: boolean,
  selectedColorsList: string[],
  changeSelectedColorsList: (newList: string[]) => void,
  selectedSizesList: number[],
  changeSelectedSizesList: (newList: number[]) => void,
}

export const Filters: FC<FiltersProps> = (
  { data, isLoading,
    selectedColorsList, changeSelectedColorsList,
    selectedSizesList, changeSelectedSizesList }
) => {
  const colorsList: string[] = [];
  const sizesList: number[] = [38, 40, 42, 44, 46, 48, 50, 52, 54, 56];
  data?.forEach(item => colorsList.push(item.imageObjects[0].color)); // Get all colors of clothing on the page

  const handleColorClick = (i: number) => {
    const color = colorsList[i];
    selectedColorsList.includes(color)
      ? changeSelectedColorsList(selectedColorsList.filter(item => item !== color)) // If includes, remove it
      : changeSelectedColorsList([...selectedColorsList, color]) // if not included, expand the old array and add a new element
  };

  const handleSizeClick = (i: number) => {
    const size = sizesList[i];
    selectedSizesList.includes(size)
      ? changeSelectedSizesList(selectedSizesList.filter(item => item !== size)) // If includes, remove it
      : changeSelectedSizesList([...selectedSizesList, size]) // if not included, expand the old array and add a new element
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
                selectedColorsList={selectedColorsList}
                handleColorClick={handleColorClick}
              />
              : <div>Упс... кажется что-то пошло не так</div>
          }
        </div>
        <div className={style.item}>
          <div className={style.title}>Размер</div>
          <SizeSelectionLine
            sizesList={sizesList}
            selectedSizesList={selectedSizesList}
            handleSizeClick={handleSizeClick}
          />
        </div>
        <div className={style.item}>
          <div className={style.title}>Другие категории</div>
          {/* <SizeSelectionLine /> */}
        </div>
      </div>
    </section>
  );
};