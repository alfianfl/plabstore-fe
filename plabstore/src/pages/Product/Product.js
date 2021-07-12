import React from "react";
import { CardProduct } from "../../components/cards";

function Product() {
  return (
    <div className="product my-5">
      <div className="title text-center">
        <h1>List Produk</h1>
      </div>
      <CardProduct />
    </div>
  );
}

export default Product;
