import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1";

export const getCountriesList = async (value) => {
  let response = await axios.get(`${baseUrl}/${value}`);

  return response.data;
};

export const getCountry = async (country) => {
  let response = await axios.get(`${baseUrl}/name/${country}`);
  return response.data;
};
