import  Box  from "@mui/material/Box";
// components
import Header from "../components/Header";
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
