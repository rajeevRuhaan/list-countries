import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action";

const initialState = {
  favorite: localStorage.getItem("favoriteCountries")
    ? JSON.parse(localStorage.getItem("favoriteCountries"))
    : [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      const storageFavorite = [...state.favorite, payload];

      localStorage.setItem(
        "favoriteCountries",
        JSON.stringify(storageFavorite)
      );
      return { ...state, favorite: [...state.favorite, payload] };

    case REMOVE_FAVORITE:
      const newfavorite = state.favorite.filter(
        (country) => country !== payload
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
