import React from "react";
import CardLayout from "../../../components/Main/CardLayout";
import { NavLink } from "react-router-dom";

export default function Refugee() {
  return (
    <div className="mt-10">
      <NavLink
        to="/registerrefugee"
        className="px-4 py-2 bg-blue-500  text-white rounded-lg mt-10 ml-12"
      >
        Create Refugee
      </NavLink>
      <div className="flex justify-around  p-4  m-4">
        <CardLayout />
      </div>
    </div>
  );
}
