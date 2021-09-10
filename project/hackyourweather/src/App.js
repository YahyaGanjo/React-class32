import React, { useState } from "react";
import "./App.css";
import SearchedCities from "./components/SearchedCities";
import { Form } from "./components/Form";

function App() {
  const [searchedCities, setSearchedCities] = useState([]);
  const [isFound, setIsFound] = useState(true);

  const fetchCity = async (userCity) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const requestedCity = await response.json();
      if (requestedCity.message) {
        setIsFound(false);
      } else {
        const citiesToRender = searchedCities.filter(
          (item) => item.id !== requestedCity.id
        );
        setSearchedCities([requestedCity, ...citiesToRender]);
        setIsFound(true);
      }
    } catch (error) {
      setIsFound(false);
      console.log(error);
    }
  };
  const removeCityHandler = (id) => {
    const newArray = searchedCities.filter((item) => item.id !== id);
    setSearchedCities(newArray);
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <Form onSubmitForm={fetchCity} />
      <div className="container">
        {isFound ? (
          <SearchedCities
            onRemove={removeCityHandler}
            cities={searchedCities}
          />
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </div>
  );
}

export default App;
