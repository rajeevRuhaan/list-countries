import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ColorModeContext } from "../App";
import {InitialState} from './../redux/store'

// components mui
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import { Favorite } from "@material-ui/icons";
import HomeIcon from "@mui/icons-material/Home";
import { Badge } from "@material-ui/core";

const Header = () => {
  const favLength = useSelector((state: InitialState) => state.favorite.favorite.length);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "75px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 100px",
        color: "blue",
        backgroundColor: "skyblue",
      }}
    >
      <div className="container-left" style={{ textDecoration: "none" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography sx={{ fontSize: 30 }}>Countries Info.</Typography>
        </Link>
      </div>
      <div
        className="container-right"
        style={{
          display: "block",
          width: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <Link to="/">
              <HomeIcon  />
            </Link>
          </div>
          <Badge badgeContent={favLength} color="secondary">
            <Link to="/favorites">
              <Favorite />
            </Link>
          </Badge>

          <IconButton sx={{ width: 40, height: 40 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default Header;
