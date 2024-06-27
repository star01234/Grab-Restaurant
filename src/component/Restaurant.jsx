import React, { useState, useEffect } from "react";
import Card from "./Card";

const Restaurant = () => {
  const [restaurant, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/restaurant")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants &&
        restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            img={restaurant.img}
            title={restaurant.title}
            type={restaurant.type}
          />
        ))}
    </div>
  );
};

export default Restaurant;
