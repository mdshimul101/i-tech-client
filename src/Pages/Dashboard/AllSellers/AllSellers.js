import { useQuery } from "@tanstack/react-query";
import React from "react";
import useStatus from "../../../hooks/useStatus";

const AllSellers = () => {
  const [userStatus] = useStatus();
  const {
    data: allSellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/seller?status=Seller`
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return (
    <div className="w-11/12 mx-auto">
      <h2 className=" text-2xl  lg:w-1/2 mx-auto font-semibold border text-center p-1 my-5 lg:rounded-full border-sky-500">
        All Seller : {allSellers?.length}
      </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allSellers.map((user, i) => (
            <tr key={user?._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.role ? "Admin" : user?.status}</td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    // onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-xs btn-info"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                {user?.role !== "admin" && (
                  <button
                    // onClick={() => handleDelete(user._id)}
                    className="btn btn-xs btn-danger"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
