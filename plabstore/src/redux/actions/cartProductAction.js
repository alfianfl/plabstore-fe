export const AddCartProduct = (cartList) => {
  return {
    type: "ADD_CART_PRODUCT",
    payload: cartList,
  };
};
export const DeleteCartProduct = (id) => {
  return {
    type: "DELETE_CART_PRODUCT",
    id: id,
  };
};
export const AddProduct = (id) => {
  return {
    type: "ADD_PRODUCT",
    payload: id,
  };
};
export const RemoveProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};
