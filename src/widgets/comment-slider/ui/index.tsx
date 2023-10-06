// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Slider
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { swiperOptions } from '../lib/swiper'
// Components
import { CommentCard } from 'entities/comment'
import { BlockTitle } from 'shared/ui'
//Api
import { useGetTopCommentsQuery } from '../api'
// Lib
import { truncateTextInObjects } from '../lib/truncate-text-in-objects'
// Img
import arrowLeft from '../img/arrow-left.svg'
import arrowRight from '../img/arrow-right.svg'

export const CommentSlider: FC = (props) => {
  const { data, isLoading } = useGetTopCommentsQuery('');
  const MAX_WORDS = 25;
  const newData = data && truncateTextInObjects(data, MAX_WORDS);

  return (
    <section className={style.block}>
      <div className={style.header}>
        <div className={style.title}><BlockTitle text={'Наши счастливые клиенты'} /></div>
        <div className={style.navigation}>
          <div className={`${style.arrow} comment-slider__arrow-left`}><img src={arrowLeft} alt="arrow-left" /></div>
          <div className={`${style.arrow} comment-slider__arrow-right`}><img src={arrowRight} alt="arrow-right" /></div>
        </div>
      </div>
      <div className={style.body}>
        {isLoading
          ? <div>Идет загрузка комментариев...</div>
          : <Swiper className={style.slider} {...swiperOptions}>
            {newData
              ? newData.map((item, i) => (
                <SwiperSlide className={style.slide} key={i}>
                  <CommentCard
                    rating={item.rating}
                    name={item.name}
                    text={item.text}
                  />
                </SwiperSlide>
              ))
              : <div>Упс... кажется что-то пошло не так</div>
            }
          </Swiper>
        }
      </div>
    </section>
  );
};
