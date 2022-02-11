import React from "react";
import useCountries from "../custom-hooks/useCountries";
import { Link } from "react-router-dom";
//material ui components
import Table from "@mui/material/Table";

import TableContainer from "@mui/material/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";

// components importing
import Loading from "./Loading";
import TableHeader from "./TableHeader";

const CountriesList = () => {
  const [countries, err, loading] = useCountries();

  return (
    <>
      {err ? (
        <>
          <h1>{err.message}.</h1> <p>Api link is broken.</p>
        </>
      ) : loading ? (
        <Loading />
      ) : countries ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHeader />
              {countries.map((country, index) => (
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
                    {country.languages
                      ? Object.values(country.languages).map((lang) => {
                          return <li>{lang}</li>;
                        })
                      : null}
                  </TableCell>
                  <TableCell>
                    <FavoriteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </>
      ) : null}
    </>
  );
};

export default CountriesList;
