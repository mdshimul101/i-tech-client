import React from "react";

const Category = ({ category }) => {
  const { name, image } = category;
  return (
    <div>
      <div className="card card-compact w-11/12 lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-48" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            Here you can buy different types of {name} laptops, we have put our
            best used laptops here to know more about them by clicking Show more
            button.
          </p>
          <div className="card-actions justify-end">
            <button className="btn border-none bg-sky-500">Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
