import { Link } from "react-router-dom";
import  Paper  from "@mui/material/Paper";
import  Box  from "@mui/material/Box";


// components
import Header from "../components/Header";
// import Country from "../components/country/Country";
import SingleCountry from "../components/country/SingleCountry";

const CountryPage = () => {
  return (
    <Box sx={{height: '100vh', width: '100%'}}>
        <Header />
        <SingleCountry />
    </Box>
  ) 
};

export default CountryPage;
