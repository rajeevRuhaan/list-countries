// This hook is used to fetch one specific country

import { useEffect, useState } from "react";

import { getCountry } from "../api/Api";

const useCountry = (country) => {
  console.log(country);
  const [countryData, setCountryData] = useState([]);
  const [errCountryData, setErr] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // use async function to control over fetching API data
    const fetchCountryData = () => {
      setLoading(true);
      try {
        //get single country data from API call
        const data = getCountry(country);
        console.log(data);
        setCountryData(data);
        setLoading(false);
      } catch (error) {
        setErr(error);
      }
    };
    fetchCountryData();
  }, [country]);

  return [countryData, errCountryData, loading];
};

export default useCountry;
