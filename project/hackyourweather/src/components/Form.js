import React, { useState } from "react";

export const Form = (props) => {
  const [userCity, setUserCity] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitForm(userCity);
    setUserCity("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="pseudo-search">
        <input
          autoFocus="required"
          type="text"
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
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
