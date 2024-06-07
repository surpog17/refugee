// src/components/ProfilePage.js

import React, { useEffect, useState } from "react";
import { allApi } from "../../../api/endPoint";
import Loading from "../../../components/Main/Loading";

const Index = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get("/auth/profile/");
        console.log(response?.data, "Firm Overview Page");
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
            {data?.profileImageUrl ? (
              <img
                src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
                alt="Profile Picture"
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
              />
            ) : (
              <div className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6 bg-yellow-500 text-white capitalize text-2xl flex justify-center items-center">
                {data?.actor_profile?.username[0]}
              </div>
            )}
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex flex-col">
                  <span className="font-semibold">Full Name</span>
                  <span>{data?.actor_profile?.username}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Phone Number</span>
                  <span>{data?.actor_profile?.phone_number}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Email address</span>
                  <span>{data?.actor_profile?.email}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">State</span>
                  <span>{data?.profile?.place_of_origin}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Address</span>
                  <span>{data?.actor_profile?.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Gender</span>
                  <span>{data?.profile?.gender}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Language Spoken</span>
                  <p>{data?.profile?.language_spoken}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
