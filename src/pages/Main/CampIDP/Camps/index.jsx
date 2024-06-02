import React, { useEffect, useState } from "react";
import CardLayout from "../../../../components/Main/CardLayout";
import { allApi } from "../../../../api/endPoint";

export default function Index() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get("/aboutUs");
        console.log(response.data, "Firm Overview Page");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  return (
    <div className=" px-10 mt-10">
      <CardLayout />
    </div>
  );
}
