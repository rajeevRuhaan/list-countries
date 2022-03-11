import Paper  from "@mui/material/Paper";
// components
import Header from "../components/Header";
import Favorite from "../components/favoriteCountriesList/Favorite";

const FavoriteCountriesPage = () => {
  return (
    <Paper sx={{ height: "100vh" }}>
      <Header />
      <Favorite />
    </Paper>
  );
};

export default FavoriteCountriesPage;
