import {
  FETCHING_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from "../../constant";

// initial state for countries
const initialState = {
  countries: [],
  loading: false,
  err: "",
};

const reducer = (state = initialState, action) => {
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
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        err: payload.message,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
