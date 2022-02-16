import { Routes, Route } from "react-router-dom";

import CountryPage from "./page/CountryPage";
import CountriesPage from "./page/CountriesPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountriesPage />} />
      <Route path="/country/:country" element={<CountryPage />} />
    </Routes>
  );
}

export default App;
