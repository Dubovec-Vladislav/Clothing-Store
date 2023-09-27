// General
import React, { FC } from 'react'
import style from './index.module.scss'
import { Link } from 'react-router-dom'
// Components
import { FilterPopup } from 'shared/ui'
import { ClothingCard } from 'entities/clothing-card'
// Api
import { ClothingInterface } from 'app/commonApi'
import { Pagination } from 'shared/ui'
// Skeleton
import { ClothingCardSkeleton } from 'shared/skeletons'
// Images
import filters from '../img/filters.svg'
// Types
import { FilterPopupProps, sortType } from 'shared/ui/filter-popup'

interface ClothingSectionProps extends FilterPopupProps {
  data: ClothingInterface[] | undefined,
  isLoading: boolean,
  title: string,
  currentPage: number,
  setCurrentPage: (newPageNumber: number) => void,
  pageLimit: number,
  sortTypes: sortType[],
  toggleIsFilteringMenuActive: (isActive: boolean) => void,
  pageName: "category" | "search",
  categoryId: string,
};

export const ClothingSection: FC<ClothingSectionProps> = (
  { data, isLoading, title, currentPage, setCurrentPage, pageLimit,
    indexOfActiveSortType, setIndexOfActiveSortType, activeSortTypeName,
    sortTypes, toggleIsFilteringMenuActive, pageName, categoryId }
) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.popupBlock}>
          <div className={style.title}>{title}</div>
          <div className={style.text}>Показаны 1–8 из 14 товаров</div>
          <div className={style.popup}>
            <FilterPopup
              indexOfActiveSortType={indexOfActiveSortType}
              setIndexOfActiveSortType={setIndexOfActiveSortType}
              activeSortTypeName={activeSortTypeName}
              sortTypes={sortTypes}
            />
          </div>
          <div className={style.filterMenu} onClick={() => toggleIsFilteringMenuActive(true)}><img src={filters} alt="filters" /></div>
        </div>
        <div className={style.row}>
          {isLoading
            ? <div className={style.skeletons}>
              {[...new Array(pageLimit)].map((_, index) =>
                <div key={index} className={style.skeleton}><ClothingCardSkeleton /></div>)}
            </div>
            : data
              ? data.length !== 0
                ? data.map((item: ClothingInterface) => (
                  <Link to={`/cloth/${item.id}`} key={item.id} className={style.item} target={""}>
                    <ClothingCard
                      imageUrl={item.imageObjects[0].previewImg}
                      name={item.name}
                      price={item.price}
                      prevPrice={item.prevPrice}
                      rating={item.rating}
                    />
                  </Link>))
                : <div className={style.clothingError}>Упс... кажется такой одежды нет</div>
              : <div>Упс... кажется что-то пошло не так</div>
          }
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageLimit={pageLimit}
          pageName={pageName}
          categoryId={categoryId}
        />
      </div>
    </section>
  );
};
