const reducer = (state = [], action) => {
  // action = {type.'ADD_FAVORITE}
  // action = {type.'REMOVE_FAVORITE}

  const { type, payload } = action;
  let updateCountry = [{ ...state }];

  switch (type) {
    case "ADD_FAVORITE":
      let isCountry = false;
      for (let country of updateCountry) {
        if (country.countryName === payload.countryName) isCountry = true;
      }
      if (isCountry) {
        let newUpdateCountry = updateCountry.filter((e) => {
          return e.countryName !== payload.countryName;
        });
        return newUpdateCountry;
      } else {
        updateCountry = {
          ...state,
          countryName: payload.countryName,
        };
      }

      return updateCountry;

    case "REMOVE_FAVORITE":
      return {};

    default:
      return state;
  }
};

export default reducer;
