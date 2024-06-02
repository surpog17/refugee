import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "../../layout";
import Refugee from "../../pages/Main/User/Refugee";
import CampIDP from "../../pages/Main/CampIDP";
import Camps from "../../pages/Main/CampIDP/Camps";
import IDPS from "../../pages/Main/CampIDP/IDPS";
import Profile from "../../pages/Main/Profile/";
export default function NgoVolunteer({ userType }) {
  // const [NotFoundPage, setNotFound] = useState(location?.pathname == "/404");
  // useEffect(() => {
  //   setNotFound(location?.pathname == "/404");
  // }, [location?.pathname]);
  // const NotFoundPage = location?.pathname == "/404";

  return (
    <Layout userType={userType}>
      <Routes>
        <Route path="/" element={<div>Donation</div>} />
        <Route path="/camp-idp">
          <Route index element={<CampIDP />}></Route>
          <Route path="idps" element={<IDPS />} />
          <Route path="camps" element={<Camps />} />
        </Route>
        <Route path="setting" element={<div>setting</div>} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}
