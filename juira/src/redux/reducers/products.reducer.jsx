import {
  ADD_CART,
  ALL_PRODUCTS,
  GET_CATEGORIES,
  GET_CATEGORIES_NAMES,
  PRODUCTS_TO_DISPLAY,
  PRODUCT_DETAILS,
  REMOVE_CART,
  UPDATE_CART,
  REMOVE_ID,
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
      const aux2 = state.cart.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("itemsInCart", JSON.stringify(aux2));
      return {
        ...state,
        cart: aux2,
      };

    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_CART:
      const aux = state.cart.find((product) => product.id === action.payload.id)
        ? state.cart
        : state.cart.concat(action.payload);
      localStorage.setItem("itemsInCart", JSON.stringify(aux));
      return {
        ...state,
        cart: aux,
      };
    case GET_CATEGORIES_NAMES:
      return {
        ...state,
        allCategories: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
      
    case REMOVE_ID:
      return {
        ...state,
        productDetails: '',
      };

    default:
      return state;
  }
}
