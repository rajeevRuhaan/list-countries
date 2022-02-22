import { FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAIL } from "../action";

const initialState = {
  countries: [],
  error: null,
};
const reducerfetchAPI = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
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
