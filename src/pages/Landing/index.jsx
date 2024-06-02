import React from "react";
import Landing from "./Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./../../pages/Main/Login";
import RegistrationForm from "./../../pages/Main/RegistrationForm";
import IDPSignUp from "./../../pages/Main/RegistrationForm/IDPSignUp";
import HostSignUp from "./../../pages/Main/RegistrationForm/HostSignUp";
import VolunteerSignUp from "./../../pages/Main/RegistrationForm/VolunteerSignUp";
import CampAdminSignUp from "./../../pages/Main/RegistrationForm/CampAdminSignUp";
import NgoSignUp from "../Main/RegistrationForm/NgoSignUp";
export default function index() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/ipdSignup" element={<IDPSignUp />} />
          <Route path="/hostSignup" element={<HostSignUp />} />
          <Route path="/volunteerSignup" element={<VolunteerSignUp />} />
          <Route path="/admincampSignup" element={<CampAdminSignUp />} />
          <Route path="/ngo-Signup" element={<NgoSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
