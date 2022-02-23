import {
  FETCHING_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAIL,
} from "../action";

const initialState = {
  countries: [],
  loading: false,
  err: null,
};
const reducerfetchAPI = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHING_COUNTRIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
        loading: false,
      };
    case FETCH_COUNTRIES_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducerfetchAPI;
