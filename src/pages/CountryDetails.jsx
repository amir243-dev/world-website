import React, { useEffect, useState } from "react";
import EachCountry from "../components/EachCountry";
import { useLocation, useParams } from "react-router-dom";
import countriesData from "../data.json";

const CountryDetails = () => {
  const { countryName } = useParams();

  const [country, setCountry] = useState(null);

  const { state } = useLocation();
  console.log(useLocation);

  const findCountry =
    state.country ||
    countriesData.find((country) => {
      return country.name === decodeURIComponent(countryName);
    });
  console.log(findCountry);

  //THIS IS USED TO GET A KEY/VALUE PAIR, IN AN API/END-POINT TO FILL IN THE NEEDED OBJECT KEY/VALUE PAIR

  // ==========Fetch each
  return (
    <div>
      <EachCountry perCountry={findCountry} />
    </div>
  );
};

export default CountryDetails;
