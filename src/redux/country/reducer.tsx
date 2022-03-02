import {
  FETCHING_COUNTRY,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_ERROR,
} from "../../constant";

import {Country} from '../../types'

type InitialState = {
  country: Country[],
  loading: boolean,
  error: string,
}

const initialState: InitialState = {
  country: [],
  loading: false,
  error: "",
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHING_COUNTRY:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        country: payload,
        loading: false,
      };
    case FETCH_COUNTRY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
