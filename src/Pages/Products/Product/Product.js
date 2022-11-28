import React from "react";

const Product = ({ product, setSingleProduct }) => {
  const {
    categoryName,
    name,
    image,
    location,
    originalPrice,
    resalePrice,
    condition,
    postedDated,
    sellersName,
    description,
    mobile,

    purchaseDate,
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
                className="w-full lg:w-[600px] lg:h-[480px] border rounded-md"
              />
            </figure>
          </div>

          <div className="card-body ">
            <span>
              <span className="text-gray-700 font-bold text-base">
                Seller name
              </span>{" "}
              : {sellersName}
            </span>
            <h2 className="card-title">{name}</h2>
            <div>{description}</div>
            <div className="mt-3">
              <span className="text-gray-700 font-bold">price : </span>
              <del>
                <span className="mr-2">${originalPrice}</span>
              </del>
              <span></span>
              <span>${resalePrice}</span>
              <br />
              <span className="text-gray-700 font-bold mr-2">
                Purchase Date :{" "}
              </span>
              <span>{purchaseDate}</span>

              <br />
              <span className="text-gray-700 font-bold mr-2">Condition : </span>
              <span>{condition}</span>
              <span>{purchaseDate}</span>
            </div>

            <div className="text-sm mt-5">
              <span>
                <span className="text-gray-700 font-bold">Post date</span> :{" "}
                {postedDated}
              </span>
              <br />
              <span>
                {" "}
                <span className="text-gray-700 font-bold">Location</span> :{" "}
                {location}
              </span>
              <br />
              <span>
                {" "}
                <span className="text-gray-700 font-bold">Contact</span> :{" "}
                {mobile}
              </span>
            </div>
            <div className="card-actions justify-end">
              <label
                htmlFor="booking-modal"
                className="btn bg-sky-500 border-none"
                onClick={() => setSingleProduct(product)}
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
