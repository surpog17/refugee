import React, { useEffect, useState } from "react";
import CardLayout from "../../../components/Main/CardLayout";
import { allApi, allApiNotAuth } from "../../../api/endPoint";
import { toast } from "react-toast";
import NoRecordsFound from "../../../components/Main/NoRecorde";

export default function Index() {
  const [user, setUser] = useState("IDP");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(
          `/app/search-users/?phone_number=&first_name&last_name&email&user_type=${user}`
        );
        console.log(response?.data, "***");
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [user]);
  const filterUsers = data?.filter((items) => items);
  const handleSubmit = async (id, isActive) => {
    try {
      const response = await allApi.get(
        isActive == false
          ? `/auth/activate-user/${id}/`
          : `/auth/deactivate-user/${id}/`
      );
      console.log("Login successful:", response.data);
      toast.success("User Activated Successfully Redirect to login");
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.error("Login error:", error);
    }
  };
  return (
    <div>
      <div className="flex justify-around bg-white p-4 rounded-lg shadow-md m-4">
        <button
          onClick={() => setUser("IDP")}
          className={
            user == "IDP"
              ? "px-4 py-2 bg-blue-500 text-white rounded-lg"
              : "px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200"
          }
        >
          IDPs
        </button>
        <button
          onClick={() => setUser("Host")}
          className={
            user == "Host"
              ? "px-4 py-2 bg-blue-500 text-white rounded-lg"
              : "px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200"
          }
        >
          Hosts
        </button>
        <button
          onClick={() => setUser("Camp Admin")}
          className={
            user == "Camp Admin"
              ? "px-4 py-2 bg-blue-500 text-white rounded-lg"
              : "px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200"
          }
        >
          Camps
        </button>
        <button
          onClick={() => setUser("NGO")}
          className={
            user == "NGO"
              ? "px-4 py-2 bg-blue-500 text-white rounded-lg"
              : "px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200"
          }
        >
          NGO's
        </button>
      </div>
      {filterUsers?.length != 0 ? (
        <div className="grid  grid-cols-1 md:grid-cols-4 mb-5 gap-4">
          {filterUsers?.map((items) => (
            <CardLayout
              firstname={items?.first_name}
              lastname={items?.last_name}
              image={items?.profile_image}
              location={items?.actor_profile?.location}
              to={`${user}/${items?.id}`}
              action={() => handleSubmit(items?.id, items?.is_active)}
              isActive={items?.is_active}
            />
          ))}
        </div>
      ) : (
        <NoRecordsFound />
      )}
    </div>
  );
}
