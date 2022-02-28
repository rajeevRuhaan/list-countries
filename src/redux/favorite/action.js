import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../constant";

export const addFavorite = (countryName) => {
  return {
    type: ADD_FAVORITE,
    payload: countryName,
  };
};

export const removeFavorite = (countryName) => {
  return { type: REMOVE_FAVORITE, payload: countryName };
};
