import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

// css
import "./App.css";
//mui them
import { ThemeProvider, createTheme } from "@mui/material/styles";

// components
import CountryPage from "./page/CountryPage";
import CountriesPage from "./page/CountriesPage";
import FavoriteCountriesPage from "./page/FavoriteCountriesPage";

//
export const AppContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState({
    mode: false,
  });
  const contextValue = { ...darkMode, setDarkMode };
  //
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  console.log(theme);

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/country/:country" element={<CountryPage />} />
          <Route path="/favorites" element={<FavoriteCountriesPage />} />
        </Routes>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
