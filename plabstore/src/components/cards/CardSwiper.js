import { useState } from "react";
import { ButtonSwipper } from "../buttons";
import { SwiperCoverflow, SwiperInfinite } from "../swiper";
import { SwiperSlide } from "swiper/react";

function CardSwiper() {
  const [cards] = useState([{}, {}, {}]);
  return (
    <>
      <SwiperCoverflow>
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="cards">
              <div className="cards-content">
                <h4 className="cards-title">Something awsome</h4>
                <p className="cards-body">
                  T-Shirt eCommerce help you build a website with custom
                  products and sale online.
                </p>
                <ButtonSwipper />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperCoverflow>
      {/* Ukuran mobile */}
      <SwiperInfinite>
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="cards">
              <div className="cards-content">
                <h4 className="cards-title">Something awsome</h4>
                <p className="cards-body">
                  T-Shirt eCommerce help you build a website with custom
                  products and sale online.
                </p>
                <ButtonSwipper />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperInfinite>
    </>
  );
}

export default CardSwiper;
