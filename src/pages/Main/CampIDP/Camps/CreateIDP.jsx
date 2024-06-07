import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toast";
import { allApiNotAuth } from "../../../../api/endPoint";

export default function CreateIDP({ setModal, data }) {
  console.log(data, "***");
  const [formData, setFormData] = useState({
    username: data?.username,
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    location: "",
    phone_number: "",
    place_of_origin: "",
    contact_information: "",
    household_composition: "",
    vulnerability_status: "",
    health_status: "",
    documentation_status: "",
    education_level: "",
    language_spoken: "",
    previous_assistance_received: "",
    protection_concerns: "",
    economic_status: "",
    is_verified: false,
    age: "",
    gender: "",
    user_type: "IDP",
  });
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
          data ? `/accountmgt/idps/${data?.id}` : "/auth/register_idp/",
          formData
        );
        console.log("Register successful:", response.data);
        toast.success("Registered Successfully");
        setModal(false);
      } catch (error) {
        toast.error(error?.response?.data?.error);
        console.error("Register error:", error);
      }
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Validate each field
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    }
    if (!data.firstname.trim()) {
      errors.firstname = "First name is required";
    }
    if (!data.lastname.trim()) {
      errors.lastname = "Last name is required";
    }
    if (!data.location.trim()) {
      errors.location = "Location is required";
    }
    if (!data.phone_number.trim()) {
      errors.phone_number = "Phone number is required";
    }
    if (!data.place_of_origin.trim()) {
      errors.place_of_origin = "Place of origin is required";
    }
    if (!data.contact_information.trim()) {
      errors.contact_information = "Contact information is required";
    }
    if (!data.household_composition) {
      errors.household_composition = "Household composition is required";
    }
    if (!data.vulnerability_status.trim()) {
      errors.vulnerability_status = "Vulnerability status is required";
    }
    if (!data.health_status.trim()) {
      errors.health_status = "Health status is required";
    }
    if (!data.documentation_status.trim()) {
      errors.documentation_status = "Documentation status is required";
    }
    if (!data.education_level.trim()) {
      errors.education_level = "Education level is required";
    }
    if (!data.language_spoken.trim()) {
      errors.language_spoken = "Language spoken is required";
    }
    if (!data.previous_assistance_received.trim()) {
      errors.previous_assistance_received =
        "Previous assistance received is required";
    }
    if (!data.protection_concerns.trim()) {
      errors.protection_concerns = "Protection concerns are required";
    }
    if (!data.economic_status.trim()) {
      errors.economic_status = "Economic status is required";
    }
    if (!data.age) {
      errors.age = "Age is required";
    }
    if (!data.gender.trim()) {
      errors.gender = "Gender is required";
    }

    return errors;
  };

  return (
    <div class="fixed left-0 right-0 top-0 bottom-0 z-20 pb-96 bg-[#0f3a62cc] flex items-center overflow-y-scroll scrollbar-hide justify-center">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-center justify-between p-4 md:p-2 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {data ? "Edit IDP" : " Add IDP"}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div class="p-4 md:p-5 space-y-4">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-black mb-2" htmlFor="username">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      readOnly={data ? true : false}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.username && (
                      <p className="text-red-500">{errors.username}</p>
                    )}
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
                      readOnly={data ? true : false}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-black mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.firstname && (
                      <p className="text-red-500">{errors.firstname}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-black mb-2" htmlFor="lastname">
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.lastname && (
                      <p className="text-red-500">{errors.lastname}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-black mb-2" htmlFor="location">
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.location && (
                      <p className="text-red-500">{errors.location}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
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
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.phone_number && (
                      <p className="text-red-500">{errors.phone_number}</p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="place_of_origin"
                    >
                      Place of Origin
                    </label>
                    <input
                      id="place_of_origin"
                      type="text"
                      name="place_of_origin"
                      value={formData.place_of_origin}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.place_of_origin && (
                      <p className="text-red-500">{errors.place_of_origin}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="contact_information"
                    >
                      Contact Information
                    </label>
                    <input
                      id="contact_information"
                      type="text"
                      name="contact_information"
                      value={formData.contact_information}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.contact_information && (
                      <p className="text-red-500">
                        {errors.contact_information}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="household_composition"
                    >
                      Household Composition
                    </label>
                    <input
                      id="household_composition"
                      type="number"
                      name="household_composition"
                      value={formData.household_composition}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.household_composition && (
                      <p className="text-red-500">
                        {errors.household_composition}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="vulnerability_status"
                    >
                      Vulnerability Status
                    </label>
                    <input
                      id="vulnerability_status"
                      type="text"
                      name="vulnerability_status"
                      value={formData.vulnerability_status}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.vulnerability_status && (
                      <p className="text-red-500">
                        {errors.vulnerability_status}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="health_status"
                    >
                      Health Status
                    </label>
                    <input
                      id="health_status"
                      type="text"
                      name="health_status"
                      value={formData.health_status}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.health_status && (
                      <p className="text-red-500">{errors.health_status}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="documentation_status"
                    >
                      Documentation Status
                    </label>
                    <input
                      id="documentation_status"
                      type="text"
                      name="documentation_status"
                      value={formData.documentation_status}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.documentation_status && (
                      <p className="text-red-500">
                        {errors.documentation_status}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="education_level"
                    >
                      Education Level
                    </label>
                    <input
                      id="education_level"
                      type="text"
                      name="education_level"
                      value={formData.education_level}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.education_level && (
                      <p className="text-red-500">{errors.education_level}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="language_spoken"
                    >
                      Language Spoken
                    </label>
                    <input
                      id="language_spoken"
                      type="text"
                      name="language_spoken"
                      value={formData.language_spoken}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.language_spoken && (
                      <p className="text-red-500">{errors.language_spoken}</p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="previous_assistance_received"
                    >
                      Previous Assistance Received
                    </label>
                    <input
                      id="previous_assistance_received"
                      type="text"
                      name="previous_assistance_received"
                      value={formData.previous_assistance_received}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.previous_assistance_received && (
                      <p className="text-red-500">
                        {errors.previous_assistance_received}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="protection_concerns"
                    >
                      Protection Concerns
                    </label>
                    <input
                      id="protection_concerns"
                      type="text"
                      name="protection_concerns"
                      value={formData.protection_concerns}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.protection_concerns && (
                      <p className="text-red-500">
                        {errors.protection_concerns}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-black mb-2"
                      htmlFor="economic_status"
                    >
                      Economic Status
                    </label>
                    <input
                      id="economic_status"
                      type="text"
                      name="economic_status"
                      value={formData.economic_status}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.economic_status && (
                      <p className="text-red-500">{errors.economic_status}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-black mb-2" htmlFor="age">
                      Age
                    </label>
                    <input
                      id="age"
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.age && <p className="text-red-500">{errors.age}</p>}
                  </div>
                  <div>
                    <label className="block text-black mb-2" htmlFor="gender">
                      Gender
                    </label>
                    <input
                      id="gender"
                      type="text"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-zinc-200 text-black"
                    />
                    {errors.gender && (
                      <p className="text-red-500">{errors.gender}</p>
                    )}
                  </div>
                </div>
              </div>
              <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="bg-yellow-500 text-black py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setModal(false)}
                  className="bg-blue-600 text-white py-2 px-4 rounded ml-4"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
