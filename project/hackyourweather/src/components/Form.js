import React, { useState, useEffect } from "react";

export const Form = (props) => {
  const [userCity, setUserCity] = useState("");
  const [buttonIsSHown, setButtonIsShown] = useState(false);
  useEffect(() => {
    /[a-zA-Z]/.test(userCity)
      ? setButtonIsShown(true)
      : setButtonIsShown(false);
  }, [userCity]);
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitForm(userCity);
    setUserCity("");
    setButtonIsShown(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      <div className="pseudo-search">
        <input
          autoFocus="required"
          type="text"
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
          placeholder={"Search city"}
        />
        <i className="fa fa-globe places"></i>
      </div>
      {buttonIsSHown && (
        <button className="submit" type="submit">
          submit
        </button>
      )}
    </form>
  );
};
