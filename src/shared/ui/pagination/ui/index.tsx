// General
import React, { FC, useState } from 'react'
import style from './index.module.scss'
// APi
import { getClothingItems } from 'app/api'
// Lib
import { defineNumberOfPages } from '../lib'
// Images
import arrowLeft from '../img/arrow-left.svg'
import arrowRight from '../img/arrow-right.svg'

interface Pagination {
  currentPage: number,
  setCurrentPage: (newPageNumber: number) => void,
  pageLimit: number,
}

export const Pagination: FC<Pagination> = ({ currentPage, setCurrentPage, pageLimit }) => {
  const { data, isLoading } = getClothingItems('');
  const dataLength: number | undefined = data?.length;
  const arrayOfPages = dataLength && defineNumberOfPages(dataLength, pageLimit);

  return (
    <div className={style.block}>
      <div
        className={`${style.btn} ${style.leftBtn}`}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      // if the current page is not the first, then we can switch
      >
        <img src={arrowLeft} alt="arrow-left" />Предыдущая
      </div>
      <div className={style.pageNumbers}>
        {isLoading
          ? <div style={{ padding: '18px 0px 0px 10px' }}>Идет загрузка страниц...</div>
          : arrayOfPages
            ? arrayOfPages.length < 7
              ? arrayOfPages.map(pageNumber => pageNumber === currentPage
                ? <div key={pageNumber} className={`${style.page} ${style.activePage}`} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</div>
                : <div key={pageNumber} className={style.page} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</div>
              )
              : <></>
            //     : (pageNumber <= currentPage + 2 || pageNumber >= arrayOfPages.length - 2)
            // ? <div className={style.page}>{pageNumber}</div>
            // : <div className={style.page}>...</div>
            : <div>Упс... кажется что-то пошло не так</div>
        }
      </div>
      <div
        className={`${style.btn} ${style.rightBtn}`}
        onClick={() => (arrayOfPages && currentPage < arrayOfPages.length) && setCurrentPage(currentPage + 1)}
      // If the current page is not the last one, then we can switch
      >
        Следующая<img src={arrowRight} alt="arrow-right" />
      </div>
    </div>
  );
};
