import { useState } from "react";
import { NavLink } from "react-router-dom";
import { allApiNotAuth } from "../../../api/endPoint";
import { toast } from "react-toast";

export default function VolunteerSignUp() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    location: "",
    phone_number: "",
    user_type: "Volunteer",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.username) tempErrors.username = "Username is required.";
    if (!formValues.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formValues.password) tempErrors.password = "Password is required.";
    if (!formValues.firstname) tempErrors.firstname = "First name is required.";
    if (!formValues.lastname) tempErrors.lastname = "Last name is required.";
    if (!formValues.location) tempErrors.location = "Location is required.";
    if (!formValues.phone_number)
      tempErrors.phone_number = "Phone number is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      Object.keys(formValues).forEach((key) => {
        formData.append(key, formValues[key]);
      });
      try {
        const response = await allApiNotAuth.post(
          "/auth/register_volunteer/",
          formData
        );
        console.log("Login successful:", response.data);
        window.location.replace("/login");
        toast.success("Register Successfully Redirect to login");
      } catch (error) {
        toast.error(error?.response?.data?.error);
        console.error("Login error:", error);
      }
      // Handle form submission logic, e.g., sending formData to a server
      console.log("Form data submitted");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-4 text-sm font-Poppins">
      <div className="w-full max-w-2xl">
        <form
          className="bg-zinc-200 p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            Volunteer Sign up
          </h2>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="firstname"
              type="text"
              value={formValues.firstname}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
            {errors.firstname && (
              <p className="text-red-500 text-xs">{errors.firstname}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="lastname"
              type="text"
              value={formValues.lastname}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            {errors.lastname && (
              <p className="text-red-500 text-xs">{errors.lastname}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="username"
              type="text"
              value={formValues.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="location"
              type="text"
              value={formValues.location}
              onChange={handleChange}
              placeholder="Enter your location"
            />
            {errors.location && (
              <p className="text-red-500 text-xs">{errors.location}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="phone_number"
            >
              Phone Number
            </label>
            <input
              className="w-full p-2 text-zinc-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="phone_number"
              type="tel"
              value={formValues.phone_number}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-xs">{errors.phone_number}</p>
            )}
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
}
