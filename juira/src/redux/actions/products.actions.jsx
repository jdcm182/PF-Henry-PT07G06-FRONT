import axios from "axios";
import {
  getAllProductsApi,
  API_URL_BACKEND,
  getCategoriesNameApi,
  getCategoriesIdApi,
} from "../../api/apiRoute";

export const PRODUCTS_TO_DISPLAY = "PRODUCTS_TO_DISPLAY";
export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const PRODUCT_DETAILS = "PRODUCT_DETAILS";
export const REMOVE_CART = "REMOVE_CART";
export const ADD_CART = "ADD_CART";
export const GET_CATEGORIES_NAMES = "GET_CATEGORIES_NAMES";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const UPDATE_CART = "UPDATE_CART"
export const REMOVE_ID="REMOVE_ID"

export const updateDisplayedByQuery = (query) => async (dispatch) => {
  const url = `${API_URL_BACKEND}products/?name=${query}`;
  try {
    let res = await axios(url);
    return dispatch({
      type: PRODUCTS_TO_DISPLAY,
      payload: res.data,
    });
  } catch (error) {
    console.log("error api", error);
  }
};

export const updateDisplayed = () => async (dispatch) => {
  const url = `${API_URL_BACKEND}${getAllProductsApi}`;
  try {
    await axios(url);
    let { data } = await axios(url);

    return dispatch({
      type: PRODUCTS_TO_DISPLAY,
      payload: data,
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
      payload: data.data, //data,
    });
  } catch (error) {
    console.log("error api", error);
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  const url = `${API_URL_BACKEND}${getAllProductsApi}${id}`;
  try {
    let { data } = await axios(url);
    return dispatch({
      type: PRODUCT_DETAILS,
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

export const updateCart = (payload)=> (dispatch)=>{
  return dispatch({
    type: UPDATE_CART,
    payload: payload
  })
}

export const getCategoriesNames = () => async (dispatch) => {
  const url = `${API_URL_BACKEND}${getCategoriesNameApi}`;
  try {
    let { data } = await axios(url);

    return dispatch({
      type: GET_CATEGORIES_NAMES,
      payload: data,
    });
  } catch (error) {
    console.log("error api", error);
  }
};

export const getCategories = () => async (dispatch) => {
  const url = `${API_URL_BACKEND}${getCategoriesIdApi}`;
  try {
    let { data } = await axios(url);
    return dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    console.log("error api", error);
  }
};

export const publishProd = (data) => async () => {
  const url = `${API_URL_BACKEND}${getAllProductsApi}`;
  try {
    let json = await axios.post(url, data);
    return json;
  } catch (error) {
    console.log("error api", error);
  }
};

export const removeDetail = () => (dispatch) => {
  return dispatch({
    type: REMOVE_ID,
  });
};
