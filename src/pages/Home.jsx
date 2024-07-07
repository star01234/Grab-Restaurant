import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Search from "../component/Search";
import Restaurant from "../component/Restaurant"

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurant")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      })
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <Search
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <Restaurant restaurants={filteredRestaurants} />
    </div>
  );
}

export default App;