import React, { FC, useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import arrow from '../img/arrow-down.svg'

export const FilterPopup: FC = (props) => {
  const sortTypes = [
    { name: "новые", urlName: "createdAt", order: "desc" },
    { name: "старые", urlName: "createdAt", order: "asc" },
    { name: "с высоким рейтингом", urlName: "rating", order: "desc" },
    { name: "с низким рейтингом", urlName: "rating", order: "asc" },
  ];

  const [isPopupActive, toggleIsPopupActive] = useState<boolean>(false);
  const [activeSortType, setActiveSortType] = useState<string>(sortTypes[0].name);

  const handleClickMenuItem = (item: string) => {
    setActiveSortType(item);
    toggleIsPopupActive(false);
  }

  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) toggleIsPopupActive(false);
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={style.block} ref={sortRef}>
      <div className={style.label}>
        <div className={style.text} onClick={() => toggleIsPopupActive(!isPopupActive)}>Порядок сортировки: <span>{activeSortType}</span></div>
        <div className={isPopupActive ? `${style.arrow} ${style.activeArrow}` : `${style.arrow}`}><img src={arrow} alt="arrow" /></div>
      </div>
      <div className={isPopupActive ? `${style.activePopup} ${style.popup}` : `${style.popup}`}>
        <ul className={style.list}>
          {sortTypes.map((item, index) => (
            item.name === activeSortType
              ? <li key={index} className={`${style.item} ${style.activeItem}`} onClick={() => handleClickMenuItem(item.name)}>{item.name}</li>
              : <li key={index} className={style.item} onClick={() => handleClickMenuItem(item.name)}>{item.name}</li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};
