import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Side_Menu from "./Component/Side_Menu";
import Dashboard from "./Component/Dashboard";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
       
      
          <Routes>
            <Route path="/" element={<Side_Menu/>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user-list" element={<div>User-list</div>} />
            <Route path="profile" element={<div>Profile</div>} />
            <Route path="signout" element={<div>Signout</div>} />
          </Routes>
        
      </div>
    </Router>
  );
};

export default App;
