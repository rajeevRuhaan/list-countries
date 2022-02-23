import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./combineReducers";

const initialState = {
  favorite: { favorite: [] },
  countries: { countries: [], loading: false, err: null },
  country: { country: [], loading: false, error: null },
};
const storeFactory = () => {
  const favoriteLists = localStorage.getItem("favoriteCountries");
  //console.log local store
  console.log("favorite list: ", favoriteLists);

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
