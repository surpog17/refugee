import React, { useEffect, useState } from "react";
import UserDetail from "../../../../components/Main/UserDetail";
import { useParams } from "react-router-dom";
import { allApi } from "../../../../api/endPoint";
import Loading from "../../../../components/Main/Loading";
import CampDetailComponent from "../../../../components/Main/CampDetail";

const CampDetail = () => {
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

  return <>{isLoading ? <Loading /> : <CampDetailComponent user={data} />}</>;
};

export default CampDetail;
