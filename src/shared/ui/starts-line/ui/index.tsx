import React, { FC } from 'react'
import style from './index.module.scss'
import star from '../img/star.svg'
import halfStar from '../img/half-star.svg'

interface StarsLineProps {
  rating: number,
}

export const StarsLine: FC<StarsLineProps> = ({ rating }) => {

  return (
    <div className={style.block}>
      <div className={style.starsLine}>
        {[...new Array(Math.floor(rating))].map((_, i) => <img key={i} className={style.star} src={star} alt="star" />)}
        {Number.isInteger(rating)
          ? <></>
          : <img className={style.star} src={halfStar} alt="halfStar" />
        }
      </div>
      <div className={style.totalGrade}>{rating}/<span>5</span></div>
    </div>
  );
};