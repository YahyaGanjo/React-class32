import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Form } from "./components/Form";

function App() {
  const [city, setCity] = useState({});

  const fetchCity = async (userCity) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const requestedCity = await response.json();
      setCity(requestedCity);
    } catch (error) {
      console.log(error);
      setCity({ message: "Server Error" });
    }
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <Form onSubmitForm={fetchCity} />
      <div className="container">
        <Card city={city} />
      </div>
    </div>
  );
}

export default App;
