// General
import React, { FC, useState, useEffect } from 'react'
import style from './index.module.scss'
// Components
import { FilterPopup } from 'shared/ui'
import { Button } from 'shared/ui'
import { CommentCard, CommentInterface } from 'entities/comment'
// Api
import { getClothingItemById } from 'widgets/clothes-constructor'
// Lib
import { sortBySelectedType, sortTypes } from '../lib'

interface CommentBlockProps {
  clothId: string | undefined,
}

export const CommentBlock: FC<CommentBlockProps> = ({ clothId }) => {
  const [indexOfActiveSortType, setIndexOfActiveSortType] = useState<number>(0);
  const [sortedData, setSortedData] = useState<CommentInterface[]>();
  const activeSortType = sortTypes[indexOfActiveSortType];
  const { data, isLoading } = getClothingItemById(clothId!);
  
  useEffect(() => {
    if (data) {
      const newSortedData = sortBySelectedType(data.commentsList, activeSortType.urlName, activeSortType.order);
      setSortedData(newSortedData);
    }
  }, [data, activeSortType]);

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.left}>
            <div className={style.title}>Все отзывы</div>
            <div className={style.totalComment}>(451)</div>
          </div>
          <div className={style.right}>
            <div className={style.sort}>
              <FilterPopup
                indexOfActiveSortType={indexOfActiveSortType}
                setIndexOfActiveSortType={setIndexOfActiveSortType}
                activeSortTypeName={activeSortType.name}
                sortTypes={sortTypes}
              />
            </div>
            <div className={style.addComment}><Button text={"Добавить отзыв"} /></div>
          </div>
        </div>
        <div className={style.comments}>
          {isLoading
            ? <div style={{ paddingLeft: "20px" }}>Идет загрузка комментариев...</div>
            : sortedData
              ? sortedData.map((comment, i) => (
                <div key={i} className={style.comment}>
                  <CommentCard
                    rating={comment.rating}
                    name={comment.name}
                    text={comment.text}
                    timeSinceCreatedDate={comment.timeSinceCreatedDate}
                  />
                </div>
              ))
              : <div>Упс... кажется что-то пошло не так</div>
          }
        </div>
      </div>
    </section>
  );
};
