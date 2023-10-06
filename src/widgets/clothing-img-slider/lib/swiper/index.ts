import { Navigation, A11y } from 'swiper/modules'

const breakpoints = {
  // 1300: {
  //   slidesPerView: 3,
  //   spaceBetween: 20,
  // },
};

export const swiperOptions = {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: '.clothing-img-slider__arrow-left',
    nextEl: '.clothing-img-slider__arrow-right',
  },
  breakpoints: { ...breakpoints },
  modules: [Navigation, A11y],
};