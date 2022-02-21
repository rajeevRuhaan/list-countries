import React from "react";
// mui component
import { Paper } from "@mui/material";
// components
import Header from "../components/Header";
import FavoriteCountries from "../components/favoriteCountriesList/FavoriteCountries";

const FavoriteCountriesPage = () => {
  return (
    <Paper sx={{ height: "100vh" }}>
      <Header />
      <FavoriteCountries />
    </Paper>
  );
};

export default FavoriteCountriesPage;
