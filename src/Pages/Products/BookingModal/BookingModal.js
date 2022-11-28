import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ singleProduct, setSingleProduct }) => {
  const { name: productName, resalePrice } = singleProduct;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const resalePrice = form.resalePrice.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      item: productName,
      client: name,
      email,
      phone,
      resalePrice,
      location,
    };
    console.log(booking);

    fetch("https://i-tech-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSingleProduct(null);
          toast.success("Booking successfully");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Model : {singleProduct?.name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="input w-full input-bordered text-black"
            />
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              readOnly
              className="input w-full input-bordered text-black"
            />
            <input
              name="text"
              type="text"
              defaultValue={singleProduct?.categoryName}
              readOnly
              className="input w-full input-bordered text-black"
            />
            <input
              name="resalePrice"
              type="text"
              defaultValue={resalePrice}
              readOnly
              className="input w-full input-bordered text-black"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your phone number"
              className="input w-full input-bordered text-black"
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Your location"
              className="input w-full input-bordered text-black"
              required
            />
            <button className="btn bg-sky-500 border-none w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
