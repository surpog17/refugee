import React from "react";
import Landing from "./pages/Landing";
import Main from "./pages/Main";

function App() {
  const token = false;
  return (
    <div className="font-sans antialiased text-gray-900">
      {!token ? <Landing /> : <Main token={token} />}
    </div>
  );
}

export default App;
