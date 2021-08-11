import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productsDetailReducer from "./detailProductsReducer";
import cartProductReducer from "./cartProductReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  detailProduct: productsDetailReducer,
  cartProduct: cartProductReducer,
});

export default rootReducer;
