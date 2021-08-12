import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import productsDetailReducer from "./detailProductsReducer";
import cartProductReducer from "./cartProductReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  detailProduct: productsDetailReducer,
  cartProduct: cartProductReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
