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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.firstname) errors.firstname = "First Name is required";
    if (!formData.lastname) errors.lastname = "Last Name is required";
    if (!formData.capacity) errors.capacity = "Capacity is required";
    else if (formData.capacity <= 0)
      errors.capacity = "Capacity must be a positive number";
    if (!formData.preference) errors.preference = "Preference is required";
    if (!formData.language) errors.language = "Language is required";
    if (!formData.hosting_experience)
      errors.hosting_experience = "Hosting Experience is required";
    if (!formData.location) errors.location = "Location is required";
    if (!formData.contact_info)
      errors.contact_info = "Contact Info is required";
    if (!formData.legal_doc_id)
      errors.legal_doc_id = "Legal Document ID is required";
    if (!formData.economic_status)
      errors.economic_status = "Economic Status is required";
    if (!formData.phone_number)
      errors.phone_number = "Phone Number is required";
    else if (!/^\d+$/.test(formData.phone_number))
      errors.phone_number = "Phone Number is invalid";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
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
            {[
              { label: "Username", name: "username", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Password", name: "password", type: "password" },
              { label: "First Name", name: "firstname", type: "text" },
              { label: "Last Name", name: "lastname", type: "text" },
              { label: "Capacity", name: "capacity", type: "number" },
              { label: "Preference", name: "preference", type: "text" },
              { label: "Language", name: "language", type: "text" },
              {
                label: "Hosting Experience",
                name: "hosting_experience",
                type: "text",
              },
              { label: "Location", name: "location", type: "text" },
              { label: "Contact Info", name: "contact_info", type: "text" },
              {
                label: "Legal Document ID",
                name: "legal_doc_id",
                type: "text",
              },
              {
                label: "Economic Status",
                name: "economic_status",
                type: "text",
              },
              { label: "Phone Number", name: "phone_number", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label
                  className="block mb-2 font-semibold"
                  htmlFor={field.name}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}
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
              className="w-32 p-3 bg-gray-300 rounded-md hover:bg-gray-500 hover:text-white text-center"
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
