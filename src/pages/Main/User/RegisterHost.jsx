// src/components/RegisterHost.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const RegisterHost = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    capacity: 0,
    preference: "",
    language: "",
    hosting_experience: "",
    location: "",
    contact_info: "",
    legal_doc_id: "",
    economic_status: "",
    phone_number: "",
    user_type: "Host",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <NavLink
          to="/hosts"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-10 text-center"
        >
          Back
        </NavLink>
        <h2 className="text-2xl font-bold text-center mb-6">Create Host</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="capacity">
                Capacity
              </label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                placeholder="Capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="preference">
                Preference
              </label>
              <input
                type="text"
                id="preference"
                name="preference"
                placeholder="Preference"
                value={formData.preference}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="language">
                Language
              </label>
              <input
                type="text"
                id="language"
                name="language"
                placeholder="Language"
                value={formData.language}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="hosting_experience"
              >
                Hosting Experience
              </label>
              <input
                type="text"
                id="hosting_experience"
                name="hosting_experience"
                placeholder="Hosting Experience"
                value={formData.hosting_experience}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="contact_info"
              >
                Contact Info
              </label>
              <input
                type="text"
                id="contact_info"
                name="contact_info"
                placeholder="Contact Info"
                value={formData.contact_info}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="legal_doc_id"
              >
                Legal Document ID
              </label>
              <input
                type="text"
                id="legal_doc_id"
                name="legal_doc_id"
                placeholder="Legal Document ID"
                value={formData.legal_doc_id}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="economic_status"
              >
                Economic Status
              </label>
              <input
                type="text"
                id="economic_status"
                name="economic_status"
                placeholder="Economic Status"
                value={formData.economic_status}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="user_type">
                User Type
              </label>
              <select
                id="user_type"
                name="user_type"
                value={formData.user_type}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Host">Host</option>
                <option value="Refugee">Refugee</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-6">
            <NavLink
              to="/refugees"
              className="w-32 p-3 bg-gray-300  rounded-md hover:bg-gray-500 hover:text-white text-center"
            >
              Cancel
            </NavLink>
            <button
              type="submit"
              className="w-56 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterHost;
