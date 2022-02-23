import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import mui components
import MuiTableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

// material ui icon
import FavoriteIcon from "@mui/icons-material/Favorite";
// import components
import { addFavorite, removeFavorite } from "../../redux/action";

const TableBody = ({ countries, page, rowsPerPage, inputText }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);
  console.log(favorite);

  const handleFavoriteCountry = (favoriteCountry) => {
    if (favorite.includes(favoriteCountry)) {
      dispatch(removeFavorite(favoriteCountry));
      alert(
        `Successfully removed ${favoriteCountry} from favorite countries list`
      );
    } else {
      dispatch(addFavorite(favoriteCountry));
      alert(`Successfully added ${favoriteCountry} to favorite countries`);
    }
  };

  return (
    <MuiTableBody>
      {countries
        ? countries
            .filter((listCountries) => {
              if (inputText === "") {
                return listCountries;
              } else {
                return listCountries.name.common
                  .toLowerCase()
                  .includes(inputText.toLowerCase());
              }
            })
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((country) => {
              return (
                <TableRow key={country.name.common}>
                  <TableCell align="center" component="th" scope="row">
                    <img src={country.flags.png} alt="country flag" />
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      className="country-name-link"
                      to={`/country/${country.name.common}`}
                    >
                      {country.name.common}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{country.population}</TableCell>
                  <TableCell align="center">{country.region}</TableCell>
                  <TableCell align="center">
                    {country.languages &&
                    Object.keys(country.languages).length > 0
                      ? Object.values(country.languages).map((lang) => {
                          return <li key={lang}>{lang}</li>;
                        })
                      : "N/A"}
                  </TableCell>
                  <TableCell align="center">
                    <button
                      onClick={() => handleFavoriteCountry(country.name.common)}
                    >
                      <FavoriteIcon />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })
        : "N/A"}
    </MuiTableBody>
  );
};

export default TableBody;
