import React from "react";
import { useSelector } from "react-redux";

const FavoriteCountries = ({ countryName }) => {
  const selector = useSelector((state) => state);
  console.log(selector);
  return (
    <div>
      <h1>Favorite countries List</h1>
      {selector.map((name) => {
        return <p>{name.countryName}</p>;
      })}
    </div>
  );
};

export default FavoriteCountries;
