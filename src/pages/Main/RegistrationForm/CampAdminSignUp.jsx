import { useState } from "react";
import IDPConfirmModal from "./Modal/IDPConfirmModal";
import { NavLink } from "react-router-dom";
import { allApiNotAuth } from "../../../api/endPoint";
import { toast } from "react-toast";

export default function CampAdminSignUp() {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    name: "",
    location: "",
    capacity: "",
    current_population: "",
    demographic_info: "",
    shelter_type: "",
    economic_activities: "",
    health_education_info: "",
    status: "",
    phone_number: "",
    user_type: "Camp Admin",
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
    if (!formValues.name) tempErrors.name = "Camp name is required.";
    if (!formValues.location) tempErrors.location = "Location is required.";
    if (!formValues.capacity) tempErrors.capacity = "Capacity is required.";
    if (!formValues.current_population)
      tempErrors.current_population = "Current population is required.";
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
          "/auth/register_camp/",
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
      <div className="min-h-screen flex items-center justify-center bg-blue-500 text-xs">
        <div className="bg-zinc-200 p-8 rounded-lg shadow-lg w-full max-w-2xl my-8">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            Camp Admin Sign up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-black mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={formValues.username}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs">{errors.username}</p>
                )}
              </div>
              <div>
                <label className="block text-black mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formValues.password}
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
                  type="text"
                  value={formValues.firstname}
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
                  type="text"
                  value={formValues.lastname}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-xs">{errors.lastname}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="name">
                Camp Name
              </label>
              <input
                id="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                type="text"
                value={formValues.location}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.location && (
                <p className="text-red-500 text-xs">{errors.location}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-black mb-2" htmlFor="capacity">
                  Capacity
                </label>
                <input
                  id="capacity"
                  type="number"
                  value={formValues.capacity}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.capacity && (
                  <p className="text-red-500 text-xs">{errors.capacity}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-black mb-2"
                  htmlFor="current_population"
                >
                  Current Population
                </label>
                <input
                  id="current_population"
                  type="number"
                  value={formValues.current_population}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white text-black"
                />
                {errors.current_population && (
                  <p className="text-red-500 text-xs">
                    {errors.current_population}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-black mb-2"
                htmlFor="demographic_info"
              >
                Demographic Info
              </label>
              <textarea
                id="demographic_info"
                value={formValues.demographic_info}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="shelter_type">
                Shelter Type
              </label>
              <input
                id="shelter_type"
                type="text"
                value={formValues.shelter_type}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black mb-2"
                htmlFor="economic_activities"
              >
                Economic Activities
              </label>
              <textarea
                id="economic_activities"
                value={formValues.economic_activities}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black mb-2"
                htmlFor="health_education_info"
              >
                Health and Education Info
              </label>
              <textarea
                id="health_education_info"
                value={formValues.health_education_info}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="status">
                Status
              </label>
              <input
                id="status"
                type="text"
                value={formValues.status}
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
                type="tel"
                value={formValues.phone_number}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.phone_number && (
                <p className="text-red-500 text-xs">{errors.phone_number}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="user_type">
                User Type
              </label>
              <input
                id="user_type"
                type="text"
                value="Camp Admin"
                readOnly
                className="w-full p-2 rounded bg-gray-200 text-black"
              />
            </div>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded"
              type="submit"
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
