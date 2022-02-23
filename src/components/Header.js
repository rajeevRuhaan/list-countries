import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

import { ColorModeContext } from "../App";

// components mui
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

import { Box, Typography } from "@mui/material";

const Header = () => {
  const favoriteCountries = useSelector((state) => state.favorite);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

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
      <div style={{ textDecoration: "none" }}>
        <Link to="/">
          <Typography sx={{ fontSize: 30 }}>Countries Info.</Typography>
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
            {favoriteCountries ? favoriteCountries.length : 0}
          </Typography>
          <FavoriteIcon
            sx={{ marginRight: "50px", color: "white", width: 40, height: 40 }}
          />
        </Link>

        <IconButton
          sx={{ marginRight: "50px", width: 40, height: 40 }}
          onClick={colorMode}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </div>
    </Box>
  );
};

export default Header;
