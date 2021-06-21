import React from "react";
import { ButtonSwipper } from "../buttons";

function CardSwiper() {
  return (
    <div className="cards">
      <div className="cards-content">
        <h4 className="cards-title">Something awsome</h4>
        <p className="cards-body">
          T-Shirt eCommerce help you build a website with custom products and
          sale online.
        </p>
        <ButtonSwipper />
      </div>
    </div>
  );
}

export default CardSwiper;
