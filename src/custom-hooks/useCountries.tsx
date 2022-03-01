// This hook is used to fetch all countries
import { useEffect, useState } from "react";
import { getCountriesList } from "../api/Api";

const useCountries = (listCountries) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState();

  useEffect(() => {
    // use async function to control over fetching API data
    const fetchCountries = async () => {
      setLoading(true);
      try {
        //get all countries data from API call
        const data = await getCountriesList("/all");

        await setCountries(data);
        setLoading(false);
      } catch (error) {
        setErr(error);
      }
    };
    fetchCountries();
  }, [listCountries]);

  return [countries, err, loading];
};

export default useCountries;
