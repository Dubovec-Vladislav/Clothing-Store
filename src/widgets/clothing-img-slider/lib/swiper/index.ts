import { Navigation, A11y } from "swiper/modules";

const breakpoints = {};

export const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: ".clothing-img-slider__arrow-left",
    nextEl: ".clothing-img-slider__arrow-right",
  },
  breakpoints: { ...breakpoints },
  modules: [Navigation, A11y],
};
