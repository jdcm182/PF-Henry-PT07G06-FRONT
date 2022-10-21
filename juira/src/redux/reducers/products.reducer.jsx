import {
  ADD_CART,
  ALL_PRODUCTS,
  GET_CATEGORIES,
  GET_CATEGORIES_NAMES,
  PRODUCTS_TO_DISPLAY,
  PRODUCT_DETAILS,
  REMOVE_CART,
} from "../actions/products.actions";

const initialState = {
  allProducts: "",
  productDetails: "",
  productsToDisplay: "",
  cart: [],
  allCategories: [],
  categories: [],
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS: {
      return {
        ...state,
        allProducts: action.payload,
       /*  productsToDisplay: action.payload, */
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
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case ADD_CART:
      return {
        ...state,
        cart: state.cart.push([action.payload]),
      };
    case GET_CATEGORIES_NAMES:
      return {
        ...state,
        allCategories: action.payload,
      };
    case GET_CATEGORIES:
      return{
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
  console.log(state)
}
