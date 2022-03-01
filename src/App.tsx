import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

//mui them
import { ThemeProvider, createTheme } from "@mui/material/styles";

// components
import CountryPage from "./page/CountryPage";
import CountriesPage from "./page/CountriesPage";
import FavoriteCountriesPage from "./page/FavoriteCountriesPage";
import { fetchCountries } from "./redux/countries/action";

//
interface AppContextInterface {
 [ palette : string]: {mode: string}
}
export const ColorModeContext = createContext({} as AppContextInterface);

function App() {
  const [mode, setMode] = useState("light");
  const dispatch = useDispatch();

  const colorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode, 
    },
  });

  // make API call on page load
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/country/:country" element={<CountryPage />} />
          <Route path="/favorites" element={<FavoriteCountriesPage />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
