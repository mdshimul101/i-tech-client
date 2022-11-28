import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../contexts/AuthProvider";
const MyWishList = () => {
  const [allBookings, setAllBookings] = useState([]);
  const { user } = useContext(AuthContext);
  axios
    .get(`https://i-tech-server.vercel.app/bookings?email=${user?.email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((data) => {
      const bookingsLoaded = data.data;
      setAllBookings(bookingsLoaded);
      // console.log(allBookings);
    });
  return (
    <div className="w-11/12 mx-auto">
      <h2 className=" text-2xl  lg:w-1/2 mx-auto font-semibold border text-center p-1 my-5 lg:rounded-full border-sky-500">
        My Wish list :{allBookings.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>User Name</th>
              <th className="text-center">Product Name</th>
              <th> Product Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {allBookings &&
              allBookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <td>{i + 1}.</td>
                  <td>{booking.client}</td>
                  <td className="text-center">{booking.item}</td>
                  <td>${booking.resalePrice}</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Pay</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWishList;
