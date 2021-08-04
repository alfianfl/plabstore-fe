import React from "react";
import { CardProduct } from "../../components/cards";
import { GridContainer, GridItem } from "../../components/grid";
import SidebarFilter from "./_SidebarFilter";
import BannerProduct from "./_BannerProduct";
function Product() {
  return (
    <div className="product-list">
      <BannerProduct />
      <div className="container-fluid px-lg-4 px-0">
        <GridContainer>
          <GridItem lg={3} md={3} sm={3} xs={12}>
            <SidebarFilter />
          </GridItem>
          <GridItem lg={9} md={9} sm={9} xs={12}>
            <div className="product mb-5 mt-lg-0 mt-5">
              <CardProduct />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default Product;
