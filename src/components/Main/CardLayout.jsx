// src/components/CardLayout.js

import React from "react";

const CardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full ">
        <div className="flex flex-wrap mb-5 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md  text-center ">
            <img
              src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              alt="Profile"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="mb-2">
              <span className="block font-bold">Abdela Husen</span>
              <span className="text-gray-500">Addis Ababa</span>
            </div>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Connect
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              alt="Profile"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="mb-2">
              <span className="block font-bold">Abdela Husen</span>
              <span className="text-gray-500">Addis Ababa</span>
            </div>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Connect
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              alt="Profile"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="mb-2">
              <span className="block font-bold">Abdela Husen</span>
              <span className="text-gray-500">Addis Ababa</span>
            </div>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Connect
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              alt="Profile"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="mb-2">
              <span className="block font-bold">Abdela Husen</span>
              <span className="text-gray-500">Addis Ababa</span>
            </div>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Connect
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              alt="Profile"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="mb-2">
              <span className="block font-bold">Hana Tariku</span>
              <span className="text-gray-500">Asela</span>
            </div>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
