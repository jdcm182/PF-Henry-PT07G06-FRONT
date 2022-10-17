import { combineReducers } from "redux";
import { appReducer } from "./app.reducer";
import { productsReducer } from "./products.reducer";

export const rootReducer = combineReducers({

  app: appReducer,
  productsReducer: productsReducer,
});
