import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./../../layout/";
import FeedPost from "./../Main/FeedPost";
import Login from "./../Main/Login";
import RegistrationForm from "./../Main/RegistrationForm";
import Profile from "./../Main/Profile";
import User from "./../Main/User";
import Hosts from "./User/Host";
import Ngos from "./User/Ngos";
import Refugee from "./User/Refugee";
import RegisterHost from "./User/RegisterHost";
import RegisterNGOs from "./User/RegisterNGOs";
import RegisterRefugee from "./User/RegisterRefugee";
export default function index({ token }) {
  // const [NotFoundPage, setNotFound] = useState(location?.pathname == "/404");
  // useEffect(() => {
  //   setNotFound(location?.pathname == "/404");
  // }, [location?.pathname]);
  // const NotFoundPage = location?.pathname == "/404";

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <FeedPost />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout>
                <User />
              </Layout>
            }
          />
          <Route
            path="/hosts"
            element={
              <Layout>
                <Hosts />
              </Layout>
            }
          />
          <Route
            path="registerhost"
            element={
              <Layout>
                <RegisterHost />
              </Layout>
            }
          />
          <Route
            path="/NGOs"
            element={
              <Layout>
                <Ngos />
              </Layout>
            }
          />
          <Route
            path="/registerNgo"
            element={
              <Layout>
                <RegisterNGOs />
              </Layout>
            }
          />
          <Route
            path="/refugees"
            element={
              <Layout>
                <Refugee />
              </Layout>
            }
          />
          <Route
            path="/registerrefugee"
            element={
              <Layout>
                <RegisterRefugee />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
