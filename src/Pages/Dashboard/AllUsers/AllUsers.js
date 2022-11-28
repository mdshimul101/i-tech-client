import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const [sellers, setSellers] = useState([]);
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleVerify = (id) => {
    const verify = { verify: "Verify" };

    fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(verify),
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
    fetch(`http://localhost:5000/users/${id}`, {
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
        All Users : {allUsers?.length}
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Verify users</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, i) => (
            <tr key={user?._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.status}</td>
              {user.status !== "Admin" && (
                <td>
                  <button
                    onClick={() => handleVerify(user._id)}
                    className={
                      user.verify === "Verify"
                        ? "btn btn-xs  divide-slate-500 btn-disabled"
                        : "btn btn-xs btn-info"
                    }
                  >
                    {user.verify}
                  </button>
                </td>
              )}
              {user.status !== "Admin" && (
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs btn-danger"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
