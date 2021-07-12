import React from "react";
import { CardSwiper } from "../../components/cards";
import { CardProductSwiper } from "../../components/cards";
import { GridContainer, GridItem } from "../../components/grid";
import { JustifyCenter } from "../../components/flex";
import { Button } from "../../components/buttons";
import { Banner } from "../../components/banners";
import { Carousel } from "../../components/carousel";

function Home() {
  return (
    <>
      <Carousel />
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <JustifyCenter>
            <CardSwiper />
          </JustifyCenter>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <div className="mt-0 mt-md-0 px-lg-2 px-3 mt-lg-3">
            <h1>Make it easy!</h1>
            <p className="mt-0 mt-md-0 mx-lg-2 w-100 mt-lg-3">
              T-Shirt eCommerce help you build a website with custom products
              and sale online. Business solution for the printing and
              embroidery. T-Shirt eCommerce help you build a website with custom
              products and sale online.
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
        </GridItem>
        <GridItem xs={12} sm={12}>
          <span
            className="ml-3 ml-lg-3"
            style={{
              fontSize: "25px",
              marginBottom: "10px",
              display: "inline-block",
            }}
          >
            <strong>“Pakaian Pria” </strong>pilihan
          </span>
          <CardProductSwiper />
        </GridItem>
        <GridItem xs={12} sm={12}>
          <Banner />
        </GridItem>
        <GridItem xs={12} sm={12}>
          <span
            className=" ml-3 ml-lg-3 "
            style={{
              fontSize: "25px",
              marginBottom: "10px",
              display: "inline-block",
            }}
          >
            <strong>“Pakaian Wanita” </strong>pilihan
          </span>
          <CardProductSwiper />
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Home;
