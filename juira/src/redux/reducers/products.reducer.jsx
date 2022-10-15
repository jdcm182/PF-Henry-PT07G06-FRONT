import { ALL_PRODUCTS, PRODUCTS_TO_DISPLAY, PRODUCT_DETAILS } from "../actions/producs.actions";



const initialState = {
  allProducts: "",
  productDetails: "",
  productsToDisplay : "",
};

export function productsReducer(state = initialState, action){
  switch (action.type) {
    case ALL_PRODUCTS: {
      return {
        ...state,
        allProducts: action.payload,
      };
    }
    case PRODUCT_DETAILS: {
      return {
        ...state,
        productDetails: action.payload,
      };
    }
    case PRODUCTS_TO_DISPLAY: {
      return {
        ...state,
        productsToDisplay: action.payload,
      };
    }
    default:
      return state;
  }
}
