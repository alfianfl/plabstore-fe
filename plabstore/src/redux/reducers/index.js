import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productsDetailReducer from "./detailProductsReducer";
import cartProductReducer from "./cartProductReducer";
import usersReducer from "./usersReducer";
import transaksiReducer from "./transaksiReducer";
import diskonReducer from "./diskonReducer";
import singleUserReducer from "./singleUserReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  detailProduct: productsDetailReducer,
  cartProduct: cartProductReducer,
  users: usersReducer,
  transaksi: transaksiReducer,
  diskon: diskonReducer,
  user: singleUserReducer
});

export default rootReducer;
