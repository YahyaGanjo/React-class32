import React, { useContext } from "react";
import City from "./City";
import SearchedCitiesContext from "../store/SearchedCitiesContext";

const SearchedCities = () => {
  const ctx = useContext(SearchedCitiesContext);
  if (ctx.cities.length === 0) {
    return <h4>Type a city name and submit!</h4>;
  } else {
    return (
      <ul>
        {ctx.cities.map((item) => (
          <City city={item} key={item.id} />
        ))}
      </ul>
    );
  }
};

export default SearchedCities;
