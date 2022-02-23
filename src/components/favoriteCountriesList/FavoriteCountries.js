import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//Bootstrap
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const FavoriteCountries = () => {
  const favoriteCountries = useSelector((state) => state.favorite.favorite);

  return (
    <Card style={{ width: "50%", margin: "50px auto", padding: "2rem" }}>
      <Card.Header style={{ backgroundColor: "skyblue", textAlign: "center" }}>
        Favorite Countries
      </Card.Header>
      <ListGroup variant="flush">
        {favoriteCountries.map((countryName) => {
          return (
            <ListGroup.Item key={countryName}>
              <Link to={`/country/${countryName}`}>{countryName}</Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
};

export default FavoriteCountries;
