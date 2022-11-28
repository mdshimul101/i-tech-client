import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [sellers, setSellers] = useState([]);
  const {
    data: allProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/products/seller"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/seller?email=${user.email}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleProductStatus = (id) => {
    const productStatus = { productStatus: "sold" };

    fetch(`http://localhost:5000/products/seller/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(productStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product status update successfully!!");
          refetch();
        }
      })
      .catch((er) => console.error(er));
  };
  const handleAdvertised = (id) => {
    const advertised = { advertised: "Show" };

    fetch(`http://localhost:5000/products/seller/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(advertised),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Verify successfully!!");
          refetch();
        }
      })
      .catch((er) => console.error(er));
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/products/seller/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Delete successfully!");
          refetch();
          const remaining = sellers.filter((odr) => odr._id !== id);
          setSellers(remaining);
        }
      })
      .catch((er) => console.error(er));
  };

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <h2 className=" text-2xl  lg:w-1/2 mx-auto font-semibold border text-center p-1 my-5 lg:rounded-full border-sky-500">
        All Seller : {allProducts?.length}
      </h2>
      <table className="table w-full text-center">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Name</th>
            <th>Price</th>

            <th>Product Status</th>
            <th>Show Advertised</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((user, i) => (
            <tr key={user?._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.resalePrice}</td>

              <td>
                <button
                  onClick={() => handleProductStatus(user._id)}
                  className={
                    user.productStatus === "sold"
                      ? "btn btn-xs  divide-slate-500 btn-disabled"
                      : "btn btn-xs btn-info"
                  }
                >
                  {user.productStatus === "sold" ? "Sold" : "Available"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleAdvertised(user._id)}
                  className={
                    user.productStatus === "sold"
                      ? "btn btn-xs  divide-slate-500 btn-disabled"
                      : "btn btn-xs btn-info"
                  }
                >
                  {user.productStatus === "sold"
                    ? "No Advertised"
                    : "Show Advertised"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-xs btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
