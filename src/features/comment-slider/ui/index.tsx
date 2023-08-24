import React, { FC } from 'react'
import style from './index.module.scss'

import { Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

import { Comment } from 'entities/comment'
import { BlockTitle } from 'shared/ui'

export const CommentSlider: FC = (props) => {
  const breakpoints = {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    371: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  };

  const swiperOptions = {
    loop: true,
    navigation: {
      prevEl: '.card-slider__arrow-left',
      nextEl: '.card-slider__arrow-right',
    },

    breakpoints: { ...breakpoints },
    modules: [Navigation, A11y],
  };

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Наши счастливые клиенты'} /></div>
      <div className={style.body}>
        <Swiper className={style.slider} {...swiperOptions}>
          <SwiperSlide className={style.slide}><Comment /></SwiperSlide>
          <SwiperSlide className={style.slide}><Comment /></SwiperSlide>
          <SwiperSlide className={style.slide}><Comment /></SwiperSlide>
          <SwiperSlide className={style.slide}><Comment /></SwiperSlide>
          <SwiperSlide className={style.slide}><Comment /></SwiperSlide>
          <SwiperSlide className={style.slide}><Comment /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
