import React, { createContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

export const ProductContext = createContext();
const initialValue = [
  {
    id: 1,
    nama: "Kaos polo lev`is",
    deskripsi: "kaos dengan kualitas terbaik",
    harga: 250000,
    qty: 5,
  },
  {
    id: 2,
    nama: "Kemeja denim lev`is",
    deskripsi: "kemeja denim kualitas terbaik",
    harga: 350000,
    qty: 5,
  },
];

function ProductContextProvider(props) {
  const [products, dispatch] = useReducer(productReducer, initialValue);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
