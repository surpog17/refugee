import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "../../layout";
import FeedPost from "../Main/FeedPost";
import Login from "./../../pages/Main/Login";
import RegistrationForm from "./../../pages/Main/RegistrationForm";
import Profile from "./../../pages/Main/Profile";
import User from "./../../pages/Main/User";
import Hosts from "./../../pages/Main/User/Host";
import Ngos from "./../../pages/Main/User/Ngos";
import Refugee from "./../../pages/Main/User/Refugee";
import RegisterHost from "./../../pages/Main/User/RegisterHost";
import RegisterNGOs from "./../../pages/Main/User/RegisterNGOs";
import RegisterRefugee from "./../../pages/Main/User/RegisterRefugee";
import Camps from "../../pages/Main/User/Camps";
export default function AdminMenu({ userType, user }) {
  // const [NotFoundPage, setNotFound] = useState(location?.pathname == "/404");
  // useEffect(() => {
  //   setNotFound(location?.pathname == "/404");
  // }, [location?.pathname]);
  // const NotFoundPage = location?.pathname == "/404";

  return (
    <Layout user={user} userType={userType}>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/feeds" element={<FeedPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hosts" element={<Hosts />} />
        <Route path="registerhost" element={<RegisterHost />} />
        <Route path="/NGOs" element={<Ngos />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="/registerNgo" element={<RegisterNGOs />} />
        <Route path="/IDP" element={<Refugee />} />
        <Route path="/registerrefugee" element={<RegisterRefugee />} />
      </Routes>
    </Layout>
  );
}
