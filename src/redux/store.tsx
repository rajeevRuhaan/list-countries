import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {Countries, Country} from '../types'
import rootReducer from "./combineReducers";

export type InitialState = {
  sort: {sortBy: string},
  favorite:{ favorite: string[]},
  countries: {countries: Countries[], loading: boolean, error: string},
  country: {country: Country[], loading: boolean, error: string}
}
const initialState : InitialState = {
  sort: { sortBy: "" },
  favorite: { favorite: [] },
  countries: { countries: [], loading: false, error: "" },
  country: { country: [], loading: false, error: "" },
};
const storeFactory = () => {
  const favoriteLists = localStorage.getItem("favoriteCountries");

  if (favoriteLists) {
    initialState.favorite.favorite = JSON.parse(favoriteLists);
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.subscribe(() => {
    const currentState = store.getState();

    const favoriteList = currentState.favorite.favorite;
    localStorage.setItem("favoriteCountries", JSON.stringify(favoriteList));
  });

  return store;
};

export default storeFactory();
