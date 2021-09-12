import React, { useState, useContext } from "react";
import SearchedCities from "../components/SearchedCities";
import Form from "../components/Form";
import "../App.css";
import SearchedCitiesContext from "../store/SearchedCitiesContext";

const Home = () => {
  const [error, setError] = useState(null);
  const ctx = useContext(SearchedCitiesContext);

  const fetchCity = async (userCity) => {
    setError(null);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const requestedCity = await response.json();
      if (requestedCity.message) {
        setError(requestedCity.message);
      } else {
        ctx.addCity(requestedCity);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <React.Fragment>
      <Form onSubmitForm={fetchCity} />
      <div className="container">
        {error === null ? <SearchedCities /> : <h2>{error}</h2>}
      </div>
    </React.Fragment>
  );
};

export default Home;
