import { ADD_FAVORITE, REMOVE_FAVORITE } from "../action";

const initialState = {
  favorite: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      const countryName = payload;
      const isInList = state.favorite.some((name) => name === countryName);

      if (isInList) {
        return state;
      }

      return { ...state, favorite: [...state.favorite, countryName] };

    case REMOVE_FAVORITE:
      const removeCountryName = payload;
      const newfavorite = state.favorite.filter(
        (country) => country !== removeCountryName
      );

      localStorage.setItem("favoriteCountries", JSON.stringify(newfavorite));
      return {
        ...state,
        favorite: newfavorite,
      };

    default:
      return state;
  }
};

export default reducer;
