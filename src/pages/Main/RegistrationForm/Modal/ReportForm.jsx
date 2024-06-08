import React, { useState, useEffect } from "react";
import { toast } from "react-toast";
import { allApi } from "../../../../api/endPoint";

const ReportForm = ({ HandleCancel, user, campAdmin, existingComplaint }) => {
  const [formData, setFormData] = useState({
    reported_to: existingComplaint?.reported_to || "",
    description: existingComplaint?.description || "",
    reported_by: user?.actor_profile?.user_id,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (existingComplaint) {
      setFormData({
        reported_to: existingComplaint.reported_to,
        description: existingComplaint.description,
        reported_by: existingComplaint.reported_by,
      });
    }
  }, [existingComplaint]);

  const validate = () => {
    const errors = {};
    if (!formData.reported_to) errors.reported_to = "User is required";
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
      data.append("reported_by", formData.reported_by);
      data.append("reported_to", formData.reported_to);
      data.append("description", formData.description);

      try {
        let response;
        if (existingComplaint) {
          response = await allApi.put(
            `/app/reports/${existingComplaint.id}/update/`,
            data
          );
          toast.success("Complaint updated successfully");
        } else {
          response = await allApi.post("/app/reports/", data);
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50 text-xs overflow-auto h-screen">
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Report Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="reported_to"
              className="block text-sm font-medium text-gray-700"
            >
              Report To
            </label>
            <select
              id="reported_to"
              name="reported_to"
              value={formData.reported_to}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
                errors.reported_to ? "border-red-500" : "border-gray-300"
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
            {errors.reported_to && (
              <p className="text-red-500 text-sm mt-1">{errors.reported_to}</p>
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

export default ReportForm;
