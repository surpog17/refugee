import React from "react";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import { ToastContainer } from "react-toast";

function App() {
  const token = localStorage.getItem("token") ? true : false;
  return (
    <div className="font-Poppins antialiased text-gray-900">
      <ToastContainer delay={3000} />
      {!token ? <Landing /> : <Main token={token} />}
    </div>
  );
}

export default App;
