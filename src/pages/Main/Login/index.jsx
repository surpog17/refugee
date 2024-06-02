import React, { useEffect, useState } from "react";
import refugee from "./../../../images/erhms.png";
import { allApi } from "../../../api/endPoint";
import { toast } from "react-toast";

const Index = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      try {
        const response = await allApi.post("/auth/token/", formData);
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data?.access);
        window.location.replace("/");
        toast.success("Welcome to ERHMS");
      } catch (error) {
        toast.error(error?.response?.data?.detail);
        console.error("Login error:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500 text-sm">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-xl">
        <div className="text-center">
          <img src={refugee} alt="Home Icon" className="mx-auto w-32" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Login</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={`w-full px-3 py-2 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring focus:ring-blue-200`}
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring focus:ring-blue-200`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
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

export default Index;
