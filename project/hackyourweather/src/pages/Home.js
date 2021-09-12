import React, { useState } from "react";
import SearchedCities from "../components/SearchedCities";
import Form from "../components/Form";
import "../App.css";

const Home = () => {
  const [searchedCities, setSearchedCities] = useState([]);
  const [error, setError] = useState(null);

  const fetchCity = async (userCity) => {
    setError(null);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=cfgvv`
      );
      const requestedCity = await response.json();
      if (requestedCity.message) {
        setError(requestedCity.message);
      } else {
        const citiesToRender = searchedCities.filter(
          (item) => item.id !== requestedCity.id
        );
        setSearchedCities([requestedCity, ...citiesToRender]);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  const removeCityHandler = (id) => {
    const newArray = searchedCities.filter((item) => item.id !== id);
    setSearchedCities(newArray);
  };
  return (
    <React.Fragment>
      <Form onSubmitForm={fetchCity} />
      <div className="container">
        {error === null ? (
          <SearchedCities
            onRemove={removeCityHandler}
            cities={searchedCities}
          />
        ) : (
          <h2>{error}</h2>
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
