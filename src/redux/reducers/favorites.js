import { ADD_FAVORITE, REMOVE_FAVORITE } from "../action";

const initialState = {
  favorite: localStorage.getItem("favoriteCountries")
    ? JSON.parse(localStorage.getItem("favoriteCountries"))
    : [],
};

const favorites = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      console.log(state);
      return [...state, payload];

    case REMOVE_FAVORITE:
      const newfavorite = state.filter((country) => country !== payload);
      return newfavorite;

    default:
      return state;
  }
};

export default favorites;
