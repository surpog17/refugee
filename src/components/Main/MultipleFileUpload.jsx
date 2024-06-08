// src/MultipleFileUpload.js
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toast";
import { allApi } from "../../api/endPoint";

const MultipleFileUpload = ({ cancel, story_id }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await allApi.post(
        `/app/stories/${story_id}/images/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Story successful:", response.data);
      toast.success("Story Posted Successfully");
      window.location.reload(true);
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.error("Login error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50 text-xs overflow-auto h-screen">
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Story Image</h2>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <input type="file" multiple onChange={handleFileChange} />
          <div className="mb-4 flex justify-start gap-5">
            <button
              className="w-32 p-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
              type="submit"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
            <button
              onClick={() => cancel(false)}
              className="w-32 p-2 bg-zinc-600 text-white rounded-md shadow-md hover:bg-zinc-700"
            >
              Cancel
            </button>
          </div>
        </form>
        {/* <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default MultipleFileUpload;
