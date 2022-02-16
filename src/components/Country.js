import React from "react";
import { useParams } from "react-router-dom";
// Material ui components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

// import components
import useCountry from "../custom-hooks/useCountry";
import Loading from "./Loading";

const Country = () => {
  const country = useParams().country;
  const [countryData, errCountryData, loading] = useCountry(country);

  const [expanded, setExpanded] = React.useState(false);
  //to apply expand them
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {errCountryData ? (
        <h1>{errCountryData.message}.</h1>
      ) : loading ? (
        <Loading />
      ) : countryData[0] ? (
        //load data once it received
        <div className="container">
          <Card sx={{ width: 700 }}>
            <CardMedia
              component="img"
              height="auto"
              src={countryData[0].flags.png}
              alt="country flag"
            />
            <CardContent>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {countryData[0].name.common}
              </Typography>
              <FavoriteIcon />
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">Capital</IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>{countryData[0].capital}</CardContent>
            </Collapse>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">Currency</IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {countryData[0].currencies
                  ? Object.values(countryData[0].currencies)[0].name.toString()
                  : " no currency found"}
              </CardContent>
            </Collapse>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">Native Name</IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {countryData[0].name.nativeName
                  ? Object.values(
                      countryData[0].name.nativeName
                    )[0].common.toString()
                  : " no currency found"}
              </CardContent>
            </Collapse>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">Borders</IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <ul>
                  {countryData[0].borders
                    ? countryData[0].borders.map((border) => {
                        return <li key={border}>{border}</li>;
                      })
                    : "no border found"}
                </ul>
              </CardContent>
            </Collapse>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">Languages</IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <ul>
                  {countryData[0].languages
                    ? Object.values(countryData[0].languages).map(
                        (language) => {
                          return <li key={language}>{language}</li>;
                        }
                      )
                    : "no border found"}
                </ul>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      ) : null}
    </>
  );
};

export default Country;
