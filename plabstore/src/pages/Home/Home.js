import React from "react";
import { CardSwipper } from "../../components/cards";
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
            <CardSwipper />
          </JustifyCenter>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <h1>Make it easy!</h1>
          <div>
            <p>
              T-Shirt eCommerce help you build a website with custom products
              and sale online. Business solution for the printing and
              embroidery.
            </p>
          </div>
          <a href="#" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              {" "}
              Learn More
            </Button>
          </a>
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Home;
