import React, { useEffect, useState } from "react";
import ReportCard from "../../../components/Main/Report";
import { allApi } from "../../../api/endPoint";
import Loading from "../../../components/Main/Loading";
import NoRecordsFound from "../../../components/Main/NoRecorde";
import { toast } from "react-toast";
import ReportForm from "../RegistrationForm/Modal/ReportForm";
import DonationCard from "../../../components/Main/DonationCard";
import DonationForm from "../RegistrationForm/Modal/DonationForm";

export default function Donations({ user, campAdmin }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [create, setCreate] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(`/app/resources/all/`);
        console.log(response?.data, "rEPO***");
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const donations = data?.filter(
    (item) =>
      item?.provided_to?.username === user?.actor_profile?.username ||
      item?.provider?.username === user?.actor_profile?.username
  );

  const toggleFormVisibility = () => {
    setCreate(!create);
    if (create) setEditData(null); // Reset edit data when closing the form
  };

  const toggleFormVisibilityEdit = (item) => {
    setEditData(item);
    setCreate(true);
  };

  const handleSubmitDelete = async (e, id) => {
    e.preventDefault();

    try {
      await allApi.delete(`/app/delete_resource/${id}/`);
      toast.success("Complain Deleted Successfully");
      setData(data.filter((report) => report.id !== id));
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="mt-10 px-10">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <button
            onClick={toggleFormVisibility}
            className="p-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 mb-4"
          >
            Create Donation
          </button>
          {donations?.length ? (
            <div className="">
              <div className="grid grid-cols-2 gap-5">
                {donations.map((report) => (
                  <DonationCard
                    key={report.id}
                    report={report}
                    user={user}
                    toggleFormVisibilityEdit={toggleFormVisibilityEdit}
                    handleSubmitDelete={handleSubmitDelete}
                  />
                ))}
              </div>
            </div>
          ) : (
            <NoRecordsFound />
          )}
        </>
      )}
      {create && (
        <DonationForm
          campAdmin={campAdmin}
          user={user}
          HandleCancel={toggleFormVisibility}
          existingComplaint={editData}
        />
      )}
    </div>
  );
}
