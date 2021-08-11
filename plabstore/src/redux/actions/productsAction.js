import axios from "axios";
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const Products = response.data;
        dispatch(fetchProductsSuccess(Products));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchProductsFailure(errMsg));
      });
  };
};
export const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

export const fetchProductsSuccess = (Products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: Products,
  };
};
export const fetchProductsFailure = (errMsg) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: errMsg,
  };
};
