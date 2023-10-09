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

interface ClothingImgSliderProps {
  sliderList: string[] | undefined,
  toggleSliderActive: (bool: boolean) => void,
  activeSlideImg: string,
}

export const ClothingImgSlider: FC<ClothingImgSliderProps> = ({ sliderList, toggleSliderActive, activeSlideImg }) => {
  const newSliderList = sliderList?.filter(slideImg => slideImg !== activeSlideImg); // Remove the activeSlideImg from the list
  newSliderList?.unshift(activeSlideImg); // And add it to the beginning

  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={`${style.arrow} clothing-img-slider__arrow-left`}><img src={arrowLeft} alt="arrow-left" /></div>
        <Swiper className={style.slider} {...swiperOptions}>
          {newSliderList?.map((img, i) => (
            <SwiperSlide className={style.slide} key={i}>
              <img src={img} alt={`cloth-img ${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`${style.arrow} clothing-img-slider__arrow-right`}><img src={arrowRight} alt="arrow-right" /></div>
        <div className={style.cross} onClick={() => toggleSliderActive(false)}><img src={cross} alt="cross" /></div>
      </div>
    </section>
  );
};