export const addFavorite = (countryName) => {
  console.log("country name send to action", countryName);
  return {
    type: "ADD_FAVORITE",
    payload: {
      countryName: countryName,
    },
  };
};
export const removeFavorite = () => {
  return { type: "REMOVE_FAVORITE" };
};
