import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  product: productsReducer,
});

export default rootReducer;
