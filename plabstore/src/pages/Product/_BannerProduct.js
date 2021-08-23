import React from "react";
import banner from "../../assets/img/banner.jpg";
import "../../assets/css/cardBannerProduct.css";
import { Button } from "../../components/buttons";

function _BannerProduct() {
  return (
    <div className="banner-product  mb-5">
      {/* <img
        src={banner}
        className="img-fluid d-lg-none d-flex"
        width="100%"
        alt="banner"
      /> */}
      <div
        className="thumb-banner d-lg-flex d-none"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover"
        }}
      >
        <div className="container-fluid">
          <div className="row ">
            <div className="col-3">
              <div
                className="card-banner  bg-danger"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
                }}
              >
                <div className="content">
                  <h3>let's seem our product</h3>
                  <a href="#product-list">show more </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="mt-0 mt-md-0 px-lg-2 px-3 mt-lg-5">
                <h1>Make it easy!</h1>
                <p className="mt-0 mt-md-0 mx-lg-2 w-100 mt-lg-3">
                  Plabstore has taken the clothing world by storm with
                  hyper-minimalist essentials for men and women.
                </p>
              </div>
              <div
                className="mt-0 mt-md-0 mx-lg-2 mx-3 w-50 mt-lg-5"
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" size="medium" color="secondary">
                  {" "}
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default _BannerProduct;
