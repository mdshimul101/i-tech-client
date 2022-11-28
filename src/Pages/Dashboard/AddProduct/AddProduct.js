import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const [product, setProduct] = useState([]);

  // const url = "https://i-tech-server.vercel.app/products";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, [product]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const categoryName = form.categoryName.value;
    const productName = form.itemName.value;
    const image = form.photoURL.value;
    const location = form.location.value;
    const resalePrice = form.resalePrice.value;
    const originalPrice = form.originalPrice.value;
    const description = form.description.value;
    const condition = form.condition.value;
    const postedDated = form.postedDated.value;
    const purchaseDate = form.purchaseDate.value;
    const sellersName = form.sellersName.value;
    const mobile = form.mobile.value;

    console.log(purchaseDate);
    const product = {
      categoryName,
      name: productName,
      image,
      location,
      resalePrice,
      originalPrice,
      postedDated,
      sellersName,
      description,
      mobile,
      condition,
      purchaseDate,
      email,
    };
    fetch("https://i-tech-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product Added successfully!!");
          form.reset();
          navigate("/dashboard/myProducts");
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="mt-5 mb-24 w-11/12 mx-auto">
      <h2 className=" text-2xl  lg:w-1/2 mx-auto font-semibold border text-center p-1 my-5 lg:rounded-full border-sky-500">
        Add A Product
      </h2>
      <form onSubmit={handleAddProduct} className="mt-10 p-2 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:border shadow-xl  lg:p-5   lg:border-slate-300 hover:border-stone-400 ">
          <input
            name="email"
            type="email"
            placeholder="Email"
            defaultValue={user?.email}
            className="input input-ghost w-full  input-bordered"
            readOnly
          />
          {/* <input
            name="categoryName"
            type="text"
            placeholder="Category Name"
            className="input input-ghost w-full  input-bordered"
            required
          /> */}
          <select
            name="categoryName"
            className="select select-bordered w-full  mx-auto"
            required
          >
            <option value="Apple" selected>
              Apple
            </option>
            <option value="HP">HP</option>
            <option value="Asus">Asus</option>
          </select>
          <input
            name="itemName"
            type="text"
            placeholder="Product name"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="photoURL"
            type="text"
            placeholder="Image URL"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="resalePrice"
            type="number"
            placeholder="Resale Price"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="originalPrice"
            type="number"
            placeholder="Original Price"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="condition"
            type="text"
            placeholder="Condition"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <div>
            <label>Posted Date: </label>
            <input
              name="postedDated"
              type="date"
              placeholder="Posted Date"
              className="input input-ghost w-full  input-bordered mt-1"
              required
            />
          </div>

          <div>
            <label>Purchase Date:</label>
            <input
              name="purchaseDate"
              type="date"
              placeholder="Purchase Date"
              className="input input-ghost w-full  input-bordered mt-1"
              required
            />
          </div>

          <input
            name="sellersName"
            type="text"
            placeholder="Sellers Name"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="mobile"
            type="number"
            placeholder="Contact"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <div className="">
            <textarea
              name="description"
              className="textarea textarea-bordered h-24 w-full "
              placeholder="Description"
              required
            ></textarea>
          </div>
        </div>

        <div className="text-center mb-5">
          <input
            className="btn bg-sky-500 border-none  mt-10"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
