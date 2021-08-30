import React from "react";

export const Button = ({ getFriend }) => {
  return (
    <div>
      <button onClick={getFriend}>Get a friend</button>
    </div>
  );
};
