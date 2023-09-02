// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Components
import { FilterPopup } from 'shared/ui'
import { Button } from 'shared/ui'
import { CommentCard } from 'entities/comment'
// Api
// import { getClothingComments } from 'widgets/clothes-constructor'
import { getClothingItemById } from 'widgets/clothes-constructor'

interface CommentBlockProps {
  clothId: string | undefined,
}

export const CommentBlock: FC<CommentBlockProps> = ({ clothId }) => {
  // const { data, isLoading } = getClothingComments(clothId!);
  const { data, isLoading } = getClothingItemById(clothId!);

  // Сортировка по рейтингу от большего к меньшему
  const sortedByRatingDescending = data?.commentsList.slice().sort((a, b) => b.rating - a.rating);
  // Сортировка по рейтингу от меньшего к большему
  const sortedByRatingAscending = data?.commentsList.slice().sort((a, b) => a.rating - b.rating);

  // ДОбавить дату создания к комментариям, вынести логику filter popup сюда и все настроить
  // timeList = []
  // Сортировка по рейтингу от меньшего к большему
  const some = data?.commentsList.slice().sort((a, b) => a.rating - b.rating);

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.left}>
            <div className={style.title}>Все отзывы</div>
            <div className={style.totalComment}>(451)</div>
          </div>
          <div className={style.right}>
            <div className={style.sort}><FilterPopup /></div>
            <div className={style.addComment}><Button text={"Добавить отзыв"} /></div>
          </div>
        </div>
        <div className={style.comments}>
          {isLoading
            ? <div style={{ paddingLeft: "20px" }}>Идет загрузка комментариев...</div>
            : data
              ? data.commentsList.map((comment, i) => (
                <div key={i} className={style.comment}>
                  <CommentCard
                    rating={comment.rating}
                    name={comment.name}
                    text={comment.text}
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
