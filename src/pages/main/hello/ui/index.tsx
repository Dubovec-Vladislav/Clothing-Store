import React, { FC } from 'react'
import style from './index.module.scss'
import hello from '../img/hello.jpg'
import star1 from '../img/star1.svg'
import star2 from '../img/star2.svg'
import { Button } from 'shared/ui'

export const Hello: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.textBlock}>
          <div className={style.title}><span>FIND CLOTHES</span> <span>THAT MATCHES</span> <span>YOUR STYLE</span></div>
          <div className={style.subtitle}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </div>
          <div className={style.btn}><Button text={'Shop Now'} /></div>
          <div className={style.numbers}>
            <div className={style.numbersItem}>
              <div className={style.numbersTitle}>200+</div>
              <div className={style.numbersSubtitle}>International Brands</div>
            </div>
            <div className={style.numbersItem}>
              <div className={style.numbersTitle}>2,000+</div>
              <div className={style.numbersSubtitle}>High-Quality Products</div>
            </div>
            <div className={style.numbersItem}>
              <div className={style.numbersTitle}>30,000+</div>
              <div className={style.numbersSubtitle}>Happy Customers</div>
            </div>
          </div>
        </div>
        <div className={style.imgBlock}>
          <img src={hello} alt="hello" />
          <div className={style.star1}><img src={star1} alt="star1" /></div>
          <div className={style.star2}><img src={star2} alt="star2" /></div>
        </div>
      </div>
    </section>
  );
};