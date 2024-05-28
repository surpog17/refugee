import React from "react";
import CardLayout from "../../../components/Main/CardLayout";

export default function index() {
  return (
    <div>
      <div className="flex justify-around bg-white p-4 rounded-lg shadow-md m-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Refugee
        </button>
        <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200">
          Host
        </button>
        <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200">
          Other
        </button>
      </div>
      <CardLayout />
    </div>
  );
}
