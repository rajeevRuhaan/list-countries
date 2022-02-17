import { Routes, Route } from "react-router-dom";
// css
import "./App.css";

// components
import CountryPage from "./page/CountryPage";
import CountriesPage from "./page/CountriesPage";
import FavoriteCountriesPage from "./page/FavoriteCountriesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountriesPage />} />
      <Route path="/country/:country" element={<CountryPage />} />
      <Route path="/favorites" element={<FavoriteCountriesPage />} />
    </Routes>
  );
}

export default App;
