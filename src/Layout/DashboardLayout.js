import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useStatus from "../hooks/useStatus";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [userStatus] = useStatus();
  // console.log(userStatus);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content lg:mt-16">
            {userStatus === "Buyer" && (
              <>
                <li className="text-lg font-semibold text-gray-700">
                  <Link to="/dashboard/myOrders">My Orders</Link>
                </li>
                <li className="text-lg font-semibold text-gray-700">
                  <Link to="/dashboard/myWishList">My wishlist</Link>
                </li>
              </>
            )}
            {userStatus === "Seller" && (
              <>
                <li className="text-lg font-semibold text-gray-700">
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li className="text-lg font-semibold text-gray-700">
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
              </>
            )}
            {userStatus === "Admin" && (
              <>
                <li className="text-lg font-semibold text-gray-700">
                  <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li className="text-lg font-semibold text-gray-700">
                  <Link to="/dashboard/allSellers">All Sellers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
