import toast from "react-hot-toast";
import axios from "axios";
import { API_URL_BACKEND, postUser } from "../../api/apiRoute";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const UPDATE_FILTER_STATE = "UPDATE_FILTER_STATE";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const REFRESH_DATA = "REFRESH_DATA";

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

export const loginAction = (usuario) => {
  return async (dispatch) => {
    axios.defaults.headers.common["Authorization"] = usuario.token
    const { role, user } = await postLogin(usuario);
    if (role) {
      localStorage.setItem("token", usuario.token);
      localStorage.setItem("role", role);
      dispatch(signInSuccess({ token: usuario.token, role: role }));
      toast.success("Bienvenido a la plataforma " + user.emailAddress);
      if (role === "usuario") {
        const cart = JSON.parse(localStorage.getItem("itemsInCart"));
        localStorage.removeItem("itemsInCart")
        
        const serverPut = cart.map((element) =>
          axios.put(
            `${API_URL_BACKEND}cart/addProductToCart/byToken/${element.id}`
          )
        );
        await Promise.all(serverPut).then((response) => {
          console.log("response", response);
          return response;
        });

      }
    }
  };
};

export const logoOutAction = () => {
  return (dispatch) => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    dispatch(logoOutSuccess());
    toast.error("Eres un guest");
  };
};

export function refreshData() {

  return {
    type: REFRESH_DATA,
  };
}

export const postLogin = async (data) => {
  const url = `${API_URL_BACKEND}${postUser}`;
  console.log(url);
  try {
    let json = await axios.post(url, data);
    console.log(json.data);
    return json.data;
  } catch (error) {
    console.log("error api", error);
  }
};
