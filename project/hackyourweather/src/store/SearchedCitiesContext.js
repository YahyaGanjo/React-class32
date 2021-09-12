import React from "react";

const SearchedCitiesContext = React.createContext({
  cities: [],
  addCity: (city) => {},
  removeCity: (id) => {},
});

export default SearchedCitiesContext;
