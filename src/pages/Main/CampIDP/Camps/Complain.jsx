import React, { useEffect, useState } from "react";
import ComplaintCard from "../../../../components/Main/ComplainCard";
import { allApi } from "../../../../api/endPoint";
import NoRecordsFound from "../../../../components/Main/NoRecorde";
import Loading from "../../../../components/Main/Loading";

function Complain({ user }) {
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
  console.log(complaints, user, "%%");
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 px-10">
          {complaints?.length != 0 ? (
            <main className=" grid grid-cols-2 gap-5">
              {complaints?.map((complaint) => (
                <ComplaintCard key={complaint.id} complaint={complaint} />
              ))}
            </main>
          ) : (
            <NoRecordsFound />
          )}
        </div>
      )}
    </>
  );
}

export default Complain;
