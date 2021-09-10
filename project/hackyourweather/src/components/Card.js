import { Fragment } from "react";

const Card = ({ city }) => {
  if (Object.keys(city).length === 0) {
    return <h4>Type a city name and submit!</h4>;
  }

  let content;

  if (city.message) {
    content = <h4>{city.message}</h4>;
  } else {
    content = (
      <Fragment>
        <h4>
          {city.name}, {city.sys.country}
        </h4>
        <h3>{city.weather[0].main}</h3>
        <p>{city.weather[0].description}</p>
        <p>min temp : {(city.main.temp_min - 273.15).toFixed()} °C</p>
        <p>max temp : {(city.main.temp_max - 273.15).toFixed()} °C</p>
        <p>
          location : {city.coord.lon}, {city.coord.lat}
        </p>
      </Fragment>
    );
  }
  return <div className="card">{content}</div>;
};

export default Card;
