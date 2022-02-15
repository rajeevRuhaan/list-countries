import React from "react";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchCountry = ({ setInputValue }) => {
  const handleInput = (userInput) => {
    setInputValue(userInput);
  };
  return (
    <div className="search-area">
      <h1>Welcome</h1>
      <h3 style={{ fontSize: "30px" }}>
        LIST OF COUNTRIRES <spam>!</spam>
      </h3>
      <div style={{ position: "relative", display: "inline-block" }}>
        <SearchIcon
          sx={{ zIndex: "tooltip" }}
          style={{
            position: "absolute",
            right: 40,
            top: 40,
            width: 20,
            height: 20,
          }}
        />
        <TextField
          id="fullWidth"
          sx={{ margin: 2, border: 1, width: "500px" }}
          label="Search country by name!"
          variant="outlined"
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchCountry;
