import { getCountry } from "../../api/Api";
import { Dispatch } from "redux";
import {
  FETCHING_COUNTRY,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_ERROR,
} from "../../constant";
import {Country, Error} from '../../types'


export const fetchCountry = (country: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: FETCHING_COUNTRY,
      });
      const data = await getCountry(country);
      dispatch(fetchCountrySuccess(data));
    } catch (error: any) {
      dispatch(fetchCountryError(error));
    }
  };
};

export const fetchCountrySuccess = (data: Country[]) => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: data,
    loading: false,
  };
};

export const fetchCountryError = (error: Error) => {
  return {
    type: FETCH_COUNTRY_ERROR,
    payload: error,
  };
};

type FetchCountryAction = {
  type: typeof FETCHING_COUNTRY,
}
type FetchCountrySuccessAction = {
  type: typeof FETCH_COUNTRY_SUCCESS,
  loading: boolean,
}
type FetchCountryErrorAction = {
  type: typeof FETCH_COUNTRY_ERROR,
  loading: boolean,
}

export type Actions = FetchCountryAction | FetchCountrySuccessAction |FetchCountryErrorAction

