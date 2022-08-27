import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <div>
      {photos &&
        photos.map((photo) => {
          return (
            <div key={photo.id}>
              <p>{photo.title}</p>
              <img src={photo.thumbnailUrl} alt="" />;
            </div>
          );
        })}
    </div>
  );
};

export default FetchData;
