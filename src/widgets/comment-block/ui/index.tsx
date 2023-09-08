// General
import React, { FC, useState, useEffect } from 'react'
import style from './index.module.scss'
// Components
import { FilterPopup } from 'shared/ui'
import { Button } from 'shared/ui'
import { CommentCard, CommentInterface } from 'entities/comment'
// Api
import { getClothingItemById } from 'app/api'
// Lib
import { sortBySelectedType, sortTypes } from '../lib'

interface CommentBlockProps {
  clothId: string | undefined,
}

export const CommentBlock: FC<CommentBlockProps> = ({ clothId }) => {
  const [limit, setLimit] = useState<number>(2);
  const [indexOfActiveSortType, setIndexOfActiveSortType] = useState<number>(0);
  const [sortedData, setSortedData] = useState<CommentInterface[]>();
  const [sortedDataLength, setSortedDataLength] = useState<number>(0);
  const activeSortType = sortTypes[indexOfActiveSortType];
  const { data, isLoading } = getClothingItemById(clothId!);

  useEffect(() => {
    if (data) {
      const newSortedData = sortBySelectedType(data.commentsList, activeSortType.urlName, activeSortType.order);
      setSortedDataLength(newSortedData.length);
      setSortedData(newSortedData.slice(0, limit));
    }
  }, [data, activeSortType, limit]);

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.left}>
            <div className={style.title}>Все отзывы</div>
            <div className={style.totalComment}>({sortedDataLength})</div>
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
        {sortedDataLength > limit
          && <div className={style.btn} onClick={() => setLimit(limit + 2)}>
            <Button text={"Загрузить больше"} color={"#000"} fill={"#fff"} borderFill={"#0000001A"} />
          </div>}
      </div>
    </section>
  );
};
