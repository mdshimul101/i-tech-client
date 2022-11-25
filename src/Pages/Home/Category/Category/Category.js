import React from "react";
import { Link } from "react-router-dom";
const Category = ({ category }) => {
  const { _id, categoryName, image } = category;
  return (
    <div>
      <div className="card card-compact w-11/12 lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-48" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{categoryName}</h2>
          <p>
            Here you can buy different types of {categoryName} laptops, we have
            put our best used laptops here to know more about them by clicking
            Show more button.
          </p>
          <div className="card-actions justify-end">
            <Link to={`/categories/${_id}`}>
              <button className="btn bg-sky-500 border-none">Show more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
