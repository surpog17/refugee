import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./../../layout/";
import FeedPost from "../../pages/Main/HostIDP/FeedPost";
import Profile from "./../../pages/Main/Profile";
import Refugee from "../../pages/Main/User/Refugee";
import IDPDetail from "../../pages/Main/CampIDP/Camps/IDPDetail";
import Complain from "../../pages/Main/CampIDP/Camps/Complain";
import { allApi } from "../../api/endPoint";
import Message from "../../pages/Main/HostIDP/Message";
import Reports from "../../pages/Main/HostIDP/Reports";

export default function IdpHost({ userType, user }) {
  // const [NotFoundPage, setNotFound] = useState(location?.pathname == "/404");
  // useEffect(() => {
  //   setNotFound(location?.pathname == "/404");
  // }, [location?.pathname]);
  // const NotFoundPage = location?.pathname == "/404";
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
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
        <Route path="/" element={<FeedPost user={user} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/idps">
          <Route index element={<Refugee userType={userType} />}></Route>
          <Route path=":id" element={<IDPDetail />}></Route>
        </Route>
        <Route
          path="/complain"
          element={<Complain campAdmin={data} user={user} />}
        />
        <Route
          path="/messages"
          element={<Message campAdmin={data} user={user} />}
        />
        <Route
          path="/reports"
          element={<Reports campAdmin={data} user={user} />}
        />
      </Routes>
    </Layout>
  );
}
