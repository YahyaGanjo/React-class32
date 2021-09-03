import React, { useState, useEffect } from "react";
import { Joke } from "./Joke";

export const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((joke) => setJoke(joke))
      .catch((error) => console.log(error));
  }, []);
  return <Joke joke={joke} />;
};
