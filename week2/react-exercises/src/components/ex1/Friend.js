import React, { useState } from "react";
import { Button } from "./Button";
import { FriendProfile } from "./FriendProfile";
import "./style.css";

export const Friend = () => {
  const [friend, setFriend] = useState({});
  const getFriend = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      setFriend(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="friend">
      <Button getFriend={getFriend} />
      <FriendProfile friend={friend} />
    </div>
  );
};
