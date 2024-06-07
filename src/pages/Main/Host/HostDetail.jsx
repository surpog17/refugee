import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HostDetailComponent from "../../../components/Main/HostDetailComponet";
import { allApi } from "../../../api/endPoint";
import Loading from "../../../components/Main/Loading";

const HostDetail = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(
          `/auth/full_user_profile/${params?.id}`
        );
        console.log(response?.data, "IDP name");
        setData(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return <>{isLoading ? <Loading /> : <HostDetailComponent user={data} />}</>;
};

export default HostDetail;
