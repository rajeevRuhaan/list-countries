import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCountry } from "../../redux/country/action";
import Loading from "../Loading";
import Error from "../Error";
import { addFavorite, removeFavorite } from "../../redux/favorite/action";
import { InitialState } from "../../redux/store";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@material-ui/core";
import "./Country.css";

const Country = () => {
  const name = useParams().country;
  const dispatch = useDispatch();
  const { country, loading, error } = useSelector((state: InitialState) => state.country);
  const favorite = useSelector((state: InitialState) => state.favorite.favorite);
  console.log(favorite);

  useEffect(() => {
    dispatch(fetchCountry(name as string));
  }, [dispatch, name]);

  const handleFavorite = (favoriteCountry: string) => {
    if (favorite.includes(favoriteCountry)) {
      dispatch(removeFavorite(favoriteCountry));
    } else {
      dispatch(addFavorite(favoriteCountry));
    }
  };

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error err={error} />;
  }

  return (
    <div className="card-container">
      {country.length > 0 && (
        <div className="card">
          <div className="flag">
            <img src={country[0].flags.png} alt="country-flag" />
          </div>
          <div className="detail-info">
            <div className="section">
              <div className="section__heading">{country[0].name.common}</div>
              <div className="section__content">
                <IconButton
                  onClick={() => handleFavorite(country[0].name.common)}
                >
                  <FavoriteIcon
                    style={{
                      color: favorite.includes(country[0].name.common)
                        ? "red"
                        : "black",
                    }}
                  />
                </IconButton>
              </div>
            </div>
            <div className="section">
              <div className="section__heading">Capital</div>
              <div className="section__content">
                {country[0].capital !== undefined && country[0].capital[0]}
              </div>
            </div>
            <div className="section">
              <div className="section__heading">Native Name</div>
              <div className="section__content">
                {Object.values(country[0].name.nativeName)[0].common}
              </div>
            </div>
            <div className="section">
              <div className="section__heading">Currencies</div>
              <div className="section__content">
                {country[0].currencies !== undefined &&
                  Object.values(country[0].currencies)[0].name}
              </div>
            </div>
            <div className="section">
              <div className="section__heading">Languages</div>
              <div className="section__content">
                {country[0].languages !== undefined &&
                  Object.values(country[0].languages).map((language) => {
                    return <span key={language}>{language}</span>;
                  })}
              </div>
            </div>
            <div className="section">
              <div className="section__heading">Borders</div>
              <div className="section__content">
                {country[0].borders !== undefined &&
                  country[0].borders.map((item) => (
                    <span key={item}>{item} </span>
                  ))}
              </div>
            </div>
            <div className="section">
              <div className="section__heading">Time Zones</div>
              <div className="section__content">
                {country[0].timezones.map((item) => (
                  <span key={item}>{item} </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
