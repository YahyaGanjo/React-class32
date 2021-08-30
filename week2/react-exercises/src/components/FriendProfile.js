import React from "react";

export const FriendProfile = ({ friend }) => {
  return !friend.name ? null : (
    <ul>
      <li>first name: {friend.name.first}</li>
      <li>last name: {friend.name.last}</li>
      <li>
        address: {friend.location.street.name} {friend.location.street.number},{" "}
        {friend.location.city}
      </li>
      <li>country: {friend.location.country} </li>
      <li>email: {friend.email}</li>
      <li>phone number: {friend.phone}</li>
    </ul>
  );
};
