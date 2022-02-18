import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppContext } from "../App";

// components mui
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { Box, Typography } from "@mui/material";

const Header = () => {
  const favoriteCountries = useSelector((state) => state.favorite);
  const appContext = useContext(AppContext);
  const { setDarkMode, darkMode } = appContext;
  console.log(appContext);

  const changeMode = () => {
    if (!darkMode) {
      setDarkMode({ ...darkMode, mode: true });
    } else {
      setDarkMode({ ...darkMode, mode: false });
    }
  };
  //style for typography
  const styles = {
    typography: {
      color: "black",
      fontSize: 20,
      position: "relative",
      top: "10%",
      left: "25%",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        color: "blue",
        backgroundColor: "skyblue",
      }}
    >
      <div>
        <Link to="/">
          <Typography sx={{ fontSize: 30 }}>Countries List</Typography>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link
          to="/favorites"
          style={{
            display: "flex",
            justifyContent: "space-around",
            textDecoration: "none",
          }}
        >
          <Typography style={styles.typography}>
            {favoriteCountries.length}
          </Typography>
          <FavoriteIcon
            sx={{ marginRight: "50px", color: "white", width: 40, height: 40 }}
          />
        </Link>

        <Brightness4Icon
          sx={{ marginRight: "50px", width: 40, height: 40 }}
          onClick={() => changeMode()}
        />
      </div>
    </Box>
  );
};

export default Header;
