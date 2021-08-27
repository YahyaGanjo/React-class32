import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <h4>
        {props.name}, {props.country}
      </h4>
      <h6>{props.weatherMain}</h6>
      <p>{props.description}</p>
      <p>min temp : {props.minTemp}</p>
      <p>max temp : {props.maxTemp}</p>
      <p>
        location {props.lon}, {props.lat}
      </p>
    </div>
  );
};

export default Card;
