import React from "react";

const Guarantee = ({ image, title, description }) => {
  return (
    <div>
      <img src={image} alt="this is an img" />
      <h2>{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Guarantee;
