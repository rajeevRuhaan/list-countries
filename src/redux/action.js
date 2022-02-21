export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

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
