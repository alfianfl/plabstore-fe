import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardSwipper } from "../cards";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import "../../assets/css/cardSwipper.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

function SwiperCard() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper swiper-1"
      >
        <SwiperSlide>
          <CardSwipper />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwipper />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwipper />
        </SwiperSlide>
      </Swiper>

      {/* Mobile Swiper */}
      <Swiper slidesPerView={1} spaceBetween={0} className="mySwiper swiper-2">
        <SwiperSlide>
          {" "}
          <CardSwipper />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CardSwipper />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CardSwipper />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperCard;
