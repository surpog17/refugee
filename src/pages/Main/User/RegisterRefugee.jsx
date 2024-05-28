// src/components/RegisterRefugee.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const RegisterRefugee = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    location: "",
    phone_number: "",
    place_of_origin: "",
    contact_information: "",
    household_composition: 0,
    vulnerability_status: "",
    health_status: "",
    documentation_status: "",
    education_level: "",
    language_spoken: "",
    previous_assistance_received: "",
    protection_concerns: "",
    economic_status: "",
    is_verified: false,
    age: 0,
    gender: "Male",
    user_type: "IDP",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <a
          href="/refugees"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-10"
        >
          Back
        </a>
        <h2 className="text-2xl font-bold text-center mb-6">Create Refugee</h2>
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
              <label
                className="block mb-2 font-semibold"
                htmlFor="place_of_origin"
              >
                Place of Origin
              </label>
              <input
                type="text"
                id="place_of_origin"
                name="place_of_origin"
                placeholder="Place of Origin"
                value={formData.place_of_origin}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="contact_information"
              >
                Contact Information
              </label>
              <input
                type="text"
                id="contact_information"
                name="contact_information"
                placeholder="Contact Information"
                value={formData.contact_information}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="household_composition"
              >
                Household Composition
              </label>
              <input
                type="number"
                id="household_composition"
                name="household_composition"
                placeholder="Household Composition"
                value={formData.household_composition}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="vulnerability_status"
              >
                Vulnerability Status
              </label>
              <input
                type="text"
                id="vulnerability_status"
                name="vulnerability_status"
                placeholder="Vulnerability Status"
                value={formData.vulnerability_status}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="health_status"
              >
                Health Status
              </label>
              <input
                type="text"
                id="health_status"
                name="health_status"
                placeholder="Health Status"
                value={formData.health_status}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="documentation_status"
              >
                Documentation Status
              </label>
              <input
                type="text"
                id="documentation_status"
                name="documentation_status"
                placeholder="Documentation Status"
                value={formData.documentation_status}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="education_level"
              >
                Education Level
              </label>
              <input
                type="text"
                id="education_level"
                name="education_level"
                placeholder="Education Level"
                value={formData.education_level}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="language_spoken"
              >
                Language Spoken
              </label>
              <input
                type="text"
                id="language_spoken"
                name="language_spoken"
                placeholder="Language Spoken"
                value={formData.language_spoken}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="previous_assistance_received"
              >
                Previous Assistance Received
              </label>
              <input
                type="text"
                id="previous_assistance_received"
                name="previous_assistance_received"
                placeholder="Previous Assistance Received"
                value={formData.previous_assistance_received}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-semibold"
                htmlFor="protection_concerns"
              >
                Protection Concerns
              </label>
              <input
                type="text"
                id="protection_concerns"
                name="protection_concerns"
                placeholder="Protection Concerns"
                value={formData.protection_concerns}
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
              <label className="block mb-2 font-semibold" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
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
                <option value="IDP">IDP</option>
                <option value="Refugee">Refugee</option>
                <option value="Host">Host</option>
                <option value="NGO">NGO</option>
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
              className="w-64 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterRefugee;
