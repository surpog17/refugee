import React, { useEffect, useState } from "react";
import CardLayout from "../../../components/Main/CardLayout";
import { NavLink } from "react-router-dom";
import { allApi } from "../../../api/endPoint";
import { toast } from "react-toast";
import NoRecordsFound from "../../../components/Main/NoRecorde";

export default function Refugee() {
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
  const filterUsers = data?.filter((items) => items);
  const handleSubmit = async (id, isActive) => {
    try {
      const response = await allApi.get(
        isActive == false
          ? `/auth/activate-user/${id}/`
          : `/auth/deactivate-user/${id}/`
      );
      console.log("Login successful:", response.data);
      toast.success(
        isActive == false
          ? "User Activated Successfully"
          : "User Deactivated Successfully"
      );
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.error("Login error:", error);
    }
  };
  return (
    <div className="mt-10">
      {/* <NavLink
        to="/registerrefugee"
        className="px-4 py-2 bg-blue-500  text-white rounded-lg mt-10 ml-12"
      >
        Create Refugee
      </NavLink> */}
      {filterUsers?.length != 0 ? (
        <div className="grid  grid-cols-1 md:grid-cols-4 mb-5 gap-4">
          {filterUsers?.map((items) => (
            <CardLayout
              firstname={items?.first_name}
              lastname={items?.last_name}
              image={items?.profile_image}
              location={items?.actor_profile?.location}
              to={`IDP/${items?.id}`}
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
