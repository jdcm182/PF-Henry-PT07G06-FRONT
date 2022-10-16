export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const UPDATE_FILTER_STATE = "UPDATE_FILTER_STATE";

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