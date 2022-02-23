import { getCountry } from "../../api/Api";
import {
  FETCHING_COUNTRY,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_ERROR,
} from "../../constant";

export const fetchCountry = (country) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCHING_COUNTRY,
      });
      const data = await getCountry(country);
      dispatch(fetchCountrySuccess(data));
    } catch (error) {
      dispatch(fetchCountryError(error));
    }
  };
};

export const fetchCountrySuccess = (data) => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const fetchCountryError = (err) => {
  return {
    type: FETCH_COUNTRY_ERROR,
    payload: err,
  };
};
