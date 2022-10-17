import {
  TURN_OFF_SPINNER,
  TURN_ON_SPINNER,
  UPDATE_FILTER_STATE,
} from "../actions/app.actions";

const initialState = {
  user: {},
  isSpinner: false,
  filterState: { categories: "Todos", sort: "A-Z" },
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case TURN_ON_SPINNER: {
      return {
        ...state,
        isSpinner: action.payload,
      };
    }
    case TURN_OFF_SPINNER: {
      return {
        ...state,
        isSpinner: action.payload,
      };
    }
    case UPDATE_FILTER_STATE: {
      return {
        ...state,
        filterState: {
          ...state.filterState,
          [action.payload.name]: action.payload.value,
        },

        
      };
    }
    default:
      return state;
  }
}
