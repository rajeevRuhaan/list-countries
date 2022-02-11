import { Routes, Route } from "react-router-dom";

import HomePage from "./page/HomePage";
import CountryPage from "./page/CountryPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:country" element={<CountryPage />} />
    </Routes>
  );
}

export default App;
