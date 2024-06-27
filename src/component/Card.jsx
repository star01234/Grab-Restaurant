import React from "react";

function Card({ img, title, description }) {
  return (
    <div className="card card-compact bg-base-100 w-80 shadow-xl h-96">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body"> 
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
