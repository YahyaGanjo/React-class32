import React, { useState } from "react";
import SearchedCities from "../components/SearchedCities";
import Form from "../components/Form";
import "../App.css";

const Home = () => {
  const [searchedCities, setSearchedCities] = useState([]);
  const [cityIsFound, setCityIsFound] = useState(true);

  const fetchCity = async (userCity) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const requestedCity = await response.json();
      if (requestedCity.message) {
        setCityIsFound(false);
      } else {
        const citiesToRender = searchedCities.filter(
          (item) => item.id !== requestedCity.id
        );
        setSearchedCities([requestedCity, ...citiesToRender]);
        setCityIsFound(true);
      }
    } catch (error) {
      setCityIsFound(false);
      console.log(error);
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
        {cityIsFound ? (
          <SearchedCities
            onRemove={removeCityHandler}
            cities={searchedCities}
          />
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
