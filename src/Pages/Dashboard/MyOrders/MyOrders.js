import React, { useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [allBookings, setAllBookings] = useState([]);
  axios.get("http://localhost:5000/bookings").then((data) => {
    const bookingsLoaded = data.data;
    setAllBookings(bookingsLoaded);
    // console.log(allBookings);
  });
  return (
    <div>
      <h2 className=" text-2xl w-1/2 mx-auto font-semibold border text-center p-2 my-5 rounded-full border-sky-500">
        My all orders :{allBookings.length}
      </h2>
    </div>
  );
};

export default MyOrders;
