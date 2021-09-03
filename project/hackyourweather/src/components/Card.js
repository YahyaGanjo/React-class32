import React from "react";

const Card = ({ city }) => {
  return (
    <div>
      {Object.keys(city).length === 0 && <h4>Type a city name and submit!</h4>}
      {city.message && (
        <div className="card">
          <h3>{city.message}</h3>
        </div>
      )}
      {city.id && (
        <div className="card">
          <h4>
            {city.name}, {city.sys.country}
          </h4>
          <h6>{city.weather[0].main}</h6>
          <p>{city.weather[0].description}</p>
          <p>min temp : {city.main.temp_min}</p>
          <p>max temp : {city.main.temp_max}</p>
          <p>
            location : {city.coord.lon}, {city.coord.lat}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
