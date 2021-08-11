import axios from "axios";
export const fetchDetailProducts = (id) => {
  return (dispatch) => {
    dispatch(fetchDetailProductsRequest());
    axios
      .get(`http://localhost:3004/products/${id}`)
      .then((response) => {
        const Products = response.data;
        dispatch(fetchDetailProductsSuccess(Products));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchDetailProductsFailure(errMsg));
      });
  };
};
export const fetchDetailProductsRequest = () => {
  return {
    type: "FETCH_DETAILPRODUCTS_REQUEST",
  };
};

export const fetchDetailProductsSuccess = (Products) => {
  return {
    type: "FETCH_DETAILPRODUCTS_SUCCESS",
    payload: Products,
  };
};
export const fetchDetailProductsFailure = (errMsg) => {
  return {
    type: "FETCH_DETAILPRODUCTS_FAILURE",
    payload: errMsg,
  };
};
