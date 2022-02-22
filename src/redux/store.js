import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initialState = {
  favorite: [],
  countries: [],
  error: null,
};
const storeFactory = () => {
  const middlewares = [thunk];
  const favoriteLists = localStorage.getItem("favoriteCountries");

  if (favoriteLists) {
    initialState.favorite = JSON.parse(favoriteLists);
  }
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.subscribe(() => {
    const currentState = store.getState();
    const favoriteList = currentState.favorite;
    localStorage.setItem("favoriteCountrires", JSON.stringify(favoriteList));
  });
  return store;
};

export default storeFactory();
