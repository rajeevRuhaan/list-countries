import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/favorite/action";
//mui components
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favorite);

  console.log(favoriteList);
  if (favoriteList.length === 0) {
    return (
      <Fragment>
        <Typography variant="h3">List of Favorite Countries</Typography>
        <Typography>
          Hi! There is no any favorite countries added yet.
        </Typography>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Typography variant="h3">List of Favorite Countries</Typography>
      <Typography>
        {favoriteList.map((favorite) => {
          return (
            <Grid
              container
              key={favorite}
              direction="row"
              justifyContent="center"
              alignItems="center"
              height={60}
              className="favorite-container"
            >
              <Grid item xs={8} fontSize="24px">
                <Link to={`/country/${favorite}`} className="favoriteLink">
                  {favorite}
                </Link>
              </Grid>
              <Grid item>
                <IconButton onClick={() => dispatch(removeFavorite(favorite))}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
            </Grid>
          );
        })}
      </Typography>
    </Fragment>
  );
};

export default FavoriteList;
