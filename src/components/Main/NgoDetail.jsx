import React from "react";

const NgoDetailComponent = ({ user }) => {
  console.log(user, "jjj");
  return (
    <div className="container mx-auto p-4">
      <div className="max-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">
            {user?.actor_profile?.username}
          </h2>
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
          <h3 className="text-xl font-bold mb-2">NGO Information</h3>
          <p className="text-gray-600">Capacity: {user?.profile[0].capacity}</p>

          <p className="text-gray-600">Country: {user?.profile[0].country}</p>
          <p className="text-gray-600">
            Legal Document: {user?.profile[0].legal_doc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NgoDetailComponent;
