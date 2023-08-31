import React, { FC } from 'react'
import style from './index.module.scss'
import { Button } from 'shared/ui'
import { FilterPopup } from 'shared/ui/filter-popup'
import { CommentCard } from 'entities/comment'

export const CommentBlock: FC = (props) => {
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
          <div className={style.comment}>
            <CommentCard
              rating={4.5}
              name='Саманта Д.'
              text={"Мне очень нравится эта футболка! Дизайн уникален, а ткань очень комфортна. Как коллега-дизайнер, я ценю внимание к деталям. Она стала моей любимой рубашкой."}
            />
          </div>
          <div className={style.comment}>
            <CommentCard
              rating={4.5}
              name='Саманта Д.'
              text={"Мне очень нравится эта футболка! Дизайн уникален, а ткань очень комфортна. Как коллега-дизайнер, я ценю внимание к деталям. Она стала моей любимой рубашкой."}
            />
          </div>
          <div className={style.comment}>
            <CommentCard
              rating={4.5}
              name='Саманта Д.'
              text={"Мне очень нравится эта футболка! Дизайн уникален, а ткань очень комфортна. Как коллега-дизайнер, я ценю внимание к деталям. Она стала моей любимой рубашкой."}
            />
          </div>
          <div className={style.comment}>
            <CommentCard
              rating={4.5}
              name='Саманта Д.'
              text={"Мне очень нравится эта футболка! Дизайн уникален, а ткань очень комфортна. Как коллега-дизайнер, я ценю внимание к деталям. Она стала моей любимой рубашкой."}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
