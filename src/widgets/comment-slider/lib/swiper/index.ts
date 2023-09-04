import { Navigation, A11y } from 'swiper/modules'

const breakpoints = {
  1300: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1100: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  934: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 1.5,
    spaceBetween: 10,
  },
  596: {
    slidesPerView: 1.25,
    spaceBetween: 5,
  },
  279: {
    slidesPerView: 1,
    spaceBetween: 5,
  },
};

export const swiperOptions = {
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