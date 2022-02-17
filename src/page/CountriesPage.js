import React, { Fragment, useState } from "react";
// imports components
import Header from "../components/Header";
import SearchCountry from "../components/SearchCountry";
import Index from ".././components/countries/Index";

const CountriesPage = () => {
  const [inputText, setInputText] = useState("");
  return (
    <Fragment>
      <Header />
      <SearchCountry setInputValue={setInputText} />
      <Index inputText={inputText} />
    </Fragment>
  );
};

export default CountriesPage;