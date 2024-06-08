// src/ShareStoryForm.js
import React, { useState } from "react";
import { toast } from "react-toast";
import { allApi } from "../../api/endPoint";
import MultipleFileUpload from "./MultipleFileUpload";

const ShareStoryForm = () => {
  const [story_text, setStory] = useState("");
  const [error, setError] = useState("");
  const [uploadStory, setUploadStroy] = useState(false);
  const [story_id, setStory_id] = useState(null);

  const handleInputChange = (e) => {
    setStory(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (story_text.trim() === "") {
      setError("Story cannot be empty");
      return;
    }

    const formData = {
      story_text: story_text.trim(),
    };
    try {
      const response = await allApi.post("/app/stories/", formData);
      console.log("Story successful:", response.data);
      setStory_id(response?.data?.id);
      setUploadStroy(true);

      toast.success("Story Posted Successfully");
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.error("Login error:", error);
    }
    console.log("Form data submitted:", formData);
    setError("");
    setStory("");
  };

  return (
    <div className="flex  bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-lg w-3/5"
      >
        <img
          src="https://via.placeholder.com/50" // Replace with the actual image URL
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="w-full grid">
          <input
            type="text"
            placeholder="Share your story ..."
            value={story_text}
            onChange={handleInputChange}
            className="flex-grow p-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Share
        </button>
      </form>
      {uploadStory && (
        <MultipleFileUpload cancel={setUploadStroy} story_id={story_id} />
      )}
    </div>
  );
};

export default ShareStoryForm;
