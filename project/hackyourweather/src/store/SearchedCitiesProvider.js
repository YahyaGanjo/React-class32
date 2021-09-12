import { useState } from "react";
import SearchedCitiesContext from "./SearchedCitiesContext";

const SearchedCitiesProvider = (props) => {
  const [searchedCities, setSearchedCities] = useState([]);

  const addCityHandler = (city) => {
    const citiesToRender = searchedCities.filter((item) => item.id !== city.id);
    setSearchedCities([city, ...citiesToRender]);
  };
  const removeCityHandler = (id) => {
    const newArray = searchedCities.filter((item) => item.id !== id);
    setSearchedCities(newArray);
  };
  const citiesContext = {
    cities: searchedCities,
    addCity: addCityHandler,
    removeCity: removeCityHandler,
  };
  return (
    <SearchedCitiesContext.Provider value={citiesContext}>
      {props.children}
    </SearchedCitiesContext.Provider>
  );
};

export default SearchedCitiesProvider;
