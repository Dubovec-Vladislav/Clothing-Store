// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Components
import { ColorSelectionLine } from 'features/color-selection-line'
import { SizeSelectionLine } from 'features/size-selection-line'
import { InputRange } from 'shared/ui'
import { CategoryItem } from 'shared/ui/category-item'
// Api
import { ClothingInterface } from 'app/commonApi'
// Images
import filters from '../img/filters.svg'

interface FiltersProps {
  data: ClothingInterface[] | undefined,
  isLoading: boolean,

  selectedColorsList: string[],
  changeSelectedColorsList: (newList: string[]) => void,

  selectedSizesList: number[],
  setSelectedSizesList: (newList: number[]) => void,

  minPrice: number,
  setMinPrice: (newPrice: number) => void,
  maxPrice: number,
  setMaxPrice: (newPrice: number) => void,
  // Toggle menu active
  isFilteringMenuActive: boolean,
  toggleIsFilteringMenuActive: (isActive: boolean) => void;
};

export const Filters: FC<FiltersProps> = (
  { data, isLoading,
    selectedColorsList, changeSelectedColorsList,
    selectedSizesList, setSelectedSizesList,
    minPrice, setMinPrice, maxPrice, setMaxPrice,
    isFilteringMenuActive, toggleIsFilteringMenuActive }
) => {

  const colorsList: string[] = [];
  const sizesList: number[] = [...selectedSizesList];
  data?.forEach(item => colorsList.push(item.imageObjects[0].color)); // Get all colors of clothing on the page
  data?.forEach(item => item.sizesList.forEach(size => !sizesList.includes(size) && sizesList.push(size))); // Get all sizes of clothing on the page

  const handleColorClick = (i: number) => {
    const color = colorsList[i];
    selectedColorsList.includes(color)
      ? changeSelectedColorsList(selectedColorsList.filter(item => item !== color)) // If includes, remove it
      : changeSelectedColorsList([...selectedColorsList, color]) // if not included, expand the old array and add a new element
  };

  const handleSizeClick = (i: number) => {
    const size = sizesList[i];
    selectedSizesList.includes(size)
      ? setSelectedSizesList(selectedSizesList.filter(item => item !== size)) // If includes, remove it
      : setSelectedSizesList([...selectedSizesList, size]) // if not included, expand the old array and add a new element
  };

  return (
    <section className={isFilteringMenuActive ? `${style.activeBlock} ${style.block}` : `${style.block}`}>
      <div className={style.body}>
        <div className={style.title}>
          <span>Фильтры</span>
          <img src={filters} alt="filters" />
          <div className={style.cross} onClick={() => toggleIsFilteringMenuActive(false)}></div>
        </div>
        <div className={style.content}>
          <div className={style.item}>
            <div className={style.title}>Цена</div>
            <InputRange
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
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
            {isLoading
              ? <div>Идет загрузка размеров...</div>
              : colorsList
                ? <SizeSelectionLine
                  sizesList={sizesList.sort()}
                  selectedSizesList={selectedSizesList}
                  handleSizeClick={handleSizeClick}
                />
                : <div>Упс... кажется что-то пошло не так</div>
            }
          </div>
          <div className={style.item}>
            <div className={style.title}>Другие категории</div>
            <CategoryItem path={"/category/1"} text={"Деловая"} />
            <CategoryItem path={"/category/2"} text={"Повседневная"} />
            <CategoryItem path={"/category/3"} text={"На вечеринку"} />
            <CategoryItem path={"/category/4"} text={"Для зала"} />
          </div>
        </div>
      </div>
    </section>
  );
};