import { useState } from "react";

function UseQtyHandler(initialState) {
  const [cart, setCart] = useState(initialState);
  const addProduct = (id) => {
    const exist = cart.find((product) => product.id === id);
    if (exist) {
      setCart(
        cart.map((product) =>
          product.id === id ? { ...exist, qty: exist.qty + 1 } : product
        )
      );
    }
  };
  const removeProduct = (id) => {
    const exist = cart.find((product) => product.id === id);
    if (exist) {
      setCart(
        cart.map((product) =>
          product.id === id ? { ...exist, qty: exist.qty - 1 } : product
        )
      );
    }
  };
  return { cart, removeProduct, addProduct };
}

export default UseQtyHandler;
