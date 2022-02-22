import { combineReducers } from "redux";

import favoriteReducer from "./reducer";
import fetchAPIReducer from "./fetchAPI";

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  countries: fetchAPIReducer,
});

export default rootReducer;
