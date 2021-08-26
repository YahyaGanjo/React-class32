import React from "react";
import Hobby from "./hobby";

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
          return <Hobby hobby={hobby} />;
        })}
      </ul>
    </div>
  );
};

export default HobbyList;
