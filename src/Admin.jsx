import React, { useEffect } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Header/Sideabar/Sidebar";

export default function Admin() {

  const navigate = useNavigate()
    const path = useLocation()
    var pathName = path.pathname
    const get_user = async () => {
        const current_user = await JSON?.parse(localStorage?.getItem("data123"))
        if (current_user === undefined || current_user === null) {
            navigate('/')
        }
        else {
            navigate(pathName)
        }
    }
    useEffect(() => {
        get_user()
    }, [])

  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  )
}
