import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { allApiNotAuth } from "../../../api/endPoint";
import { toast } from "react-toast";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    location: "",
    capacity: "",
    legal_doc: "",
    country: "",
    phone_number: "",
    user_type: "NGO",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.password) tempErrors.password = "Password is required";
    if (!formData.first_name) tempErrors.first_name = "First Name is required";
    if (!formData.last_name) tempErrors.last_name = "Last Name is required";
    if (!formData.location) tempErrors.location = "Location is required";
    if (!formData.capacity) tempErrors.capacity = "Capacity is required";
    if (!formData.legal_doc)
      tempErrors.legal_doc = "Legal document is required";
    if (!formData.country) tempErrors.country = "Country is required";
    if (!formData.phone_number)
      tempErrors.phone_number = "Phone number is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      try {
        const response = await allApiNotAuth.post("/auth/register-ngo/", data);
        console.log("Login successful:", response.data);
        window.location.replace("/login");
        toast.success("Register Successfully Redirect to login");
      } catch (error) {
        toast.error(error?.response?.data?.error);
        console.error("Login error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-4 text-sm font-Poppins">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        >
          <h2 className="text-2xl mb-4 text-center font-bold  ">NGO Signup</h2>
          <div className="grid grid-cols-2 gap-x-5">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.first_name ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs italic">
                  {errors.first_name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="last_name"
              >
                First Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.last_name ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs italic">
                  {errors.last_name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.username ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs italic">{errors.username}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.email ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.password ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.location ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.location && (
                <p className="text-red-500 text-xs italic">{errors.location}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="capacity"
              >
                Capacity
              </label>
              <input
                type="text"
                name="capacity"
                id="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.capacity ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.capacity && (
                <p className="text-red-500 text-xs italic">{errors.capacity}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="legal_doc"
              >
                Legal Document
              </label>
              <input
                type="text"
                name="legal_doc"
                id="legal_doc"
                value={formData.legal_doc}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.legal_doc ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.legal_doc && (
                <p className="text-red-500 text-xs italic">
                  {errors.legal_doc}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.country ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.country && (
                <p className="text-red-500 text-xs italic">{errors.country}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className={`shadow appearance-none border ${
                  errors.phone_number ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.phone_number && (
                <p className="text-red-500 text-xs italic">
                  {errors.phone_number}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 text-center flex items-center gap-5 text-sm">
            <button
              className="bg-yellow-500 text-white px-6 py-1 rounded"
              type="submit"
            >
              Save
            </button>
            <NavLink
              to="/register"
              className="bg-gray-700 text-white px-6 py-1 rounded"
            >
              Cancel
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
