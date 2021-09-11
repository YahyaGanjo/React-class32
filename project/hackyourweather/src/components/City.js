import React from "react";
import { Link } from "react-router-dom";

const City = ({ onRemove, city }) => {
  return (
    <li className="card">
      <Link to={`/${city.id}`}>
        <h4>
          {city.name}, {city.sys.country}
        </h4>
      </Link>
      <button onClick={() => onRemove(city.id)}>X</button>
      <h3>{city.weather[0].main}</h3>
      <p>{city.weather[0].description}</p>
      <p>min temp : {(city.main.temp_min - 273.15).toFixed()} °C</p>
      <p>max temp : {(city.main.temp_max - 273.15).toFixed()} °C</p>
      <p>
        location : {city.coord.lon}, {city.coord.lat}
      </p>
    </li>
  );
};

export default City;
