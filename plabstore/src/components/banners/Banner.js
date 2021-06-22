import React from "react";
import "../../assets/css/bannerHome.css";

function Banner() {
  return (
    <div>
      <section id="banner-home">
        <div className="banner py-5">
          <h1 className="title-banner">Let`s Buy Our Product</h1>
          <p>Do you wanna se Other Product?</p>

          <button className="btn btn-toko">
            {" "}
            <span>Show more</span>{" "}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Banner;
