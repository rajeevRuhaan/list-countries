import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

//mui components and style
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// components
import FavoriteList from "./FavoriteList";

const Favorite = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Card className="favorite">
        <CardContent>
          <FavoriteList />
        </CardContent>
        <Box textAlign="center">
          <Button
            size="large"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        </Box>
      </Card>
    </Fragment>
  );
};

export default Favorite;
