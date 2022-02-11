import React from "react";
import { useParams } from "react-router-dom";

// import components
import useCountry from "../custom-hooks/useCountry";
import Loading from "./Loading";

const Country = () => {
  const country = useParams();
  const [countryData, errCountryData, loading] = useCountry(country.country);
  //to check
  console.log(countryData, errCountryData, loading);

  return (
    <>
      {errCountryData ? (
        <>
          <h1>{errCountryData.message}.</h1>
        </>
      ) : loading ? (
        <Loading />
      ) : countryData ? (
        //load data once it received
        <>{countryData[0].name.common}</>
      ) : null}
    </>
  );
};

export default Country;
