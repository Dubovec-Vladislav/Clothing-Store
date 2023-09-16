import React, { FC, useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import arrow from '../img/arrow-down.svg'

interface sortType {
  name: string,
  urlName: string,
  order: string,
}

interface FilterPopupProps {
  indexOfActiveSortType: number,
  setIndexOfActiveSortType: (newActiveIndex: number) => void,
  activeSortTypeName: string,
  sortTypes: sortType[],
}

export const FilterPopup: FC<FilterPopupProps> = ({ indexOfActiveSortType, setIndexOfActiveSortType, activeSortTypeName, sortTypes }) => {
  const [isPopupActive, toggleIsPopupActive] = useState<boolean>(false);

  const handleClickMenuItem = (index: number) => {
    setIndexOfActiveSortType(index);
    toggleIsPopupActive(false);
  }

  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      sortRef.current && !e.composedPath().includes(sortRef.current) && toggleIsPopupActive(false);
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={style.block} ref={sortRef}>
      <div className={style.label} onClick={() => toggleIsPopupActive(!isPopupActive)}>
        <div className={style.text}>Порядок сортировки: <span>{activeSortTypeName}</span></div>
        <div className={isPopupActive ? `${style.arrow} ${style.activeArrow}` : `${style.arrow}`}><img src={arrow} alt="arrow" /></div>
      </div>
      <div className={isPopupActive ? `${style.activePopup} ${style.popup}` : `${style.popup}`}>
        <ul className={style.list}>
          {sortTypes.map((item, i) => (
            i === indexOfActiveSortType
              ? <li key={i} className={`${style.item} ${style.activeItem}`} onClick={() => handleClickMenuItem(i)}>{item.name}</li>
              : <li key={i} className={style.item} onClick={() => handleClickMenuItem(i)}>{item.name}</li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};
