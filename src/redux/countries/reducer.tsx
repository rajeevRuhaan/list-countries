import {
  FETCHING_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from "../../constant";

import {Countries} from '../../types'

type InitialState = {
  countries:Countries[],
  loading: boolean,
  err: string
}
// initial state for countries
const initialState: InitialState = {
  countries: [],
  loading: false,
  err: "",
};

const reducer = (state = initialState, action): InitialState => {
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
