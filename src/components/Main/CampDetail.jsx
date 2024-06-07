import React from "react";

const CampDetailComponent = ({ user }) => {
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
          <h3 className="text-xl font-bold mb-2">Camp Information</h3>
          <p className="text-gray-600">Capacity: {user?.profile[0].capacity}</p>
          <p className="text-gray-600">
            Current Population: {user?.profile[0].current_population}
          </p>
          <p className="text-gray-600">
            Demographic Info: {user?.profile[0].demographic_info}
          </p>
          <p className="text-gray-600">
            Economic Activities: {user?.profile[0].economic_activities}
          </p>
          <p className="text-gray-600">
            Health Education Info: {user?.profile[0].health_education_info}
          </p>
          <p className="text-gray-600">
            Shelter Type: {user?.profile[0].shelter_type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampDetailComponent;
