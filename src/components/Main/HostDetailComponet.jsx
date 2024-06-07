import React from "react";

const HostDetailComponent = ({ user }) => {
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
          <h3 className="text-xl font-bold mb-2">Host Information</h3>
          <p className="text-gray-600">Capacity: {user?.profile[0].capacity}</p>
          <p className="text-gray-600">
            Economic Status: {user?.profile[0].economic_status}
          </p>
          <p className="text-gray-600">
            Hosting Experience: {user?.profile[0].hosting_experience}
          </p>
          <p className="text-gray-600">Language: {user?.profile[0].language}</p>
          <p className="text-gray-600">
            Legal Document Id: {user?.profile[0].legal_doc_id}
          </p>
          <p className="text-gray-600">
            Preference: {user?.profile[0].preference}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostDetailComponent;
