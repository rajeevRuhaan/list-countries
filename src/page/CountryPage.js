import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import Country from "../components/Country";

//custome hook and component import

const CountryPage = () => {
  return (
    <div className="country-page">
      <Header />

      <div>
        <Button variant="text" color="secondary" size="large" sx={{ m: 1 }}>
          {" "}
          <Link to={"/"}>Back Button</Link>
        </Button>
        <Country />
      </div>
    </div>
  );
};

export default CountryPage;
