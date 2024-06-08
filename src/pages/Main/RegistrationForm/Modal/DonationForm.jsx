import React, { useState, useEffect } from "react";
import { toast } from "react-toast";
import { allApi } from "../../../../api/endPoint";

const DonationForm = ({
  HandleCancel,
  user,
  campAdmin,
  existingComplaint,
  provided_to,
}) => {
  const [formData, setFormData] = useState({
    provided_to_id: provided_to
      ? provided_to
      : existingComplaint?.provided_to_id || "",
    description: existingComplaint?.description || "",
    quantity: existingComplaint?.quantity || "",
    resource_type: existingComplaint?.resource_type || "",
    name: existingComplaint?.name || "",
    provider_id: user?.actor_profile?.user_id,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (existingComplaint) {
      setFormData({
        provided_to_id: existingComplaint.provided_to_id,
        description: existingComplaint.description,
        resource_type: existingComplaint.resource_type,
        quantity: existingComplaint.quantity,
        name: existingComplaint.name,
        provider_id: existingComplaint.provider_id,
      });
    }
  }, [existingComplaint]);

  const validate = () => {
    const errors = {};
    if (!formData.provided_to_id) errors.provided_to_id = "User is required";
    if (!formData.description) errors.description = "Description is required";
    if (!formData.resource_type)
      errors.resource_type = "Resource Type is required";
    if (!formData.name) errors.name = "Resource Name is required";
    if (!formData.quantity) errors.quantity = "Quantity is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const data = new FormData();
      data.append("provider_id", formData.provider_id);
      data.append("provided_to_id", formData.provided_to_id);
      data.append("description", formData.description);
      data.append("resource_type", formData.resource_type);
      data.append("quantity", formData.quantity);
      data.append("name", formData.name);

      try {
        let response;
        if (existingComplaint) {
          response = await allApi.put(
            `/app/reports/${existingComplaint.id}/update/`,
            data
          );
          toast.success("Complaint updated successfully");
        } else {
          response = await allApi.post("/app/resources/", data);
          toast.success("Complaint registered successfully");
        }
        console.log("Submission successful:", response.data);
        window.location.reload(true);
      } catch (error) {
        toast.error(error?.response?.data?.error);
        console.error("Submission error:", error);
      }
    }
  };
  const donationTypes = [
    { id: 1, label: "Money" },
    { id: 2, label: "Clothes" },
    { id: 3, label: "Food" },
    { id: 4, label: "Toys" },
    { id: 5, label: "Books" },
    { id: 6, label: "Electronics" },
    { id: 7, label: "Furniture" },
  ];
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50 text-xs overflow-auto h-screen">
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Donation Form</h2>
        <form onSubmit={handleSubmit}>
          {!provided_to && (
            <div className="mb-4">
              <label
                htmlFor="provided_to_id"
                className="block text-sm font-medium text-gray-700"
              >
                Provide To
              </label>
              <select
                id="provided_to_id"
                name="provided_to_id"
                value={formData.provided_to_id}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                  errors.provided_to_id ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  Select User ID
                </option>
                {campAdmin?.map((items) => (
                  <option key={items.id} value={items.id}>
                    {items.first_name + " " + items.last_name}
                  </option>
                ))}
              </select>
              {errors.provided_to_id && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.provided_to_id}
                </p>
              )}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Resource Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="resource_type">Select Donation Type:</label>
            <select
              id="resource_type"
              name="resource_type"
              value={formData?.resource_type}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                errors.resource_type ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Select an resource type
              </option>
              {donationTypes.map((type) => (
                <option key={type.id} value={type.label}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.resource_type && (
              <p className="text-red-500 text-sm mt-1">
                {errors.resource_type}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                errors.quantity ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>
          <div className="mb-4 flex justify-start gap-5">
            <button
              type="submit"
              className="w-32 p-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={HandleCancel}
              className="w-32 p-2 bg-zinc-600 text-white rounded-md shadow-md hover:bg-zinc-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
