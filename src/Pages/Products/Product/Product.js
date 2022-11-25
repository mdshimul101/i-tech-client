import React from "react";

const Product = ({ product }) => {
  const {
    categoryName,
    name,
    image,
    location,
    originalPrice,
    resalePrice,

    postedDated,
    sellersName,
    description,
  } = product;
  return (
    <div>
      <h2 className="text-gray-500 text-2xl font-semibold py-5">
        Brand : {categoryName}
      </h2>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl w-full border rounded-tl-md">
          <div className="">
            <figure>
              <img
                src={image}
                alt="Album"
                className="w-full lg:w-[550px] lg:h-96 border rounded-md"
              />
            </figure>
          </div>

          <div className="card-body ">
            <p className="text-sm">
              <span>
                <span className="text-gray-700 font-bold">Seller name</span> :{" "}
                {sellersName}
              </span>
              <br />
              <span>
                {" "}
                <span className="text-gray-700 font-bold">
                  Post date
                </span> : {postedDated}
              </span>
            </p>
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div>
              <p>{}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
