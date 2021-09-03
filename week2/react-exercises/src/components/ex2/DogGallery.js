import React, { useState } from "react";
import { Button } from "./Button";
import { DogPhoto } from "./DogPhoto";

export const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const photo = await response.json();
      setDogPhotos((prevGallery) => [...prevGallery, photo]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ textAlign: "center", margin: "70px 0px" }}>
      <Button fetchPhoto={getDogPhoto} />
      <div>
        {dogPhotos.length === 0 && (
          <h4>Get your first dog by clicking the button!</h4>
        )}
        {dogPhotos.map((photo) => (
          <DogPhoto src={photo.message} key={Math.random() * 10000000} />
        ))}
      </div>
    </div>
  );
};
