import React from "react";
import { Link } from "react-router-dom";
//mui

// components
import Header from "../components/Header";
import Country from "../components/country/Country";

//custome hook and component import

const CountryPage = () => {
  return (
    <div className="country-page">
      <Header />
      <Link to={"/"}>Back To Home</Link>
      <Country />
    </div>
  );
};

export default CountryPage;
