import React from "react";
import { RiEdit2Line } from "react-icons/ri";

const UserDetail = ({ user }) => {
  console.log(user, "jjj");
  const handleEdit = (item) => {
    console.log("Edit item with id:", item);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="max-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold mb-2">
              {user?.actor_profile?.username}
            </h2>
            <button
              onClick={() => handleEdit(user)}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
              title="Edit"
            >
              <RiEdit2Line />
            </button>
          </div>

          <p className="text-gray-600">Email: {user?.actor_profile?.email}</p>
          <p className="text-gray-600">
            Location: {user?.actor_profile?.location}
          </p>
          <p className="text-gray-600">
            Phone Number: {user?.actor_profile?.phone_number}
          </p>
          <p className="text-gray-600">
            User Type: {user?.actor_profile?.user_type}
          </p>
          <hr className="my-4" />
          <h3 className="text-xl font-bold mb-2">Profile Information</h3>
          <p className="text-gray-600">Age: {user?.profile.age}</p>
          <p className="text-gray-600">Gender: {user?.profile.gender}</p>
          <p className="text-gray-600">
            Education Level: {user?.profile.education_level}
          </p>
          <p className="text-gray-600">
            Language Spoken: {user?.profile.language_spoken}
          </p>
          <p className="text-gray-600">
            Place of Origin: {user?.profile.place_of_origin}
          </p>
          <p className="text-gray-600">
            Previous Assistance Received:{" "}
            {user?.profile.previous_assistance_received}
          </p>
          <hr className="my-4" />
          <h3 className="text-xl font-bold mb-2">Economic Information</h3>
          <p className="text-gray-600">
            Economic Status: {user?.profile.economic_status}
          </p>
          <p className="text-gray-600">
            Household Composition: {user?.profile.household_composition}
          </p>
          {/* Add more economic information here */}
          <hr className="my-4" />
          <h3 className="text-xl font-bold mb-2">Other Information</h3>
          <p className="text-gray-600">
            Health Status: {user?.profile.health_status}
          </p>
          <p className="text-gray-600">
            Documentation Status: {user?.profile.documentation_status}
          </p>
          <p className="text-gray-600">
            Protection Concerns: {user?.profile.protection_concerns}
          </p>
          <p className="text-gray-600">
            Vulnerability Status: {user?.profile.vulnerability_status}
          </p>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
