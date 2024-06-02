import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AdminMenu from "../../components/Types/Admin";
import NgoVolunteer from "../../components/Types/NgoVolunteer";
import { allApi } from "../../api/endPoint";
import IdpHost from "../../components/Types/IdpHost";
import CampAdmin from "../../components/Types/CampAdmin";
export default function Index({ token }) {
  // const [NotFoundPage, setNotFound] = useState(location?.pathname == "/404");
  // useEffect(() => {
  //   setNotFound(location?.pathname == "/404");
  // }, [location?.pathname]);
  // const NotFoundPage = location?.pathname == "/404";
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get("/auth/profile/");
        console.log(response.data?.actor_profile, "Firm Overview Page");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  const userType = data?.actor_profile?.user_type;
  const menu =
    userType == "NDRMC Admin" ? (
      <AdminMenu user={data} userType={userType} />
    ) : userType == "IDP" || userType == "Host" ? (
      <IdpHost user={data} userType={userType} />
    ) : userType == "ngo" || userType == "Volunteer" ? (
      <NgoVolunteer user={data} userType={userType} />
    ) : userType == "Camp Admin" ? (
      <CampAdmin user={data} userType={userType} />
    ) : (
      []
    );
  return (
    <div>
      <BrowserRouter>{token && menu}</BrowserRouter>
    </div>
  );
}
