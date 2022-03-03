import { getCountriesList } from "../../api/Api";
import {Dispatch} from 'redux'
import {
  FETCHING_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from "../../constant";
import { Countries, Error } from "../../types";

export const fetchCountries = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCHING_COUNTRIES,
      });
      const data = await getCountriesList("/all");
      dispatch(fetchCountriesSuccess(data));
    } catch (error: any) {
      dispatch(fetchCountriesError(error));
    }
  };
};

export const fetchCountriesSuccess = (data: Countries[]) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const fetchCountriesError = (error: Error) => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: error,
    loading: false,
  };
};

type FetchCountriesAction = {
  type: typeof FETCHING_COUNTRIES,
}
type FetchCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS,
  loading: boolean,
}
type FetchCountriesErrorAction = {
  type: typeof FETCH_COUNTRIES_ERROR,
  loading: boolean,
}

export type Actions = FetchCountriesAction | FetchCountriesSuccessAction |FetchCountriesErrorAction