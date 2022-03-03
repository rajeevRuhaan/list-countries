import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorite/action";
import {InitialState} from '../../redux/store'
import { Countries } from "../../types";

// import mui components
import MuiTableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
// material ui icon
import FavoriteIcon from "@mui/icons-material/Favorite";

type TableBodyProps = {
  countries: Countries[],
  page: number,
  rowsPerPage: number,
  inputText: string
}

const TableBody = ({ countries, page, rowsPerPage, inputText }: TableBodyProps) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state: InitialState) => state.favorite.favorite);
  //sorting action
  const sortBy = useSelector((state: InitialState) => state.sort.sortBy);

  const sortCountries = useCallback(() => {
    if (sortBy === "populationDes") {
      return [...countries].sort((a, b) =>
        b.population < a.population ? -1 : b.population > a.population ? 1 : 0
      );
    } else if (sortBy === "populationAsc") {
      return [...countries].sort((a, b) =>
        b.population < a.population ? 1 : b.population > a.population ? -1 : 0
      );
    } else if (sortBy === "nameAsc") {
      return [...countries].sort((a, b) =>
        b.name.common < a.name.common
          ? 1
          : b.name.common > a.name.common
          ? -1
          : 0
      );
    } else if (sortBy === "nameDes") {
      return [...countries].sort((a, b) =>
        b.name.common < a.name.common
          ? -1
          : b.name.common > a.name.common
          ? 1
          : 0
      );
    } else if (sortBy === "regionDes") {
      return [...countries].sort((a, b) =>
        b.region < a.region ? -1 : b.region > a.region ? 1 : 0
      );
    } else if (sortBy === "regionAsc") {
      return [...countries].sort((a, b) =>
        b.region < a.region ? 1 : b.region > a.region ? -1 : 0
      );
    } else 
      return [...countries];
  }, [countries, sortBy]);

  const handleFavoriteCountry = (favoriteCountry: string) => {
    if (favorite.includes(favoriteCountry)) {
      dispatch(removeFavorite(favoriteCountry));
    } else {
      dispatch(addFavorite(favoriteCountry));
    }
  };

  return (
    <MuiTableBody>
      {sortCountries
        ? sortCountries()
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
                          return (
                            <li key={lang} style={{ listStyle: "none" }}>
                              {lang}
                            </li>
                          );
                        })
                      : "N/A"}
                  </TableCell>
                  <TableCell align="center">
                    <button
                      onClick={() => handleFavoriteCountry(country.name.common)}
                    >
                      <FavoriteIcon
                        style={{
                          color: favorite.includes(country.name.common)
                            ? "red"
                            : "black",
                        }}
                      />
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
