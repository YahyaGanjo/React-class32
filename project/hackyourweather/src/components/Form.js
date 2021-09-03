import React, { useState } from "react";

export const Form = (props) => {
  const [city, setCity] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.displayCity(city);
    setCity("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="pseudo-search">
        <input
          autoFocus="required"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={"Search city"}
        />
        <i className="fa fa-globe places"></i>
        <button className="fa fa-search"></button>
      </div>
      <button className="submit" type="submit">
        submit
      </button>
    </form>
  );
};
