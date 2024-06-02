import { useState } from "react";
import IDPConfirmModal from "./Modal/IDPConfirmModal";
import HostConfirm from "./Modal/HostConfirm";
import { NavLink } from "react-router-dom";
import { allApi, allApiNotAuth } from "../../../api/endPoint";
import { toast } from "react-toast";

export default function HostSignUp() {
  const [modal, setModal] = useState(false);
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
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.username = formData.username ? "" : "Username is required.";
    tempErrors.email = formData.email ? "" : "Email is required.";
    tempErrors.password = formData.password ? "" : "Password is required.";
    tempErrors.firstname = formData.firstname ? "" : "First name is required.";
    tempErrors.lastname = formData.lastname ? "" : "Last name is required.";
    tempErrors.capacity =
      formData.capacity > 0 ? "" : "Capacity must be greater than zero.";
    tempErrors.phone_number = formData.phone_number
      ? ""
      : "Phone number is required.";
    setErrors({ ...tempErrors });

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      try {
        const response = await allApiNotAuth.post(
          "/auth/register-host/",
          formData
        );
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
    <div>
      <div className="min-h-screen flex items-center justify-center bg-blue-500 text-sm">
        <div className="bg-zinc-200 p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            Host Sign up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.username && (
                <p className="text-red-500 text-xs">{errors.username}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-black mb-2" htmlFor="firstname">
                  First Name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-xs">{errors.firstname}</p>
                )}
              </div>
              <div>
                <label className="block text-black mb-2" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-xs">{errors.lastname}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="capacity">
                Capacity
              </label>
              <input
                id="capacity"
                name="capacity"
                type="number"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.capacity && (
                <p className="text-red-500 text-xs">{errors.capacity}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="preference">
                Preference
              </label>
              <input
                id="preference"
                name="preference"
                type="text"
                value={formData.preference}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="language">
                Language
              </label>
              <input
                id="language"
                name="language"
                type="text"
                value={formData.language}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black mb-2"
                htmlFor="hosting_experience"
              >
                Hosting Experience
              </label>
              <input
                id="hosting_experience"
                name="hosting_experience"
                type="text"
                value={formData.hosting_experience}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="contact_info">
                Contact Info
              </label>
              <input
                id="contact_info"
                name="contact_info"
                type="text"
                value={formData.contact_info}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="legal_doc_id">
                Legal Document ID
              </label>
              <input
                id="legal_doc_id"
                name="legal_doc_id"
                type="text"
                value={formData.legal_doc_id}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black mb-2"
                htmlFor="economic_status"
              >
                Economic Status
              </label>
              <input
                id="economic_status"
                name="economic_status"
                type="text"
                value={formData.economic_status}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="phone_number">
                Phone Number
              </label>
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.phone_number && (
                <p className="text-red-500 text-xs">{errors.phone_number}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded"
            >
              Sign Up
            </button>
            <NavLink
              to="/register"
              className="bg-zinc-400 text-white py-2 px-4 rounded ml-4"
            >
              Cancel
            </NavLink>
          </form>
          {modal && <HostConfirm setModal={setModal} />}
        </div>
      </div>
    </div>
  );
}
