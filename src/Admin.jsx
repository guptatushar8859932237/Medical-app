import React, { useEffect, useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Header/Sideabar/Sidebar";

export default function Admin({ isSidebarOpen }) {
//    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// const handleToggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
  return (
    <div className="main-content"
      style={{
        width: isSidebarOpen ? "calc(100% - 250px)" : "100%", // adjust based on sidebar width
        transition: "width 0.3s ease",
      }}>
      <div className="main-content bg-light">
      <Header  />
      <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
