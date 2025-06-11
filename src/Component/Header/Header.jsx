import React from "react";
import { Link, Links, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="pc-sidebar">
        <div className="navbar-wrapper">
          <div className="m-header">
            <a href="../index_html.html" className="b-brand text-primary">
              {/* ========   Change your logo from here   ============ */}{" "}
              <img
                src="../assets/images/logo-dark.svg"
                className="img-fluid logo-lg"
                alt="logo"
              />{" "}
              <span className="badge bg-light-success rounded-pill ms-2 theme-version">
                v9.5.1
              </span>
            </a>
          </div>
          <div className="navbar-content">
            <div className="card pc-user-card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src="../assets/images/user/avatar-1.jpg"
                      alt="user-image"
                      className="user-avtar wid-45 rounded-circle"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3 me-2">
                    <h6 className="mb-0" data-i18n="Jonh Smith">
                      Jonh Smith
                    </h6>
                    <small data-i18n="Administrator">Administrator</small>
                  </div>
                  <a
                    className="btn btn-icon btn-link-secondary avtar"
                    data-bs-toggle="collapse"
                    href="#pc_sidebar_userlink"
                  >
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-sort-outline" />
                    </svg>
                  </a>
                </div>
                <div
                  className="collapse pc-user-links"
                  id="pc_sidebar_userlink"
                >
                  <div className="pt-3">
                    <a href="#!">
                      <i className="ti ti-user" />{" "}
                      <span data-i18n="My Account">My Account</span>{" "}
                    </a>
                    <a href="#!">
                      <i className="ti ti-settings" />{" "}
                      <span data-i18n="Settings">Settings</span>{" "}
                    </a>
                    <a href="#!">
                      <i className="ti ti-lock" />
                      <span data-i18n="Lock Screen">Lock Screen</span>{" "}
                    </a>
                    <Link to="/">
                      <i className="ti ti-power" />{" "}
                      <span data-i18n="Logout">Logout</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <ul className="pc-navbar">
              {/* <li className="pc-item pc-caption">
                <label data-i18n="Navigation">Navigation</label>
              </li> */}
              <li className="pc-item pc-hasmenu">
                <NavLink to="/Admin/dashboard" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-status-up" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Dashboard">
                    Dashboard
                  </span>{" "}
                  {/* <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>{" "} */}
                  {/* <span className="pc-badge">2</span> */}
                </NavLink>
               
              </li>
              {/* <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-document" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Layouts">
                    Layouts
                  </span>{" "}
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../demo/layout-vertical.html"
                      data-i18n="Vertical"
                    >
                      Vertical
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../demo/layout-horizontal.html"
                      data-i18n="Horizontal"
                    >
                      Horizontal
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../demo/layout-color-header.html"
                      data-i18n="Layouts 2"
                    >
                      Layouts 2
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../demo/layout-compact.html"
                      data-i18n="Compact"
                    >
                      Compact
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../demo/layout-tab.html"
                      data-i18n="Tab"
                    >
                      Tab
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="pc-item pc-caption">
                <label data-i18n="Widget">Widget</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-presentation-chart" />
                </svg>
              </li>
              <li className="pc-item">
                <NavLink to="/Admin/patient" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-story" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Statistics">
                    Manage Patient
                  </span>
                </NavLink>
              </li>
              <li className="pc-item">
                <NavLink to="/admin/ManageDoctors" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-fatrows" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Data">
                    Manage Doctors
                  </span>
                </NavLink>
              </li>
              <li className="pc-item">
                <NavLink to="/Admin/ManageStaff" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-presentation-chart" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Chart">
                    Manage Staff
                  </span>
                </NavLink>
              </li>
              <li className="pc-item pc-caption">
                <label data-i18n="Admin Panel">Admin Panel</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-layer" />
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-layer" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Online Courses">
                    Online Courses
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/course-dashboard.html"
                      data-i18n="Dashboard"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#!">
                      <span data-i18n="Teacher">Teacher</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-teacher-list.html"
                          data-i18n="List"
                        >
                          List
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-teacher-apply.html"
                          data-i18n="Apply"
                        >
                          Apply
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-teacher-add.html"
                          data-i18n="Add"
                        >
                          Add
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#!">
                      <span data-i18n="Student">Student</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-student-list.html"
                          data-i18n="List"
                        >
                          list
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-student-apply.html"
                          data-i18n="Apply"
                        >
                          Apply
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-student-add.html"
                          data-i18n="Add"
                        >
                          Add
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#!">
                      <span data-i18n="Courses">Courses</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-course-view.html"
                          data-i18n="View"
                        >
                          View
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-course-add.html"
                          data-i18n="Add"
                        >
                          Add
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/course-pricing.html"
                      data-i18n="Pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/course-site.html"
                      data-i18n="Site"
                    >
                      Site
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#!">
                      <span data-i18n="Setting">Setting</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-setting-payment.html"
                          data-i18n="Payment"
                        >
                          Payment
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-setting-pricing.html"
                          data-i18n="Pricing"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/course-setting-notifications.html"
                          data-i18n="Notification"
                        >
                          Notifications
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-user" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Membership">
                    Membership
                  </span>{" "}
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/membership-dashboard.html"
                      data-i18n="Dashboard"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/membership-list.html"
                      data-i18n="List"
                    >
                      List
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/membership-pricing.html"
                      data-i18n="Pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/membership-setting.html"
                      data-i18n="Setting"
                    >
                      Setting
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-24-support" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Helpdesk">
                    Helpdesk
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/helpdesk-dashboard.html"
                      data-i18n="Dashboard"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#!">
                      <span data-i18n="Ticket">Ticket</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/helpdesk-create-ticket.html"
                          data-i18n="Create"
                        >
                          Create
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/helpdesk-ticket.html"
                          data-i18n="List"
                        >
                          List
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../admins/helpdesk-ticket-details.html"
                          data-i18n="Details"
                        >
                          Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/helpdesk-customer.html"
                      data-i18n="Customer"
                    >
                      Customer
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-bill" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Invoice">
                    Invoice
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/invoice-dashboard.html"
                      data-i18n="Dashboard"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/invoice-create.html"
                      data-i18n="Create"
                    >
                      Create
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/invoice-view.html"
                      data-i18n="Details"
                    >
                      Details
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/invoice-list.html"
                      data-i18n="List"
                    >
                      List
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../admins/invoice-edit.html"
                      data-i18n="Edit"
                    >
                      Edit
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label data-i18n="UI Components">UI Components</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-box-1" />
                </svg>
              </li>
              <li className="pc-item">
                <a
                  href="../elements/bc_alert.html"
                  className="pc-link"
                  target="_blank"
                >
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-box-1" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Components">
                    Components
                  </span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../elements/animation.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-flag" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Animation">
                    Animation
                  </span>
                </a>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-mouse-circle" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Icons">
                    Icons
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../elements/icon-feather.html"
                      data-i18n="Feather"
                    >
                      Feather
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../elements/icon-fontawesome.html"
                      data-i18n="Font Awesome 5"
                    >
                      Font Awesome 5
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../elements/icon-material.html"
                      data-i18n="Material"
                    >
                      Material
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../elements/icon-tabler.html"
                      data-i18n="Tabler"
                    >
                      Tabler
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../elements/icon-phosphor.html"
                      data-i18n="Phospher"
                    >
                      Phosphor
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../elements/icon-custom.html"
                      data-i18n="Custom"
                    >
                      Custom
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label data-feather="Forms">Forms</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-element-plus" />
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-element-plus" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Form Elements">
                    Forms Elements
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form_elements.html"
                      data-i18n="Form Basic"
                    >
                      Form Basic
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form_floating.html"
                      data-i18n="Form Floating"
                    >
                      Form Floating
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_basic.html"
                      data-i18n="Form Options"
                    >
                      Form Options
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_input_group.html"
                      data-i18n="Input Group"
                    >
                      Input Groups
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_checkbox.html"
                      data-i18n="CheckBox"
                    >
                      Checkbox
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_radio.html"
                      data-i18n="Radio"
                    >
                      Radio
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_switch.html"
                      data-i18n="Switch"
                    >
                      Switch
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_megaoption.html"
                      data-i18n="Mega Option"
                    >
                      Mega option
                    </a>
                  </li>
                </ul>
              </li>
              <div>
                <li className="pc-item pc-hasmenu">
                  <a href="#!" className="pc-link">
                    <span className="pc-micon">
                      <svg className="pc-icon">
                        <use xlinkHref="#custom-cpu-charge" />
                      </svg>{" "}
                    </span>
                    <span className="pc-mtext" data-i18n="Form Plugins">
                      Forms Plugins
                    </span>
                    <span className="pc-arrow">
                      <i data-feather="chevron-right" />
                    </span>
                  </a>
                  <ul className="pc-submenu">
                    <li className="pc-item pc-hasmenu">
                      <a className="pc-link" href="#">
                        <span data-i18n="Date">Date</span>{" "}
                        <span className="pc-arrow">
                          <i data-feather="chevron-right" />
                        </span>
                      </a>
                      <ul className="pc-submenu">
                        <li className="pc-item">
                          <a
                            className="pc-link"
                            href="../forms/form2_datepicker.html"
                            data-i18n="Date Picker"
                          >
                            Datepicker
                          </a>
                        </li>
                        <li className="pc-item">
                          <a
                            className="pc-link"
                            href="../forms/form2_daterangepicker.html"
                            data-i18n="Date Range Picker"
                          >
                            Date Range Picker
                          </a>
                        </li>
                        <li className="pc-item">
                          <a
                            className="pc-link"
                            href="../forms/form2_timepicker.html"
                            data-i18n="Timepicker"
                          >
                            Timepicker
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="pc-item pc-hasmenu">
                      <a className="pc-link" href="#">
                        <span data-i18n="Select">Select</span>{" "}
                        <span className="pc-arrow">
                          <i data-feather="chevron-right" />
                        </span>
                      </a>
                      <ul className="pc-submenu">
                        <li className="pc-item">
                          <a
                            className="pc-link"
                            href="../forms/form2_choices.html"
                            data-i18n="Choices js"
                          >
                            Choices js
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="pc-item">
                      <a
                        className="pc-link"
                        href="../forms/form2_rating.html"
                        data-i18n="Rating"
                      >
                        Rating
                      </a>
                    </li>
                    <li className="pc-item">
                      <a
                        className="pc-link"
                        href="../forms/form2_recaptcha.html"
                        data-i18n="Google-Re-Captcha"
                      >
                        Google reCaptcha
                      </a>
                    </li>
                    <li className="pc-item">
                      <a
                        className="pc-link"
                        href="../forms/form2_inputmask.html"
                        data-i18n="Input Mask"
                      >
                        Input Masks
                      </a>
                    </li>
                    <li className="pc-item">
                      <a
                        className="pc-link"
                        href="../forms/form2_clipboard.html"
                        data-i18n="ClipBoard"
                      >
                        Clipboard
                      </a>
                    </li>
                    <li className="pc-item">
                      <a
                        className="pc-link"
                        href="../forms/form2_nouislider.html"
                        data-i18n="Nouislider"
                      >
                        Nouislider
                      </a>
                    </li>
                    <li className="pc-item">
                      <a
                        className="pc-link"
                        href="../forms/form2_switchjs.html"
                        data-i18n="Bootstrap Switch"
                      >
                        Bootstrap Switch
                      </a>
                    </li>
                    <li className="pc-item">
                      <a
                        className="pc-link"
                        href="../forms/form2_typeahead.html"
                        data-i18n="TypeaHead"
                      >
                        Typeahead
                      </a>
                    </li>
                  </ul>
                </li>
              </div>

              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-text-block" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Text Editor">
                    Text Editors
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_tinymce.html"
                      data-i18n="Tinymce"
                    >
                      Tinymce
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_quill.html"
                      data-i18n="Quill"
                    >
                      Quill
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a className="pc-link" href="#">
                      <span data-i18n="CK editor">CK editor</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/editor-classic.html"
                          data-i18n="classic"
                        >
                          classic
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/editor-document.html"
                          data-i18n="Document"
                        >
                          Document
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/editor-inline.html"
                          data-i18n="Inline"
                        >
                          Inline
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../forms/editor-balloon.html"
                          data-i18n="Balloon"
                        >
                          Balloon
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_markdown.html"
                      data-i18n="Markdown"
                    >
                      Markdown
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-row-vertical" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Form Layouts">
                    Form Layouts
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_lay-default.html"
                      data-i18n="Layouts"
                    >
                      Layouts
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_lay-multicolumn.html"
                      data-i18n="MultiColumn"
                    >
                      Multicolumn
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_lay-actionbars.html"
                      data-i18n="ActionBars"
                    >
                      Actionbars
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_lay-stickyactionbars.html"
                      data-i18n="Sticky-ActionBar"
                    >
                      Sticky Action bars
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-document-upload" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Form Layouts">
                    File upload
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/file-upload.html"
                      data-i18n="Dropzone"
                    >
                      Dropzone
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../forms/form2_flu-uppy.html"
                      data-i18n="Uppy"
                    >
                      Uppy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a href="../forms/form2_wizard.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-password-check" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="wizard">
                    Wizard
                  </span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../forms/form-validation.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-kanban" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Form Validation">
                    Form Validation
                  </span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../forms/image_crop.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-crop" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Images Cropper">
                    Image cropper
                  </span>
                </a>
              </li>
              <li className="pc-item pc-caption">
                <label data-i18n="Tables">table</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-text-align-justify-center" />
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-text-align-justify-center" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Bootstrap Table">
                    Bootstrap Table
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_bootstrap.html"
                      data-i18n="Basic Table"
                    >
                      Basic table
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_sizing.html"
                      data-i18n="Sizing table"
                    >
                      Sizing table
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_border.html"
                      data-i18n="Border table"
                    >
                      Border table
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_styling.html"
                      data-i18n="Styling table"
                    >
                      Styling table
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-keyboard" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Vanilla table">
                    Vanilla Table
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-simple.html"
                      data-i18n="Basic initialization"
                    >
                      Basic initialization
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-dynamic-import.html"
                      data-i18n="Dynamic Import"
                    >
                      Dynamic Import
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-render-column-cells.html"
                      data-i18n="Render Column Cells"
                    >
                      Render Column Cells
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-column-manipulation.html"
                      data-i18n="Column Manipulation"
                    >
                      Column Manipulation
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-datetime-sorting.html"
                      data-i18n="Datetime Sorting"
                    >
                      Datetime Sorting
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-methods.html"
                      data-i18n="Methods"
                    >
                      Methods
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-add-rows.html"
                      data-i18n="Add Rows"
                    >
                      Add Rows
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-fetch-api.html"
                      data-i18n="Fetch API"
                    >
                      Fetch API
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-filters.html"
                      data-i18n="Filters"
                    >
                      Filters
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/tbl_dt-export.html"
                      data-i18n="Export"
                    >
                      Export
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-graph" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Data Table">
                    Data table
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_advance.html"
                      data-i18n="Advance initialization"
                    >
                      Advance initialization
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_styling.html"
                      data-i18n="Styling"
                    >
                      Styling
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_api.html"
                      data-i18n="API"
                    >
                      API
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_plugin.html"
                      data-i18n="Plug-in"
                    >
                      Plug-in
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_sources.html"
                      data-i18n="Data sources"
                    >
                      Data sources
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-add-item" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="DT extensions">
                    DT extensions
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_autofill.html"
                      data-i18n="Autofill"
                    >
                      Autofill
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      <span data-i18n="Button">Button</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../table/dt_ext_basic_buttons.html"
                          data-i18n="Basic button"
                        >
                          Basic button
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          href="../table/dt_ext_export_buttons.html"
                          data-i18n="Data export"
                        >
                          Data export
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_col_reorder.html"
                      data-i18n="Col reorder"
                    >
                      Col reorder
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_fixed_columns.html"
                      data-i18n="Fixed columns"
                    >
                      Fixed columns
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_fixed_header.html"
                      data-i18n="Fixed header"
                    >
                      Fixed header
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_key_table.html"
                      data-i18n="Key table"
                    >
                      Key table
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_responsive.html"
                      data-i18n="Responsive"
                    >
                      Responsive
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_row_reorder.html"
                      data-i18n="Row reorder"
                    >
                      Row reorder
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_scroller.html"
                      data-i18n="Scroller"
                    >
                      Scroller
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../table/dt_ext_select.html"
                      data-i18n="Select"
                    >
                      Select table
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label data-i18n="Chart & Maps">Charts ∧ Maps</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-graph" />
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-graph" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Charts">
                    Charts
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../chart/chart-apex.html"
                      data-i18n="Apex Chart"
                    >
                      Apex Chart
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../chart/chart-peity.html"
                      data-i18n="Peity Chart"
                    >
                      Peity Chart
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-shapes" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Map">
                    Maps
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../chart/map-vector.html"
                      data-i18n="Vector Map"
                    >
                      Vector Maps
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../chart/map-gmap.html"
                      data-i18n="Google Map"
                    >
                      Gmaps
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label data-i18n="Application">Application</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-shopping-bag" />
                </svg>
              </li>
              <li className="pc-item">
                <a href="../application/calendar.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-calendar-1" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Calender">
                    Calendar
                  </span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../application/chat.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-message-2" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Chat">
                    Chat
                  </span>
                </a>
              </li>
              <li className="pc-item">
                <a
                  href="../application/cust_customer_list.html"
                  className="pc-link"
                >
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-notification-status" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Customer">
                    Customer
                  </span>
                </a>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-shopping-bag" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Ecommerce">
                    E-commerce
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_product.html"
                      data-i18n="Product"
                    >
                      Product
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_product-details.html"
                      data-i18n="Product-Detail"
                    >
                      Product details
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_product-list.html"
                      data-i18n="Product-List"
                    >
                      Product List
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_product-add.html"
                      data-i18n="Product Add"
                    >
                      Add New Product
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/ecom_checkout.html"
                      data-i18n="Checkout"
                    >
                      Checkout
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a href="../application/file-manager.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-document-filter" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="File manager">
                    File manager
                  </span>
                </a>
              </li>
              <li className="pc-item">
                <a href="../application/mail.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-direct-inbox" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Mail">
                    Mail
                  </span>
                </a>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-user-square" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="User">
                    Users
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/account-profile.html"
                      data-i18n="Account Profile"
                    >
                      Account Profile
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../application/social-media.html"
                      data-i18n="Social Profile"
                    >
                      Social media
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-caption">
                <label data-i18n="pages">Pages</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-flag" />
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-shield" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Authentication">
                    Authentication
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      <span data-i18n="Authentication 1">Authentication 1</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/login-v1.html"
                          data-i18n="Login"
                        >
                          Login
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/register-v1.html"
                          data-i18n="Register"
                        >
                          Register
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/forgot-password-v1.html"
                          data-i18n="Forget Password"
                        >
                          Forgot Password
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/check-mail-v1.html"
                          data-i18n="Check Mail"
                        >
                          check mail
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/reset-password-v1.html"
                          data-i18n="Reset Password"
                        >
                          reset password
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/code-verification-v1.html"
                          data-i18n="Code Verification"
                        >
                          code verification
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      <span data-i18n="Authentication 2">Authentication 2</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/login-v2.html"
                          data-i18n="Login"
                        >
                          Login
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/register-v2.html"
                          data-i18n="Register"
                        >
                          Register
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/forgot-password-v2.html"
                          data-i18n="Forget Password"
                        >
                          Forgot password
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/check-mail-v2.html"
                          data-i18n="Check Mail"
                        >
                          check mail
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/reset-password-v2.html"
                          data-i18n="Reset Password"
                        >
                          reset password
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/code-verification-v2.html"
                          data-i18n="Code Verification"
                        >
                          code verification
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item">
                    <a
                      href="../pages/login-v3.html"
                      target="_blank"
                      className="pc-link"
                      data-i18n="Authentication 3"
                    >
                      Authentication 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-flag" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Maintenance">
                    Maintenance
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      target="_blank"
                      href="../pages/error-404.html"
                      data-i18n="Error 404"
                    >
                      Error 404
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      target="_blank"
                      href="../pages/error-500.html"
                      data-i18n="Error 500"
                    >
                      Error 500
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      <span data-i18n="Under construction">
                        Under construction
                      </span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/under-construction-v1.html"
                          data-i18n="Under construction 1"
                        >
                          Under Construction 1
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/under-construction-v2.html"
                          data-i18n="Under construction 2"
                        >
                          Under Construction 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      <span data-i18n="Coming-Soon">Coming soon</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/coming-soon-v1.html"
                          data-i18n="Coming-Soon 1"
                        >
                          Coming soon 1
                        </a>
                      </li>
                      <li className="pc-item">
                        <a
                          className="pc-link"
                          target="_blank"
                          href="../pages/coming-soon-v2.html"
                          data-i18n="Coming-Soon 2"
                        >
                          Coming soon 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a
                  href="../pages/contact-us.html"
                  className="pc-link"
                  target="_blank"
                >
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-24-support" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Contact Us">
                    Contact us
                  </span>
                </a>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-dollar-square" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Price">
                    Price
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../pages/price-v1.html"
                      data-i18n="Price 1"
                    >
                      Price 1
                    </a>
                  </li>
                  <li className="pc-item">
                    <a
                      className="pc-link"
                      href="../pages/price-v2.html"
                      data-i18n="Price 2"
                    >
                      Price 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a
                  href="../index_html.html"
                  className="pc-link"
                  target="_blank"
                >
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-airplane" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Landing">
                    Landing
                  </span>
                </a>
              </li>
              <li className="pc-item pc-caption">
                <label data-i18n="Other">Other</label>{" "}
                <svg className="pc-icon">
                  <use xlinkHref="#custom-notification-status" />
                </svg>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-level" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Menu levels">
                    Menu levels
                  </span>
                  <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                </a>
                <ul className="pc-submenu">
                  <li className="pc-item">
                    <a className="pc-link" href="#!" data-i18n="Level 2.1">
                      Level 2.1
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      <span data-i18n="Level 2.2">Level 2.2</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a className="pc-link" href="#!" data-i18n="Level 3.1">
                          Level 3.1
                        </a>
                      </li>
                      <li className="pc-item">
                        <a className="pc-link" href="#!" data-i18n="Level 3.2">
                          Level 3.2
                        </a>
                      </li>
                      <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link">
                          <span data-i18n="Level 3.3">Level 3.3</span>{" "}
                          <span className="pc-arrow">
                            <i data-feather="chevron-right" />
                          </span>
                        </a>
                        <ul className="pc-submenu">
                          <li className="pc-item">
                            <a
                              className="pc-link"
                              href="#!"
                              data-i18n="Level 4.1"
                            >
                              Level 4.1
                            </a>
                          </li>
                          <li className="pc-item">
                            <a
                              className="pc-link"
                              href="#!"
                              data-i18n="Level 4.2"
                            >
                              Level 4.2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">
                      <span data-i18n="Level 2.3">Level 2.3</span>{" "}
                      <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                    </a>
                    <ul className="pc-submenu">
                      <li className="pc-item">
                        <a className="pc-link" href="#!" data-i18n="Level 3.1">
                          Level 3.1
                        </a>
                      </li>
                      <li className="pc-item">
                        <a className="pc-link" href="#!" data-i18n="Level 3.2">
                          Level 3.2
                        </a>
                      </li>
                      <li className="pc-item pc-hasmenu">
                        <a href="#!" className="pc-link">
                          <span data-i18n="Level 3.3">Level 3.3</span>{" "}
                          <span className="pc-arrow">
                            <i data-feather="chevron-right" />
                          </span>
                        </a>
                        <ul className="pc-submenu">
                          <li className="pc-item">
                            <a
                              className="pc-link"
                              href="#!"
                              data-i18n="Level 4.1"
                            >
                              Level 4.1
                            </a>
                          </li>
                          <li className="pc-item">
                            <a
                              className="pc-link"
                              href="#!"
                              data-i18n="Level 4.2"
                            >
                              Level 4.2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="pc-item">
                <a href="../other/sample-page.html" className="pc-link">
                  <span className="pc-micon">
                    <svg className="pc-icon">
                      <use xlinkHref="#custom-notification-status" />
                    </svg>{" "}
                  </span>
                  <span className="pc-mtext" data-i18n="Sample Page">
                    Sample page
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
