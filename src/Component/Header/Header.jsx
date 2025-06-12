// import React from "react";
// import { Link, Links, NavLink } from "react-router-dom";

// export default function Header() {
//   return (
//     <>
//       <nav className="pc-sidebar">
//         <div className="navbar-wrapper">
//           <div className="m-header">
//             <a href="../index_html.html" className="b-brand text-primary">
//               {/* ========   Change your logo from here   ============ */}{" "}
//               <img
//                 src="../assets/images/logo-dark.svg"
//                 className="img-fluid logo-lg"
//                 alt="logo"
//               />{" "}
//               <span className="badge bg-light-success rounded-pill ms-2 theme-version">
//                 v9.5.1
//               </span>
//             </a>
//           </div>
//           <div className="navbar-content">
//             <div className="card pc-user-card">
//               <div className="card-body">
//                 <div className="d-flex align-items-center">
//                   <div className="flex-shrink-0">
//                     <img
//                       src="../assets/images/user/avatar-1.jpg"
//                       alt="user-image"
//                       className="user-avtar wid-45 rounded-circle"
//                     />
//                   </div>
//                   <div className="flex-grow-1 ms-3 me-2">
//                     <h6 className="mb-0" data-i18n="Jonh Smith">
//                       Jonh Smith
//                     </h6>
//                     <small data-i18n="Administrator">Administrator</small>
//                   </div>
//                   <a
//                     className="btn btn-icon btn-link-secondary avtar"
//                     data-bs-toggle="collapse"
//                     href="#pc_sidebar_userlink"
//                   >
//                     <svg className="pc-icon">
//                       <use xlinkHref="#custom-sort-outline" />
//                     </svg>
//                   </a>
//                 </div>
//                 <div
//                   className="collapse pc-user-links"
//                   id="pc_sidebar_userlink"
//                 >
//                   <div className="pt-3">
//                     <a href="#!">
//                       <i className="ti ti-user" />{" "}
//                       <span data-i18n="My Account">My Account</span>{" "}
//                     </a>
//                     <a href="#!">
//                       <i className="ti ti-settings" />{" "}
//                       <span data-i18n="Settings">Settings</span>{" "}
//                     </a>
//                     <a href="#!">
//                       <i className="ti ti-lock" />
//                       <span data-i18n="Lock Screen">Lock Screen</span>{" "}
//                     </a>
//                     <Link to="/">
//                       <i className="ti ti-power" />{" "}
//                       <span data-i18n="Logout">Logout</span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <ul className="pc-navbar">
//               {/* <li className="pc-item pc-caption">
//                 <label data-i18n="Navigation">Navigation</label>
//               </li> */}
//               <li className="pc-item pc-hasmenu">
//                 <NavLink to="/Admin/dashboard" className="pc-link">
//                   <span className="pc-micon">
//                     <svg className="pc-icon">
//                       <use xlinkHref="#custom-status-up" />
//                     </svg>{" "}
//                   </span>
//                   <span className="pc-mtext" data-i18n="Dashboard">
//                     Dashboard
//                   </span>{" "}
//                 </NavLink>
//               </li>
//               <li className="pc-item pc-caption">
//                 <label data-i18n="Widget">Widget</label>{" "}
//                 <svg className="pc-icon">
//                   <use xlinkHref="#custom-presentation-chart" />
//                 </svg>
//               </li>
//               <li className="pc-item">
//                 <NavLink to="/Admin/patient" className="pc-link">
//                   <span className="pc-micon">
//                     <svg className="pc-icon">
//                       <use xlinkHref="#custom-story" />
//                     </svg>{" "}
//                   </span>
//                   <span className="pc-mtext" data-i18n="Manage patient">
//                     Manage Patient
//                   </span>
//                 </NavLink>
//               </li>
//               <li className="pc-item">
//                 <NavLink to="/Admin/Manageappointment" className="pc-link">
//                   <span className="pc-micon">
//                     <svg className="pc-icon">
//                       <use xlinkHref="#custom-story" />
//                     </svg>{" "}
//                   </span>
//                   <span className="pc-mtext" data-i18n="Manage Appointment">
//                     Manage Appointment
//                   </span>
//                 </NavLink>
//               </li>
//               <li className="pc-item">
//                 <NavLink to="/admin/ManageDoctors" className="pc-link">
//                   <span className="pc-micon">
//                     <svg className="pc-icon">
//                       <use xlinkHref="#custom-fatrows" />
//                     </svg>{" "}
//                   </span>
//                   <span className="pc-mtext" data-i18n="Manage Doctors">
//                     Manage Doctors
//                   </span>
//                 </NavLink>
//               </li>
//               <li className="pc-item">
//                 <NavLink to="/Admin/ManageStaff" className="pc-link">
//                   <span className="pc-micon">
//                     <svg className="pc-icon">
//                       <use xlinkHref="#custom-presentation-chart" />
//                     </svg>{" "}
//                   </span>
//                   <span className="pc-mtext" data-i18n="Manage Staff">
//                     Manage Staff
//                   </span>
//                 </NavLink>
//               </li>

