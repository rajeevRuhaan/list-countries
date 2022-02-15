import React from "react";
import { Link } from "react-router-dom";

//material ui components
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
//pagination
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

// material ui icon
import FavoriteIcon from "@mui/icons-material/Favorite";

// components importing
import Loading from "./Loading";
import TableHeader from "./TableHeader";
import useCountries from "../custom-hooks/useCountries";

const CountriesList = ({ inputText }) => {
  const [countries, err, loading] = useCountries();

  //pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
              <TableBody>
                {countries
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
                  .map((country, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
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
                      <TableCell align="center">
                        <FavoriteIcon />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={countries.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </>
      ) : null}
    </>
  );
};

export default CountriesList;
