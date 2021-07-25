import { useState } from "react";

function UseQtyHandler(initialState) {
  const [value, setValue] = useState(initialState);
  const addProduct = (id) => {
    const exist = value.find((product) => product.id === id);
    if (exist) {
      setValue(
        value.map((product) =>
          product.id === id ? { ...exist, qty: exist.qty + 1 } : product
        )
      );
    }
  };
  const removeProduct = (id) => {
    const exist = value.find((product) => product.id === id);
    if (exist) {
      setValue(
        value.map((product) =>
          product.id === id ? { ...exist, qty: exist.qty - 1 } : product
        )
      );
    }
  };
  return { value, removeProduct, addProduct };
}

export default UseQtyHandler;
