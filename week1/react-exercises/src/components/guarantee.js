import React from "react";

export const Guarantee = ({ image, title, description }) => {
  return (
    <div>
      <img src={image} alt="this is an img" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
