import React from "react";
import Hobby from "./Hobby";
import { v4 as uuidv4 } from "uuid";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div>
      <ul>
        {hobbies.map((hobby) => {
          return <Hobby hobby={hobby} key={uuidv4()} />;
        })}
      </ul>
    </div>
  );
};

export default HobbyList;
