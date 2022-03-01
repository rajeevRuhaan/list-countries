import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1";

type valueType={
  value:string
}

export const getCountriesList = async (value : valueType) => {
  let response = await axios.get(`${baseUrl}/${value}`);

  return response.data;
};

export const getCountry = async (country: string) => {
  let response = await axios.get(`${baseUrl}/name/${country}?fullText=true`);
  return response.data;
};
