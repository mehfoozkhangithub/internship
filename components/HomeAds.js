import React, { useState, useEffect } from "react";
import axios from "axios";

const HomeAds = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = process.env.api;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/mainads/Home Ads`)
      .then((response) => {
        response.data.sort(
          (a, b) => new Date(b.dateField) - new Date(a.dateField)
        );

        const latestAds = response.data.slice(0, 5);

        setAds(latestAds);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error fetching ads: {error.message}</div>;
  }

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        height: "fit-content",
        listStyleType: "none", // Remove list dots
        padding: 0, // Remove default padding
      }}
    >
<<<<<<< HEAD
      {ads.map((ad,index) => (
=======
      {ads.map((ad, index) => (
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
        <li
          key={index}
          className="ad-item"
          style={{
            width: "269px",
            height: "269px",
          }}
        >
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
            <img
              src={ad.image}
              alt={ad.name}
<<<<<<< HEAD
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
=======
              className="w-full h-full object-fill"
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HomeAds;
