import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../constant";

const initialState = {
  favorite: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      console.log(state);
      return { ...state, favorite: [...state.favorite, payload] };

    case REMOVE_FAVORITE:
      const newfavorite = state.favorite.filter(
        (country) => country !== payload
      );
      return { ...state, favorite: newfavorite };

    default:
      return state;
  }
};

export default reducer;
