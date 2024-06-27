import React from "react";
import { useState, useEffect } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Restaurant from "./component/Restaurant";
import "./App.css";

function App() {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/restaurant")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setRestaurants(response);
          setFilteredRestaurants(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);

    return (
      <div className="container mx-auto">
        <Header />
        <Search
          restaurant={restaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
        <Restaurant restaurants={filteredRestaurants} />
      </div>
    );
  };
export default App;
