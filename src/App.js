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
export const ColorModeContext = createContext();

function App() {
  const [mode, setMode] = useState("light");
  const colorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  //
  const theme = createTheme({
    palette: {
      mode,
    },
  });

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
