import { createStore } from "redux";
import rootReducer from "../reducers";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cartProduct"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk)
);
export let persistor = persistStore(store);
