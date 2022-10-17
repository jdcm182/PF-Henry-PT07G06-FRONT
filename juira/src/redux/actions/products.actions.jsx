import axios from "axios";
import { getAllProductsApi, API_URL_BACKEND } from "../../api/apiRoute";



export const PRODUCTS_TO_DISPLAY = "PRODUCTS_TO_DISPLAY";
export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const PRODUCT_DETAILS = "PRODUCT_DETAILS";
export const REMOVE_CART = "REMOVE_CART";
export const ADD_CART = "ADD_CART"


export const updateDisplayed = (query) => async (dispatch) => {
  const url = `${API_URL_BACKEND}products/?name=${query}`;
  try {
    let res = await axios(url);
    console.log(res.data)
    return dispatch({
      type: PRODUCTS_TO_DISPLAY,
      payload: res.data,
    });
  } catch (error) {
    console.log("error api", error);
  }
};

export const getAllProducts = () => async (dispatch) => {
  const url = `${API_URL_BACKEND}${getAllProductsApi}`;
  try {
    let data = await axios(url);
    return dispatch({
      type: ALL_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log("error api", error);
  }
};


export const getProductDetails = (id) => async (dispatch) => {
  const url = `${API_URL_BACKEND}${getAllProductsApi}${id}`;
  try {
    let data = await axios(url);
    return dispatch({
      type: ALL_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log("error api", error);
  }
};


export const addToCart = (payload) => (dispatch) => {
  return dispatch({
    type: ADD_CART,
    payload: payload,
  });
};

export const removeToCart = (payload) => (dispatch) => {
  return dispatch({
    type: REMOVE_CART,
    payload: payload,
  });
};
