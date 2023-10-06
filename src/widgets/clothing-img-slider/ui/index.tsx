// General
import React, { FC } from 'react'
import style from './index.module.scss'
// Slider
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { swiperOptions } from '../lib/swiper'
// Img
import arrowLeft from '../img/arrow-left.svg'
import arrowRight from '../img/arrow-right.svg'
// Interfaces
import { ImageObjectInterface } from 'app/commonApi'

interface ClothingImgSliderProps {
  activeImageObject: ImageObjectInterface | undefined,
}

export const ClothingImgSlider: FC<ClothingImgSliderProps> = ({ activeImageObject }) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={`${style.arrow} clothing-img-slider__arrow-left`}><img src={arrowLeft} alt="arrow-left" /></div>
        <Swiper className={style.slider} {...swiperOptions}>
          {activeImageObject?.images.map((img, i) => (
            <SwiperSlide className={style.slide}>
              <img src={img} alt={`cloth-img ${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Swiper className={style.slider} {...swiperOptions}>
          <SwiperSlide className={style.slide}>
            1
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            2
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            3
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            4
          </SwiperSlide>
        </Swiper> */}
        <div className={`${style.arrow} clothing-img-slider__arrow-right`}><img src={arrowRight} alt="arrow-right" /></div>
      </div>
    </section>
  );
};