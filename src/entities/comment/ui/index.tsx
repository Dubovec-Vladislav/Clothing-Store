import React, { FC } from 'react'
import style from './index.module.scss'
import { Rating } from 'shared/ui'
import check from '../img/check.svg'

export interface Comment {
  id: string,
  rating: number
  name: string,
  text: string,
}

export const CommentCard: FC<Omit<Comment, 'id'>> = ({ rating, name, text }) => {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.rating}><Rating rating={rating} /></div>
        <div className={style.name}>{name}<img src={check} alt="check" /></div>
        <div className={style.text}>
          “{text}”
        </div>
      </div>
    </div>
  );
};