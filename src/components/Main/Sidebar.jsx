import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Admin, CampAdmin, Ipd, NGOs, volunteer } from "./Meun";
import { FaSignOutAlt } from "react-icons/fa";
const Sidebar = ({ userType }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const menu =
    userType == "NDRMC Admin"
      ? Admin
      : userType == "IDP" || userType == "Host"
      ? Ipd
      : userType == "ngo"
      ? NGOs
      : userType == "Volunteer"
      ? volunteer
      : userType == "Camp Admin"
      ? CampAdmin
      : [];
  console.log(menu, "hahah");
  const HandleLogOut = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  return (
    <div className="fixed w-[13.2rem] top-[4.4rem]">
      <div className="bg-blue-800 text-white h-[35rem] flex flex-col py-5 overflow-x-hidden overflow-y-auto">
        {/* <div className="flex items-center gap-2 justify-start w-full py-5 px-2">
          <FaHome className="text-white" size={24} />
          <span className="text-xl font-bold text-White">ERHMS</span>
        </div> */}
        <nav className="flex-1 px-2 space-y-1 ">
          {menu?.map((items, index) => (
            <>
              <NavLink
                to={items?.to}
                className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
                  isActive(items?.to) ? "bg-blue-700" : ""
                }`}
              >
                <span className="text-xl">{items?.icon}</span> {items?.text}
              </NavLink>
              <div className="ml-4">
                {items?.subMenu?.map((subItem) => (
                  <NavLink
                    to={subItem?.to}
                    className={`block py-2.5 px-4 rounded hover:bg-blue-700 ${
                      isActive(subItem?.to) ? "bg-blue-700" : ""
                    }`}
                  >
                    {subItem?.text}
                  </NavLink>
                ))}
              </div>
            </>
          ))}
          <button
            onClick={() => HandleLogOut()}
            className={`gap-2 items-center   py-2.5 px-4 rounded hover:bg-blue-700 w-full flex`}
          >
            <FaSignOutAlt className="text-xl" /> LogOut
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