//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import image1 from "../../assests/appointment.png";
import image2 from "../../assests/patients2.png";
import image3 from "../../assests/dashboards.png";
import image4 from "../../assests/Main Menu.png";
import image5 from "../../assests/laboratory.png";
import image6 from "../../assests/billing - payments.png";
import image7 from "../../assests/pharmacy.png";
import image8 from "../../assests/medicals.png";
import image9 from "../../assests/insurance.png";
export default function Header() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate()
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };
  const sidebarMenu = [
    {
      path: "/Admin/dashboard",
      text: "Dashboard",
      icon: image3,
    },
    {
      path: "/Admin/patient",
      text: "Manage Patient",
      icon: image2,
    },
    {
      path: "/Admin/appointment2",
      text: "Manage Appointment",
      icon: image1,
    },
    // {
    //   path: "/Admin/Manageappointment",
    //   text: "Manage Appointment",
    //   icon: image1,
    // },
    {
      path: "/Admin/ManageStaff",
      text: "Manage Staff",
      icon: image4,
    },
    {
      path: "/Admin/ManageLabs",
      text: "Manage Labs",
      icon: image5,
    },
    {
      path: "/Admin/Billing",
      text: "Billing",
      icon: image6,
    },
    {
      path: "/Admin/Pharmacy",
      text: "Pharmacy",
      icon: image7,
    },
    {
      path: "/Admin/Medicals",
      text: "Medicals",
      icon: image8,
    },
    {
      path: "/Admin/Insurance",
      text: "Insurance",
      icon: image9,
    },
    {
      path: "/Admin/ReportsInc",
      text: "Reports",
      icon: image9,
    },
  ];

  const handleclicklogout =() =>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <nav className="pc-sidebar">
      <div className="navbar-wrapper">
        <div className="m-header">
          <Link to="/Admin/dashboard" className="b-brand text-primary">
            <img
              src="../assets/images/logo-dark.svg"
              className="img-fluid logo-lg"
              alt="logo"
            />
            {/* <span className="badge bg-light-success rounded-pill ms-2 theme-version">
              v9.5.1
            </span> */}
          </Link>
        </div>

        <div className="navbar-content">
          <div className="card pc-user-card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src="../assets/images/user/avatar-1.jpg"
                    alt="user"
                    className="user-avtar wid-45 rounded-circle"
                  />
                </div>
                <div className="flex-grow-1 ms-3 me-2">
                  <h6 className="mb-0">Jonh Smith</h6>
                  <small>Administrator</small>
                </div>
                <button
                  className="btn btn-icon btn-link-secondary avtar"
                  onClick={toggleUserMenu}
                >
                  <svg className="pc-icon">
                    <use xlinkHref="#custom-sort-outline" />
                  </svg>
                </button>
              </div>

              {userMenuOpen && (
                <div className="pc-user-links pt-3">
                  <NavLink>
                    <i className="ti ti-user" /> My Account
                  </NavLink>
                  <NavLink to="/Admin/myprofile">
                    <i className="ti ti-settings" /> Settings
                  </NavLink>
                  <NavLink to="/Admin/myprofile">
                    <i className="ti ti-lock" /> Lock Screen
                  </NavLink>
                  <div onClick={handleclicklogout} style={{cursor:"pointer"}}>
                    <i className="ti ti-power"  /> Logout
                  </div>
                </div>
              )}
            </div>
          </div>

          <ul className="pc-navbar">
            {sidebarMenu.map((item, index) => (
              <li className="pc-item" key={index}>
                {/* <NavLink
                  to={item.path}
                  className="pc-link"
                  style={{ textDecoration: "none" }}
                >
                  <span className="pc-micon">
                    <div className="pc-icon">
                      <img
                        src={item.icon}
                        alt={item.text}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                  </span>
                  <span className="pc-mtext fw-800">{item.text}</span>
                </NavLink> */}

                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `pc-link ${isActive ? "active-link" : ""}`
                  }
                  style={{ textDecoration: "none" }}
                >
                  <span className="pc-micon">
                    <div className="pc-icon">
                      <img
                        src={item.icon}
                        alt={item.text}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                  </span>
                  <span className="pc-mtext fw-800">{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
