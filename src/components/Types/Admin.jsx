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
import IDPDetail from "../../pages/Main/CampIDP/Camps/IDPDetail";
import CampDetail from "../../pages/Main/CampIDP/Camps/CampDetail";
import HostDetail from "../../pages/Main/Host/HostDetail";
import NGODetail from "../../pages/Main/NGO/NgoDetail";
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
        <Route path="registerhost" element={<RegisterHost />} />

        <Route path="/ngos">
          <Route index element={<Ngos />}></Route>
          <Route path=":id" element={<NGODetail />}></Route>
        </Route>
        <Route path="/hosts">
          <Route index element={<Hosts />}></Route>
          <Route path=":id" element={<HostDetail />}></Route>
        </Route>
        <Route path="/camps">
          <Route index element={<Camps />}></Route>
          <Route path=":id" element={<CampDetail />}></Route>
        </Route>
        <Route path="/registerNgo" element={<RegisterNGOs />} />
        <Route path="/idp">
          <Route index element={<Refugee />}></Route>
          <Route path=":id" element={<IDPDetail />}></Route>
        </Route>
        <Route path="/registerrefugee" element={<RegisterRefugee />} />
        <Route path="/settings" element={<Profile />} />
      </Routes>
    </Layout>
  );
}
