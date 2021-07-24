import React from "react";
import { CardProduct } from "../../components/cards";
import { Carousel } from "../../components/carousel";
function Product() {
  return (
    <>
      <Carousel />
      <div className="product my-5">
        <div className="title text-center">
          <h1>List Produk</h1>
        </div>
        <CardProduct />
      </div>
    </>
  );
}

export default Product;
