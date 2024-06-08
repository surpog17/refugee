import React, { useEffect, useState } from "react";
import ComplaintCard from "../../../../components/Main/ComplainCard";
import { allApi } from "../../../../api/endPoint";
import NoRecordsFound from "../../../../components/Main/NoRecorde";
import Loading from "../../../../components/Main/Loading";
import ComplaintForm from "../../RegistrationForm/Modal/ComplainForm";
import { toast } from "react-toast";

function Complain({ user, campAdmin }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(`/app/complains/all/`);
        console.log(response?.data, "***");
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  const complaints = data?.filter(
    (items) =>
      items?.complained_to?.username == user?.actor_profile?.username ||
      items?.complained_by?.username == user?.actor_profile?.username
  );
  const [create, setCreate] = useState(false);
  const [editData, setEditData] = useState(null);
  console.log(editData, "EEE");

  const toggleFormVisibility = (items) => {
    setCreate(!create);
  };
  const toggleFormVisibilityEdit = (items) => {
    setCreate(!create);
    setEditData(items);
  };
  const handleSubmitDelete = async (e, id) => {
    e.preventDefault();

    try {
      const response = await allApi.delete(`/app/complains/${id}/delete/`);
      toast.success("Complain Deleted  Successfully ");
      window.location.reload(true);
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.error("Login error:", error);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 px-10">
          {user?.actor_profile?.user_type !== "Camp Admin" && (
            <button
              onClick={toggleFormVisibility}
              className="mb-4 p-2 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700"
            >
              Create Complaint
            </button>
          )}
          {complaints?.length != 0 ? (
            <main className=" grid grid-cols-2 gap-5">
              {complaints?.map((complaint) => (
                <ComplaintCard
                  toggleFormVisibilityEdit={toggleFormVisibilityEdit}
                  handleSubmitDelete={handleSubmitDelete}
                  key={complaint.id}
                  complaint={complaint}
                  user={user}
                />
              ))}
            </main>
          ) : (
            <NoRecordsFound />
          )}
          {create && (
            <ComplaintForm
              campAdmin={campAdmin}
              user={user}
              HandleCancel={toggleFormVisibility}
              existingComplaint={editData}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Complain;
