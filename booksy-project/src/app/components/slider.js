import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// init Swiper:

const heroSliderOptions = {
  modules: [Navigation],
  navigation: {
    nextEl: ".hero-btn-next",
    prevEl: ".hero-btn-prev",
  },
  spaceBetween: 20,
};

const heroSlider = new Swiper(".hero-slider", heroSliderOptions);
