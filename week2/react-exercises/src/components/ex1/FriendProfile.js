import React from "react";

export const FriendProfile = ({ friend }) => {
  return (
    <div>
      {Object.keys(friend).length === 0 ? (
        <p>you have no friends yet</p>
      ) : (
        <ul>
          <li>first name: {friend.name.first}</li>
          <li>last name: {friend.name.last}</li>
          <li>
            address: {friend.location.street.name}{" "}
            {friend.location.street.number}, {friend.location.city}
          </li>
          <li>country: {friend.location.country} </li>
          <li>email: {friend.email}</li>
          <li>phone number: {friend.phone}</li>
        </ul>
      )}
    </div>
  );
};
