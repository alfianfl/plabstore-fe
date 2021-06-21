import React from "react";
import { Swiper } from "../../components/swiper";
import { GridContainer, GridItem } from "../../components/grid";
import { JustifyCenter } from "../../components/flex";
import { Button } from "../../components/buttons";
import { Carousel } from "../../components/carousel";

function Home() {
  return (
    <>
      <Carousel />
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <JustifyCenter>
            <Swiper />
          </JustifyCenter>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <h1>Make it easy!</h1>
          <div className="mt-0 mt-md-0  mt-lg-3">
            <p>
              T-Shirt eCommerce help you build a website with custom products
              and sale online. Business solution for the printing and
              embroidery. T-Shirt eCommerce help you build a website with custom
              products and sale online.
            </p>
          </div>
          <div
            className="mt-0 mt-md-0  mt-lg-3"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="secondary">
              {" "}
              Learn More
            </Button>
          </div>
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Home;
