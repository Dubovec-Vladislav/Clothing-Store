// General
import React, { FC } from 'react'
import style from './index.module.scss'
import { useParams } from 'react-router'
// APi
import { getClothingItems, getClothingItemsByCategory, getClothingItemsBySearch } from 'app/commonApi'
// Slice
import { useAppSelector } from 'app/model'
import { selectSearchString } from 'features/search'
// Lib
import { defineNumberOfPages } from '../lib'
// Images
import arrowLeft from '../img/arrow-left.svg'
import arrowRight from '../img/arrow-right.svg'

interface PaginationProps {
  currentPage: number,
  setCurrentPage: (newPageNumber: number) => void,
  pageLimit: number,
  pageName: "category" | "search",
  categoryId: string,
};

export const Pagination: FC<PaginationProps> = ({ currentPage, setCurrentPage, pageLimit, pageName, categoryId }) => {
  const { id } = useParams<{ id: string }>();
  const searchStr = useAppSelector(selectSearchString)

  const { data, isLoading } = pageName === "category"
    ? getClothingItemsByCategory(categoryId || "")
    : pageName === "search"
      ? getClothingItemsBySearch(searchStr)
      : getClothingItems("");

  const dataLength: number | undefined = data?.length;
  const arrayOfPages = dataLength && defineNumberOfPages(dataLength, pageLimit, currentPage);

  return (
    <div className={style.block}>

      {currentPage > 1 // if the current page is not the first, then we can switch
        ? <div className={`${style.btn} ${style.leftBtn}`} onClick={() => setCurrentPage(currentPage - 1)}>
          <img src={arrowLeft} alt="arrow-left" />Предыдущая
        </div>
        : <div className={`${style.btn} ${style.leftBtn}`} style={{ cursor: "not-allowed" }}>
          <img src={arrowLeft} alt="arrow-left" />Предыдущая
        </div>}

      <div className={style.pageNumbers}>
        {isLoading
          ? <div style={{ padding: '18px 0px 0px 10px' }}>Идет загрузка страниц...</div>
          : arrayOfPages
            ? arrayOfPages.map((pageNumber, i) => pageNumber === 0
              ? <div key={i} className={`${style.page} ${style.ellipsis}`}>...</div>
              : pageNumber === currentPage
                ? <div key={i} className={`${style.page} ${style.activePage}`} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</div>
                : <div key={i} className={style.page} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</div>
            )
            : <div>Упс... кажется что-то пошло не так</div>
        }
      </div>

      {arrayOfPages && currentPage < arrayOfPages.length // If the current page is not the last one, then we can switch
        ? <div className={`${style.btn} ${style.rightBtn}`} onClick={() => setCurrentPage(currentPage + 1)}>
          Следующая<img src={arrowRight} alt="arrow-right" />
        </div>
        : <div className={`${style.btn} ${style.rightBtn}`} style={{ cursor: "not-allowed" }}>
          Следующая<img src={arrowRight} alt="arrow-right" />
        </div>}
    </div>
  );
};
