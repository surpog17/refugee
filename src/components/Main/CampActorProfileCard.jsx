import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ActorProfileCard = ({ actorProfile, profile }) => {
  return (
    <div className="max-w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <FaUser className="text-gray-600 mr-2" />
              {actorProfile.username}
            </h2>
            <p className="text-gray-600 text-sm flex items-center">
              <FaEnvelope className="text-gray-600 mr-2" />
              {actorProfile.email}
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              <FaPhone className="text-gray-600 mr-2" />
              {actorProfile.phone_number}
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              <FaMapMarkerAlt className="text-gray-600 mr-2" />
              {actorProfile.location}
            </p>
          </div>
        </div>
        {profile.map((camp, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">{camp.name}</h3>
            <p className="text-gray-700">
              Capacity:{" "}
              <span className="text-md font-bold"> {camp.capacity}</span>{" "}
            </p>
            <p className="text-gray-700">
              Current Population:{" "}
              <span className="text-md font-bold">
                {camp.current_population}
              </span>
            </p>
            <p className="text-gray-700">
              Demographic Info:{" "}
              <span className="text-md font-bold">{camp.demographic_info}</span>
            </p>
            <p className="text-gray-700">
              Economic Activities:{" "}
              <span className="text-md font-bold">
                {camp.economic_activities}
              </span>
            </p>
            <p className="text-gray-700">
              Health Education Info:{" "}
              <span className="text-md font-bold">
                {camp.health_education_info}
              </span>
            </p>
            <p className="text-gray-700">
              Location:{" "}
              <span className="text-md font-bold">{camp.location}</span>
            </p>
            <p className="text-gray-700">
              Shelter Type:{" "}
              <span className="text-md font-bold">{camp.shelter_type}</span>{" "}
            </p>
            <p className="text-gray-700">
              Status: <span className="text-md font-bold">{camp.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorProfileCard;
