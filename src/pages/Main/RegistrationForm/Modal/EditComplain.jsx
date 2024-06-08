import React, { useState, useEffect } from "react";
import { toast } from "react-toast";
import { allApi } from "../../../../api/endPoint";

const ComplaintForm = ({
  HandleCancel,
  user,
  campAdmin,
  existingComplaint,
}) => {
  const [formData, setFormData] = useState({
    complained_to: existingComplaint?.complained_to || "",
    description: existingComplaint?.description || "",
    complained_by: user?.actor_profile?.user_id,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (existingComplaint) {
      setFormData({
        complained_to: existingComplaint.complained_to,
        description: existingComplaint.description,
        complained_by: existingComplaint.complained_by,
      });
    }
  }, [existingComplaint]);

  const validate = () => {
    const errors = {};
    if (!formData.complained_to) errors.complained_to = "User is required";
    if (!formData.description) errors.description = "Description is required";
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
      data.append("complained_by", formData.complained_by);
      data.append("complained_to", formData.complained_to);
      data.append("description", formData.description);

      try {
        let response;
        if (existingComplaint) {
          response = await allApi.put(
            `/app/complains/${existingComplaint.id}/`,
            data
          );
          toast.success("Complaint updated successfully");
        } else {
          response = await allApi.post("/app/complains/", data);
          toast.success("Complaint registered successfully");
        }
        console.log("Submission successful:", response.data);
        window.location.replace("/login");
      } catch (error) {
        toast.error(error?.response?.data?.error);
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50 text-xs overflow-auto h-screen">
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Complaint Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="complained_to"
              className="block text-sm font-medium text-gray-700"
            >
              Complained To (User ID)
            </label>
            <select
              id="complained_to"
              name="complained_to"
              value={formData.complained_to}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                errors.complained_to ? "border-red-500" : "border-gray-300"
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
            {errors.complained_to && (
              <p className="text-red-500 text-sm mt-1">
                {errors.complained_to}
              </p>
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

export default ComplaintForm;
