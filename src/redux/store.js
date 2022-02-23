import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initialState = {
  favorite: [],
  countries: [],
};
const storeFactory = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    const currentState = store.getState();
    const favoriteList = currentState.favorite;
    localStorage.setItem("favoriteCountries", JSON.stringify(favoriteList));
  });

  const favoriteLists = localStorage.getItem("favoriteCountries");

  if (favoriteLists) {
    initialState.favorite = JSON.parse(favoriteLists);
  }

  return store;
};

export default storeFactory();
