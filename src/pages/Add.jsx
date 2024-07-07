import React, { useState } from "react";

const Add = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async () => {
  
    try {
      const response = await fetch("http://localhost:3000/restaurants/", {
        method: "POST",
        body: JSON.stringify(restaurant), 
      });

      if (response.ok) {
        alert("Restaurant added successfully");
        setRestaurant({
          title: "",
          type: "",
          img: "",
        });
      } 
      
    } catch (error) {
      console.log("Error");
     
    }
  };

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-2xl text-center">Add Restaurant</h1>
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            Restaurant Name
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Restaurant Name"
              value={restaurant.title}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Restaurant Type
            <input
              type="text"
              name="type"
              className="grow"
              placeholder="Restaurant Type"
              value={restaurant.type}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Restaurant Image Url
            <input
              type="text"
              name="img"
              className="grow"
              placeholder="Restaurant Image Url"
              value={restaurant.img}
              onChange={handleChange}
            />
          </label>
          {restaurant.img && (
            <div className="flex items-center gap-2">
              <img src={restaurant.img} className="h-32" alt="Restaurant" />
            </div>
          )}
          <button type="submit" className="btn btn-success">
            Add Restaurant
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;