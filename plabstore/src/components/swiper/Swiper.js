import React from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import "../../assets/css/cardSwipper.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

export function SwiperCoverflow(props) {
  const { children, ...rest } = props;
  return (
    <>
      <Swiper
        {...rest}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper swiper-1"
      >
        {children}
      </Swiper>
    </>
  );
}
export function SwiperInfinite(props) {
  const { children, ...rest } = props;
  return (
    <Swiper
      loop={true}
      {...rest}
      slidesPerView={1}
      spaceBetween={-5}
      breakpoints={{
        414: {
          slidesPerView: 1,
          spaceBetween: -30,
        },
        540: {
          spaceBetween: -150,
        },
        768: {
          spaceBetween: -10,
        },
      }}
      className="mySwiper swiper-2"
    >
      {children}
    </Swiper>
  );
}
export function SwiperBasic(props) {
  const { children, ...rest } = props;
  return (
    <Swiper
      {...rest}
      loop={true}
      spaceBetween={-30}
      slidesPerView={1}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: -55,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: -70,
        },
        414: {
          slidesPerView: 1,
          spaceBetween: -110,
        },
        540: {
          slidesPerView: 1,
          spaceBetween: -180,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: -50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: -50,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 100,
        },
      }}
      className="mySwiper "
    >
      {children}
    </Swiper>
  );
}
