import React from "react";
import { ButtonSwipper } from "../buttons";
import "../../assets/css/cardSwipper.css";

function CardSwiper() {
  return (
    <div className="cards">
      <div className="cards-content">
        <h4 className="cards-title">Something awsome</h4>
        <p className="cards-body">
          loremloremloremloremlore mloremloremloremlorem loremloremloremlorem
        </p>
        <ButtonSwipper />
      </div>
    </div>
  );
}

export default CardSwiper;
