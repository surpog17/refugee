import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./../../layout/";
import FeedPost from "../Main/FeedPost";
import Profile from "./../../pages/Main/Profile";
import IDPTable from "../../pages/Main/CampIDP/Camps/IDPTable";
import Complain from "../../pages/Main/CampIDP/Camps/Complain";
import Home from "../../pages/Main/CampIDP/Camps/Home";
import IDPDetail from "../../pages/Main/CampIDP/Camps/IDPDetail";
export default function CampAdmin({ userType, user }) {
  // const [NotFoundPage, setNotFound] = useState(location?.pathname == "/404");
  // useEffect(() => {
  //   setNotFound(location?.pathname == "/404");
  // }, [location?.pathname]);
  // const NotFoundPage = location?.pathname == "/404";

  return (
    <Layout user={user} userType={userType}>
      <Routes>
        <Route path="/" element={<Home actorProfileData={user} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/idp">
          <Route index element={<IDPTable />} />
          <Route path=":id" element={<IDPDetail />} />
        </Route>
        <Route path="/messages" element={<>Message</>} />
        <Route path="/complain" element={<Complain user={user} />} />
        <Route path="/report" element={<>Report</>} />
        <Route path="/settings" element={<Profile />} />
      </Routes>
    </Layout>
  );
}
