import {
  SORT_NAME_ASC,
  SORT_NAME_DES,
  SORT_POPULATION_ASC,
  SORT_POPULATION_DES,
  SORT_REGION_ASC,
  SORT_REGION_DES,
  NO_SORT,
} from "../../constant";
type InitialState = {sortBy: string}

const initialState: InitialState = {
  sortBy: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NO_SORT:
      return { ...state, sortBy: payload };
    case SORT_NAME_ASC:
      return { ...state, sortBy: payload };
    case SORT_NAME_DES:
      return { ...state, sortBy: payload };
    case SORT_POPULATION_ASC:
      return { ...state, sortBy: payload };
    case SORT_POPULATION_DES:
      return { ...state, sortBy: payload };
    case SORT_REGION_ASC:
      return { ...state, sortBy: payload };
    case SORT_REGION_DES:
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};

export default reducer;
