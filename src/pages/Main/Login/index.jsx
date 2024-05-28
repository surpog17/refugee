import React from "react";

const index = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <div className="text-center">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/home.png"
            alt="Home Icon"
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Login</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot My Password? Click Here
            </a>
          </div>
        </form>
        <div className="mt-6 text-center">
          <a
            href="/register"
            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
          >
            Register New Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
