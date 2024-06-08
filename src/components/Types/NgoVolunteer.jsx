import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "../../layout";
import CampIDP from "../../pages/Main/CampIDP";
import IDPS from "../../pages/Main/CampIDP/IDPS";
import Profile from "../../pages/Main/Profile/";
import Refugee from "../../pages/Main/User/Refugee";
import Camps from "../../pages/Main/User/Camps";
import Donations from "../../pages/Main/NGO/Donations";
import { allApi } from "../../api/endPoint";
export default function NgoVolunteer({ userType }) {
  // const [NotFoundPage, setNotFound] = useState(location?.pathname == "/404");
  // useEffect(() => {
  //   setNotFound(location?.pathname == "/404");
  // }, [location?.pathname]);
  // const NotFoundPage = location?.pathname == "/404";
  console.log(userType, "&*");
  const [data, setData] = useState(null);
  console.log(userType, "hhhh");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allApi.get(
          `/app/search-users/?phone_number=&first_name&last_name&email&user_type=Camp Admin`
        );
        console.log(response?.data, "***");
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  return (
    <Layout userType={userType}>
      <Routes>
        <Route path="/" element={<Donations campAdmin={data} />} />
        <Route path="/camp-idp">
          <Route index element={<CampIDP />}></Route>
          <Route path="idps" element={<Refugee userType={userType} />} />
          <Route path="camps" element={<Camps userType={userType} />} />
        </Route>
        <Route path="setting" element={<div>setting</div>} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}
