import { getCountriesList } from "../api/Api";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAIL = "FETCH_COUNTRIES_FAIL";
export const FETCHING_COUNTRIES = "FETCHING_COUNTRIES";

export const addFavorite = (countryName) => {
  console.log("country name send to action", countryName);
  return {
    type: ADD_FAVORITE,
    payload: countryName,
  };
};
export const removeFavorite = (countryName) => {
  return { type: REMOVE_FAVORITE, payload: countryName };
};

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
    type: FETCH_COUNTRIES_FAIL,
    payload: err,
  };
};
