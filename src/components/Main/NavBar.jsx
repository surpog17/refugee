import React from "react";
import { FaBell, FaEnvelope, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ userType, user }) => {
  return (
    <nav className="fixed bg-white w-full p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FaHome className="text-blue-800" size={24} />
        <span className="text-lg font-bold text-blue-800">ERHMS </span>
        <span className="text-lg font-bold text-blue-800 ">
          (
          {userType == "NDRMC Admin"
            ? "Admin"
            : userType == "ipd"
            ? "IPD"
            : userType == "ngo"
            ? "NGOs"
            : userType == "volunteer"
            ? "Volunteer"
            : userType}
          )
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search ..."
          className="bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
        />
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaEnvelope className="text-gray-600" size={24} />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="relative">
            <FaBell className="text-gray-600" size={24} />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <NavLink to="/profile" className={"flex items-center space-x-4"}>
            <img
              src={
                "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              }
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold">
              {user?.actor_profile?.username}{" "}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
