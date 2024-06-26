import React from "react";
import { FaSearch } from "react-icons/fa";

const NoRecordsFound = ({ title = "No Records Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <FaSearch className="text-gray-400 text-6xl mb-4" />
      <h2 className="text-gray-600 text-2xl font-semibold">{title}</h2>
    </div>
  );
};

export default NoRecordsFound;
