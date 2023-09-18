// General
import React, { FC } from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
// Components
import { FilterPopup } from 'shared/ui'
import { ClothingCard } from 'entities/clothing-card'
// Api
import { ClothingInterface } from 'app/api'
import { Pagination } from 'shared/ui'
// Skeleton
import { ClothingCardSkeleton } from 'shared/skeletons'
// Types
import { FilterPopupProps, sortType } from 'shared/ui/filter-popup'

interface ClothingBlockProps extends FilterPopupProps {
  data: ClothingInterface[] | undefined,
  isLoading: boolean,
  currentPage: number,
  setCurrentPage: (newPageNumber: number) => void,
  pageLimit: number,
  sortTypes: sortType[],
}

export const ClothingBlock: FC<ClothingBlockProps> = (
  { data, isLoading, currentPage, setCurrentPage, pageLimit,
    indexOfActiveSortType, setIndexOfActiveSortType, activeSortTypeName, sortTypes }
) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.popupBlock}>
          <div className={style.title}>Деловая</div>
          <div className={style.text}>Показаны 1–8 из 14 товаров</div>
          <FilterPopup
            indexOfActiveSortType={indexOfActiveSortType}
            setIndexOfActiveSortType={setIndexOfActiveSortType}
            activeSortTypeName={activeSortTypeName}
            sortTypes={sortTypes}
          />
        </div>
        <div className={style.row}>
          {isLoading
            ? <div className={style.skeletons}>{[...new Array(pageLimit)].map((_, index) => <ClothingCardSkeleton key={index} />)}</div>
            : data
              ? data.length !== 0
                ? data.map((item: ClothingInterface) => (
                  <Link to={`/cloth/${item.id}`} key={item.id} className={style.item} target={"_blank"}>
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
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageLimit={pageLimit} />
      </div>
    </section>
  );
};
