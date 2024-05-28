import React from "react";
import { FaHome, FaUsers, FaBlog, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed w-[13.2rem] top-[4.4rem]">
      <div className="bg-blue-800 text-white min-h-screen flex flex-col py-5">
        {/* <div className="flex items-center gap-2 justify-start w-full py-5 px-2">
          <FaHome className="text-white" size={24} />
          <span className="text-xl font-bold text-White">ERHMS</span>
        </div> */}
        <nav className="flex-1 px-2 space-y-1">
          <NavLink
            to="/"
            className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
              isActive("/") ? "bg-blue-700" : ""
            }`}
          >
            <FaHome className="inline-block mr-2" /> Feeds
          </NavLink>
          <NavLink
            to="/users"
            className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
              isActive("/users") ? "bg-blue-700" : ""
            }`}
          >
            <FaUsers className="inline-block mr-2" /> All Users
          </NavLink>
          <div className="ml-4">
            <NavLink
              to="/refugees"
              className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
                isActive("/refugees") ? "bg-blue-700" : ""
              }`}
            >
              Refugee
            </NavLink>
            <NavLink
              to="/hosts"
              className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
                isActive("/hosts") ? "bg-blue-700" : ""
              }`}
            >
              Host
            </NavLink>
            <NavLink
              to="/NGOs"
              className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
                isActive("/NGOs") ? "bg-blue-700" : ""
              }`}
            >
              NGOs
            </NavLink>
          </div>
          <NavLink
            to="/blog"
            className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
              isActive("/blog") ? "bg-blue-700" : ""
            }`}
          >
            <FaBlog className="inline-block mr-2" /> Blog
          </NavLink>
          <NavLink
            to="/settings"
            className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
              isActive("/settings") ? "bg-blue-700" : ""
            }`}
          >
            <FaCogs className="inline-block mr-2" /> Settings
          </NavLink>
          <NavLink
            to="/login"
            className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
              isActive("/login") ? "bg-blue-700" : ""
            }`}
          >
            <FaSignOutAlt className="inline-block mr-2" /> Log out
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
