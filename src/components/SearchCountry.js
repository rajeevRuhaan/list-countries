import React, { useState } from "react";

import TextField from "@mui/material/TextField";

const SearchCountry = ({ setInputValue }) => {
  const handleInput = (userInput) => {
    setInputValue(userInput);
  };
  return (
    <div className="search-area">
      <TextField
        id="fullWidth"
        label="Search country"
        variant="outlined"
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
};

export default SearchCountry;
