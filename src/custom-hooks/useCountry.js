// This hook is used to fetch one specific country

import { useEffect, useState } from "react";

import { getCountry } from "../api/Api";

const useCountry = (country) => {
  const [countryData, setCountryData] = useState([]);
  const [errCountryData, setErr] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // use async function to control over fetching API data
    const fetchCountryData = async () => {
      try {
        //get single country data from API call
        const data = await getCountry(country);

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
