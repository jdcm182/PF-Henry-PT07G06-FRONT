import toast from "react-hot-toast";
import axios from "axios";
import {
  API_URL_BACKEND,
  postUser
} from "../../api/apiRoute";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const UPDATE_FILTER_STATE = "UPDATE_FILTER_STATE";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const REFRESH_DATA = "REFRESH_DATA"

const signInSuccess = (token) => {
  return { type: SIGN_IN, payload: token };
};

const logoOutSuccess = () => {
  return { type: SIGN_OUT };
};

export const setSpinnerLoading = (flag) => {
  if (flag) {
    return { type: TURN_ON_SPINNER, payload: true };
  } else {
    return { type: TURN_OFF_SPINNER, payload: false };
  }
};

export const updateFilter = (payload) => (dispatch) => {
  return dispatch({
    type: UPDATE_FILTER_STATE,
    payload: payload,
  });
};

export const loginAction = (user) => {
  return async (dispatch) => {
     const { msg, role } = await postLogin(user); 
    // aca estaba bien, el user es lo q se le manda al back para q el devuelva el token, role o msg de error
    //Yo lo comente para poder hacer las pruebas
    if (role) {
      await localStorage.setItem("token",  user.token);
      await localStorage.setItem("role", role);
      dispatch(signInSuccess({ token: user.token, role: role }));
      /* try {
        const jsonValue = JSON.stringify(user)
  
        await localStorage.setItem('@storage_user', jsonValue)
      } catch (e) {
        console.log("Error Storage", e)
      } */

      
      toast.success(user+" Bienvenido a la plataforma");
    // 
  } 
  };
};

export const logoOutAction = () => {
  return async (dispatch) => {
    await localStorage.setItem("token", "");
    await localStorage.setItem("role", "");
    dispatch(logoOutSuccess());
    toast.error("Eres un guest");
  };
};

export function refreshData() {
  return {
    type: REFRESH_DATA,
  };
}

export const postLogin=(data) => async () => {
    const url = `${API_URL_BACKEND}${postUser}`;
    try {
      let json = await axios.post(url, data);
      return json;
    } catch (error) {
      console.log("error api", error);
    }
  };

  


