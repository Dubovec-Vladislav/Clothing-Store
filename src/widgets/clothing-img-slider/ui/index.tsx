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
import cross from '../img/cross.svg'
// Interfaces
import { ImageObjectInterface } from 'app/commonApi'

interface ClothingImgSliderProps {
  sliderList: string[] | undefined,
  changeSliderActive: (bool: boolean) => void,
}

export const ClothingImgSlider: FC<ClothingImgSliderProps> = ({ sliderList, changeSliderActive }) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={`${style.arrow} clothing-img-slider__arrow-left`}><img src={arrowLeft} alt="arrow-left" /></div>
        <Swiper className={style.slider} {...swiperOptions}>
          {sliderList?.map((img, i) => (
            <SwiperSlide className={style.slide} key={i}>
              <img src={img} alt={`cloth-img ${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`${style.arrow} clothing-img-slider__arrow-right`}><img src={arrowRight} alt="arrow-right" /></div>
        <div className={style.cross} onClick={() => changeSliderActive(false)}><img src={cross} alt="cross" /></div>
      </div>
    </section>
  );
};