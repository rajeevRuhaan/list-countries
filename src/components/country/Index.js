import React from "react";
import { useParams } from "react-router-dom";

import useCountry from "../../custom-hooks/useCountry";

const Index = () => {
  const { name } = useParams();
  const [countryData, errCountryData, loading] = useCountry(name);

  return <div></div>;
};

export default Index;
