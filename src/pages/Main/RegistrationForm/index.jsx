// src/components/RegisterForm.js

import React from "react";

const index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Create an Account
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Register Account
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => alert("Redirect to login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
