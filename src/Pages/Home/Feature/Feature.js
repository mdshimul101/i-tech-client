import React from "react";
import {
  FaRegMoneyBillAlt,
  FaPhoneAlt,
  FaSyncAlt,
  FaTruck,
} from "react-icons/fa";
const Feature = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-center text-sky-500 font-semibold text-2xl">
        Feature
      </h2>
      <section className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
        <div className="w-full lg:w-72 h-40 p-2 bg-gray-200 border rounded-md">
          <div className="text-4xl text-gray-700">
            <FaRegMoneyBillAlt className="m-auto pt-2" />
          </div>
          <div className="py-3 text-center">
            <p className="text-gray-600 text-2xl font-semibold my-2">
              Great Value
            </p>
            <p className="text-sm">We get you the best value for your money</p>
          </div>
        </div>
        <div className="w-full lg:w-72 h-40 p-2 bg-gray-200 border rounded-md">
          <div className="text-4xl text-gray-700">
            <FaPhoneAlt className="m-auto pt-2" />
          </div>
          <div className="py-3 text-center">
            <p className="text-gray-600 text-2xl font-semibold my-2">
              24/7 SUPPORT
            </p>
            <p className="text-sm">
              We’re here to support you around the clock
            </p>
          </div>
        </div>
        <div className="w-full lg:w-72 h-40 p-2 bg-gray-200 border rounded-md">
          <div className="text-4xl text-gray-700">
            <FaSyncAlt className="m-auto pt-2" />
          </div>
          <div className="py-3 text-center">
            <p className="text-gray-600 text-2xl font-semibold my-2">
              Warranty Policy
            </p>
            <p className="text-sm">
              Policy Our warranty policy will give you peace of mind
            </p>
          </div>
        </div>
        <div className="w-full lg:w-72 h-40 p-2 bg-gray-200 border rounded-md">
          <div className="text-4xl text-gray-700">
            <FaTruck className="m-auto pt-2" />
          </div>
          <div className="py-3 text-center">
            <p className="text-gray-600 text-2xl font-semibold my-2">
              Free Shipping
            </p>
            <p className="text-sm">
              We often provide free shipping for our products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
