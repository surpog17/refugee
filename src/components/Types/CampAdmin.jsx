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
export default function CampAdmin({ userType, user }) {
  // const [NotFoundPage, setNotFound] = useState(location?.pathname == "/404");
  // useEffect(() => {
  //   setNotFound(location?.pathname == "/404");
  // }, [location?.pathname]);
  // const NotFoundPage = location?.pathname == "/404";

  return (
    <Layout user={user} userType={userType}>
      <Routes>
        <Route path="/" element={<FeedPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<>Message</>} />
        <Route path="/complain" element={<>Complain</>} />
        <Route path="/report" element={<>Report</>} />
      </Routes>
    </Layout>
  );
}
