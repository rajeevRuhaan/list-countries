import React, { Fragment, useState } from "react";
// imports components
import Header from "../components/Header";
import SearchCountry from "../components/SearchCountry";
import Index from ".././components/countries/Index";
import { Paper } from "@mui/material";

const CountriesPage = () => {
  const [inputText, setInputText] = useState("");
  return (
    <Fragment>
      <Paper sx={{ height: "100vh" }}>
        <Header />
        <SearchCountry setInputValue={setInputText} />
        <Index inputText={inputText} />
      </Paper>
    </Fragment>
  );
};

export default CountriesPage;
