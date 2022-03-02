import { ADD_FAVORITE, REMOVE_FAVORITE } from "../../constant";
import {Actions} from './action'
type InitialState = { favorite: string[]}


const initialState: InitialState = {
  favorite: [],
};

const reducer = (state = initialState, action: Actions) => {
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
