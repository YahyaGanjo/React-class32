import React from "react";

export const Joke = ({ joke }) => {
  return (
    <div className="joke">
      <h2>Joke</h2>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};
