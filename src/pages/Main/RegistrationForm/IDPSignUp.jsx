import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IDPConfirmModal from "./Modal/IDPConfirmModal";
import { allApiNotAuth } from "../../../api/endPoint";
import { toast } from "react-toast";

export default function IDPSignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [modal, setModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Handle form submission
      try {
        const response = await allApiNotAuth.post(
          "/auth/register_idppre/ ",
          formData
        );
        console.log("Login successful:", response.data);
        window.location.replace("/login");
        toast.success("Register Successfully Redirect to login");
      } catch (error) {
        toast.error(error?.response?.data?.error);
        console.error("Login error:", error);
      }
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Validate each field
    if (!data.first_name.trim()) {
      errors.first_name = "First name is required";
    }
    if (!data.last_name.trim()) {
      errors.last_name = "Last name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email  is required";
    }
    if (!data.password.trim()) {
      errors.password = "Password  is required";
    }
    if (!data.phone_number.trim()) {
      errors.phone_number = "phone number is required";
    }
    // Add validations for other fields similarly

    return errors;
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-blue-500 text-sm">
        <div className="bg-zinc-200 p-8 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            IDP Sign up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-black mb-2" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white text-black"
                  />
                  {errors.first_name && (
                    <p className="text-red-500">{errors.first_name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-black mb-2" htmlFor="last_name">
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white text-black"
                  />
                  {errors.last_name && (
                    <p className="text-red-500">{errors.last_name}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-black mb-2" htmlFor="email">
                    email
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white text-black"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-black mb-2"
                    htmlFor="phone_number"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone_number"
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white text-black"
                  />
                  {errors.phone_number && (
                    <p className="text-red-500">{errors.phone_number}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-black mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Add fields for middle name and last name similarly */}
            </div>
            {/* Add other form fields */}
            <button
              type="submit"
              className="bg-yellow-500 text-black py-2 px-4 rounded"
            >
              Save
            </button>
            <NavLink
              to="/register"
              className="bg-blue-600 text-white py-2 px-4 rounded ml-4"
            >
              Cancel
            </NavLink>
          </form>
        </div>
      </div>
      {modal && <IDPConfirmModal setModal={setModal} />}
    </div>
  );
}
