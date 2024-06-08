import React, { useEffect, useState } from "react";
import FeedPost from "../../../../components/Main/FeedPost";
import ShareStoryForm from "../../../../components/Main/ShareStoryForm";
import { allApi } from "../../../../api/endPoint";
import Loading from "../../../../components/Main/Loading";
import NoRecordsFound from "../../../../components/Main/NoRecorde";
import { toast } from "react-toast";

export default function Index({ user }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(`/app/stories/`);
        console.log(response?.data, "STO***");
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  const handleSubmitDelete = async (e, id) => {
    e.preventDefault();

    try {
      const response = await allApi.delete(`/app/stories/${id}`);
      toast.success("Complain Deleted  Successfully ");
      window.location.reload(true);
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.error("Login error:", error);
    }
  };
  return (
    <div className="p-10 grid gap-5">
      <ShareStoryForm />
      {isLoading ? (
        <Loading />
      ) : data?.length != 0 ? (
        data?.map((items) => (
          <FeedPost
            post={items}
            user={user}
            handleSubmitDelete={handleSubmitDelete}
          />
        ))
      ) : (
        <NoRecordsFound title="There no Feed or story yet, Share your thought " />
      )}
    </div>
  );
}
