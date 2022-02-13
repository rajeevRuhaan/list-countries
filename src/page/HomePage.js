import React, { useState } from "react";
import CountriesList from "../components/CountriesList";
import Header from "../components/Header";
import SearchCountry from "../components/SearchCountry";

const HomePage = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <Header />
      <SearchCountry setInputValue={setInputText} />
      <CountriesList inputText={inputText} />
    </div>
  );
};

export default HomePage;
