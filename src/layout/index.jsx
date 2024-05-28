import React from "react";
import Navbar from "../components/Main/NavBar";
import Sidebar from "../components/Main/Sidebar";

export default function index({ children }) {
  return (
    <div className="font-Poppins">
      <Navbar />
      <div className="grid grid-cols-12">
        <Sidebar />
        <div className="h-screen w-screen py-[4rem] pl-[14rem] overflow-x-hidden bg-gray-100 ">
          {children}
        </div>
      </div>
    </div>
  );
}
