const initialState = {
  loading: false,
  product: {},
  error: "",
};
const productsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DETAILPRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DETAILPRODUCTS_SUCCESS":
      return {
        loading: false,
        product: action.payload,
        error: "",
      };
    case "FETCH_DETAILPRODUCTS_FAILURE":
      return {
        loading: false,
        product: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default productsDetailReducer;
