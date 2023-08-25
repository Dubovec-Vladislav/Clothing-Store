// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Slider
import { Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
// Components
import { CommentCard } from 'entities/comment'
import { BlockTitle } from 'shared/ui'
// Img
import arrowLeft from '../img/arrow-left.svg'
import arrowRight from '../img/arrow-right.svg'
//Api
import { useGetTopCommentsQuery } from '../api'

export const CommentSlider: FC = (props) => {
  const breakpoints = {
    1100: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    934: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    596: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    279: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  };

  const swiperOptions = {
    initialSlide: 1,
    loop: true,

    grabCursor: true,
    navigation: {
      prevEl: '.comment-slider__arrow-left',
      nextEl: '.comment-slider__arrow-right',
    },

    breakpoints: { ...breakpoints },
    modules: [Navigation, A11y],
  };

  const { data, isLoading } = useGetTopCommentsQuery('');

  const maxWords = 26;
  const newData = data?.map(item => {
    const words = item.text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    const truncatedText = truncatedWords.join(' ');

    const ellipsis = words.length > maxWords ? '...' : '';

    return { ...item, text: truncatedText + ellipsis };
  });

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
        <Swiper className={style.slider} {...swiperOptions}>
          {isLoading
            ? <div>Идет загрузка...</div>
            : newData
              ? newData.map(item =>
                <SwiperSlide className={style.slide} key={item.id}>
                  <CommentCard
                    rating={item.rating}
                    name={item.name}
                    text={item.text}
                  />
                </SwiperSlide>
              )
              : <div>Упс... кажется что-то пошло не так</div>
          }
        </Swiper>
      </div>
    </section>
  );
};
