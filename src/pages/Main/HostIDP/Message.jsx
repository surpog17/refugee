// src/Message.js
import React, { useEffect, useState } from "react";
import Loading from "../../../components/Main/Loading";
import { allApi } from "../../../api/endPoint";
import NoRecordsFound from "../../../components/Main/NoRecorde";

const messages = [
  "this is a message for",
  "what can i help you",
  "what can i help you",
  "what can i help you",
  "Aa...",
];

const Message = ({ user }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(
          `/app/search-users/?phone_number=&first_name&last_name&email&user_type=IDP`
        );
        console.log(response?.data, "***");
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  const [Messages, setMessage] = useState(null);
  const [isLoadingMessage, setLoadingMessage] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(`/app/messages/18/`);
        console.log(response?.data, "M***");
        setMessage(response?.data);
        setLoadingMessage(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  return (
    <div className="flex justify-center  min-h-screen bg-gray-100 py-10  px-10">
      <div className="flex bg-white shadow-lg rounded-lg w-full">
        {/* Left section */}
        <div className="w-1/2 p-4">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50" // Replace with the actual image URL
              alt="Alemu Kassahun"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-lg font-semibold">
              {user?.actor_profile?.username}
            </div>
          </div>
          {isLoadingMessage ? (
            <Loading />
          ) : (
            <div className="space-y-4">
              {Messages.map((message, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-2 rounded-md text-gray-700"
                >
                  {message}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Right section */}
        <div className="w-1/2 p-4 border-l border-gray-300">
          {isLoading ? (
            <Loading />
          ) : data?.length != 0 ? (
            <div className="space-y-4">
              {data.map((items, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {items?.profile_image ? (
                    <img
                      src="https://via.placeholder.com/50" // Replace with the actual image URL
                      alt="Alemu Kassahun"
                      className="w-12 h-12 rounded-full"
                    />
                  ) : (
                    <div
                      alt="Alemu Kassahun"
                      className="w-12 h-12 rounded-full bg-[#3ba3a4] flex justify-center items-center text-white     "
                    >
                      {items?.first_name[0] + "" + items?.last_name[0]}
                    </div>
                  )}
                  <div className="text-lg font-semibold">
                    {items?.first_name + " " + items?.last_name}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NoRecordsFound title="No Message Yet" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
