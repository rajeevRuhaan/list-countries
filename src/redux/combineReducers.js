import { combineReducers } from "redux";

//import reducers
import countriesReducer from "./countries/reducer";
import countryReducer from "./country/reducer";
import favoriteReducer from "./favorite/reducer";

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
