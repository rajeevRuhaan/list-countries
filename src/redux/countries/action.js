import { getCountriesList } from "../../api/Api";
import {
  FETCHING_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from "../../constant";

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCHING_COUNTRIES,
      });
      const data = await getCountriesList("/all");
      dispatch(fetchCountriesSuccess(data));
    } catch (error) {
      dispatch(fetchCountriesFail(error));
    }
  };
};

export const fetchCountriesSuccess = (data) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const fetchCountriesFail = (err) => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: err,
    loading: false,
  };
};
