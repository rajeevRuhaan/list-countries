import React, { useState } from "react";
// imports components
import Header from "../components/Header";
import SearchCountry from "../components/SearchCountry";
import Index from ".././components/countries/Index";
import Sort from "../components/Sort";
import Paper from "@mui/material/Paper";

const CountriesPage = () => {
  const [inputText, setInputText] = useState <string>("");
  return (
    <Paper sx={{ height: "100vh" }}>
      <Header />
      <SearchCountry setInputValue={setInputText} />
      <Sort />
      <Index inputText={inputText} />
    </Paper>
  );
};

export default CountriesPage;
