// General
import React, { FC } from "react";
import style from "./index.module.scss";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { swiperOptions } from "../lib/swiper";
// Img
import arrowLeft from "../img/arrow-left.svg";
import arrowRight from "../img/arrow-right.svg";
import cross from "../img/cross.svg";

interface ClothingImgSliderProps {
  sliderList: string[] | undefined;
  toggleSliderActive: (bool: boolean) => void;
  indexActiveSlideImg: number;
}

export const ClothingImgSlider: FC<ClothingImgSliderProps> = React.memo(
  ({ sliderList, toggleSliderActive, indexActiveSlideImg }) => {
    const newSliderList = sliderList && [...sliderList];
    const activeSlide = sliderList && sliderList[indexActiveSlideImg];

    newSliderList?.splice(indexActiveSlideImg, 1); // Удаляем активный элемент из исходной позиции
    newSliderList && activeSlide && newSliderList.unshift(activeSlide); // Переносим его в начало массива

    console.log(newSliderList);

    return (
      <section className={style.block}>
        <div className={style.body}>
          <div className={`${style.arrow} clothing-img-slider__arrow-left`}>
            <img src={arrowLeft} alt="arrow-left" />
          </div>
          <Swiper className={style.slider} {...swiperOptions}>
            {newSliderList?.map((img, i) => (
              <SwiperSlide className={style.slide} key={i}>
                <img src={img} alt={`cloth-img ${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`${style.arrow} clothing-img-slider__arrow-right`}>
            <img src={arrowRight} alt="arrow-right" />
          </div>
          <div
            className={style.cross}
            onClick={() => toggleSliderActive(false)}
          >
            <img src={cross} alt="cross" />
          </div>
        </div>
      </section>
    );
  }
);
