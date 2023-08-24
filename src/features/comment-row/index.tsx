import React, { FC } from 'react'
import style from './index.module.scss'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

export const Component: FC = (props) => {
  const breakpoints = {
    1200: {
      slidesPerView: 2,
      spaceBetween: 54,
    },
    371: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  };

  const swiperOptions = {
    navigation: {
      prevEl: '.card-slider__arrow-left',
      nextEl: '.card-slider__arrow-right',
    },
    pagination: {
      el: '.card-slider__pagination',
      clickable: true,
    },

    breakpoints: { ...breakpoints },
    modules: [Navigation, Pagination, A11y],
  };

  return (
    <section className={style.block}>
      <div className={style.body}>
        <Swiper {...swiperOptions}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
