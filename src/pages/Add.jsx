import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Add = () => {
  const navigate = useNavigate();
  const [resto, setRestos] = useState({
    title: "",
    type: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestos({ ...resto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resto),
      });
      if(response.ok){
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Restaurant added successfully!',
        }).then(() => {
          setRestos({
            title: "",
            type: "",
            img: "",
          });
          navigate('/'); // Navigate to home or any other route after successful submission
        });
      } else {
        throw new Error('Failed to add restaurant');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: error.message
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Add Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={resto.title}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Restaurant Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={resto.type}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Category"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              id="img"
              name="img"
              value={resto.img}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
