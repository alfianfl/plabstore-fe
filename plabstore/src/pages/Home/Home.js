import React from "react";
import { CardSwiper } from "../../components/cards";
import { CardProductSwiper } from "../../components/cards";
import { GridContainer, GridItem } from "../../components/grid";
import { JustifyBetween, JustifyCenter } from "../../components/flex";
import { Button } from "../../components/buttons";
import { Banner } from "../../components/banners";
import { Carousel } from "../../components/carousel";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

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
          <div className="mt-0 mt-md-0 px-lg-2 px-3 mt-lg-5">
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
          <JustifyBetween>
            <span
              className="ml-3 ml-lg-3 mt-5"
              style={{
                fontSize: "25px",
                marginBottom: "10px",
                display: "inline-block",
              }}
            >
              <strong>“Pilihan" </strong>Pria
            </span>

            <p className=" mr-lg-3 mr-1 mt-auto">
              {" "}
              <a style={{ color: "black" }} href={"/listProduk/pria"}>
                Lihat Semua{" "}
              </a>
            </p>
          </JustifyBetween>
          <CardProductSwiper gender="pria" />
        </GridItem>
        <GridItem xs={12} sm={12}>
          <Banner />
        </GridItem>
        <GridItem xs={12} sm={12}>
          <JustifyBetween>
            <span
              className=" ml-3 ml-lg-3"
              style={{
                fontSize: "25px",
                marginBottom: "10px",
                display: "inline-block",
              }}
            >
              <strong>“Pilihan” </strong>Wanita
            </span>

            <p className=" mr-lg-3 mr-1 mt-auto">
              {" "}
              <a style={{ color: "black" }} href={"/listProduk/wanita"}>
                Lihat Semua{" "}
              </a>
            </p>
          </JustifyBetween>
          <CardProductSwiper gender="wanita" />
        </GridItem>
      </GridContainer>
      <FloatingWhatsApp
        position="right"
        zIndex={999}
        size="55px"
        phone="089524013023"
      />
    </>
  );
}

export default Home;
