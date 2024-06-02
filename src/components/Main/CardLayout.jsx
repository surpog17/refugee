// src/components/CardLayout.js

import React from "react";
import { NavLink } from "react-router-dom";

const CardLayout = ({
  image = null,
  firstname = null,
  lastname = null,
  location = null,
  to,
  action,
  isActive,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full ">
        <div className="bg-white p-4 rounded-lg shadow-md   max-w-xl  text-center ">
          {image ? (
            <img
              src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              alt="Profile"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
          ) : (
            <div className="w-full text-white h-48 object-cover rounded-t-lg mb-4 bg-slate-500 text-4xl capitalize flex items-center justify-center">
              {firstname ? firstname[0] : ""}
              {lastname ? lastname[0] : ""}
            </div>
          )}
          <div className="mb-2">
            <span className="block font-bold">{`${firstname} ${lastname}`}</span>
            <span className="text-gray-500">{location || "-"}</span>
          </div>
          <div className="grid grid-cols-2 gap-5 text-sm">
            <NavLink
              to={to}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Detail
            </NavLink>
            {isActive == false ? (
              <button
                onClick={() => action()}
                className="w-full px-4 py-2 bg-[#45747e] text-white rounded-lg "
              >
                Activate
              </button>
            ) : (
              <button
                onClick={() => action()}
                className="w-full px-4 py-2 bg-[#ea7128] text-white rounded-lg "
              >
                Deactivate
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
