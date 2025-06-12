import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Ract3d from "./Ract3d";
import axios from "axios";
import { baseurl } from "../../Baseurl";

export default function ManageAppointment() {
  const tableCell = (value) => <td>{value}</td>;
  const location = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [openVital, setOpenVital] = useState(false);
  const [vitaldatas, setVitaldatas] = useState([]);
  const [inpval, setInpval] = useState("");
  const [dataAppointment, setDataAppointment] = useState([]);

  const handleclick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const response = await axios.post(
        `${baseurl}appointmentByPatientId/${location?.state?.patientid}`
      );
      if (response.data.success === true) {
        setDataAppointment(response.data.data);
      } else {
        console.log("something went worng");
      }
    } catch (error) {
      console.error(
        "Error while fetching appointment data:",
        error.response?.data || error.message
      );
    }
  };

  const handleclickopenvital = () => {
    setOpenVital(true);
  };
  const handlecloseVital = () => {
    setOpenVital(false);
  };
  const services = [
    {
      sn: "221",
      doctor: "Dr Ali",
      category: "Dental",
      service: "Root Canal Treatment",
      price: "100.000BHD",
      discount: "0",
      total: "0%",
      deductible: "100.000BHD",
      copat: "30 BHD",
      coins: "30 BHD",
      status: "Pending",
    },
    {
      sn: "221",
      doctor: "Dr Ali",
      category: "Dental",
      service: "Root Canal Treatment",
      price: "100.000BHD",
      discount: "0",
      total: "0%",
      deductible: "100.000BHD",
      copat: "30 BHD",
      coins: "30 BHD",
      status: "Approved",
    },
  ];

  const insuranceCards = [
    {
      status: "Active",
      company: "Next Care Will",
      policy: "345683246",
      patient: "John Ward",
      issue: "31-09-25",
      expiry: "31-09-25",
      deductible: "3000",
      copatient: "20%",
      coins: "50%",
    },
    {
      status: "Expired",
      company: "Next Care Will",
      policy: "345683246",
      patient: "John Ward",
      issue: "31-09-25",
      expiry: "31-09-25",
      deductible: "3000",
      copatient: "20%",
      coins: "50%",
    },
  ];
  const invoices = [
    {
      id: "INV221",
      date: "xx/MM/yy",
      services: "P221P224#A22S",
      amount: "230.00BHD",
      vat: "10.00BHD",
      discount: "0",
      insurance: "No",
      status: "Paid",
    },
    {
      id: "INV221",
      date: "xx/MM/yy",
      services: "P221P224#A22S",
      amount: "230.00BHD",
      vat: "10.00BHD",
      discount: "0",
      insurance: "No",
      status: "Paid",
    },
    {
      id: "INV221",
      date: "xx/MM/yy",
      services: "P221P224#A22S",
      amount: "230.00BHD",
      vat: "10.00BHD",
      discount: "0",
      insurance: "No",
      status: "Paid",
    },
  ];

  const paymentPlans = [
    { sn: 1, name: "Ortho", duration: "600.0", paid: "18", remaining: "200" },
  ];

  const paymentInvoices = [
    {
      sn: 32,
      invoiceId: "INV221",
      date: "xx/MM/yy",
      amount: "230.00BHD",
      method: "Cash",
      transaction: "C3467667",
      cashier: "Eikane",
    },
  ];

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInpval({ ...inpval, [name]: value });
  };

  const handlesavevital = async () => {
    try {
      if (!location?.state?.patientid || !inpval.nurse || !inpval.recorded_at) {
        console.warn("Missing required fields");
        alert("Please fill in all required fields.");
        return;
      }
      const dataPost = {
        patient_id: parseInt(location?.state?.patientid),
        nurse: inpval.nurse,
        recorded_at: inpval.recorded_at,
        blood_pressure_systolic: inpval.blood_pressure_systolic,
        blood_pressure_diastolic: inpval.blood_pressure_diastolic,
        heart_rate: inpval.heart_rate,
        respiratory_rate: inpval.respiratory_rate,
        temperature: inpval.temperature,
        weight: inpval.weight,
        height: inpval.height,
        bmi: inpval.bmi,
        oxygen_saturation: inpval.oxygen_saturation,
        notes: inpval.notes,
      };

      const response = await axios.post(
        `${baseurl}recordPatientVitals`,
        dataPost
      );

      // Optional: check status and show success
      if (response.status === 200 || response.status === 201) {
        handlecloseVital();
        console.log("Vitals recorded successfully:", response.data);
        alert("Vitals saved successfully.");
      } else {
        console.warn("Unexpected response:", response);
        alert("Unexpected server response. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // Backend responded with error
        console.error("Error response:", error.response.data);
        alert(
          `Error: ${error.response.data.message || "Something went wrong"}`
        );
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
        alert(
          "No response from server. Please check your internet connection."
        );
      } else {
        // Other errors
        console.error("Error setting up request:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    getDataa();
  }, []);

  const getDataa = async () => {
    try {
      const response = await axios.get(
        `${baseurl}getPatientVitalsByPatientId/${location?.state?.patientid}`
      );

      if (response.data?.success === true) {
        console.log("Vitals fetched successfully:", response.data);
        setVitaldatas(response.data.vitals);
      } else {
        console.warn("Vitals not found or invalid status:", response.data);
        alert("No vitals data found for this patient.");
      }
    } catch (error) {
      if (error.response) {
        console.error("API error:", error.response.data);
        alert(
          `Error: ${error.response.data.message || "Failed to fetch vitals."}`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response from server. Check your internet connection.");
      } else {
        console.error("Error in request setup:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="pc-container">
      <div className="pc-content">
        {/* [ Main Content ] start */}
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary my-2 px-4 mx-1"
            onClick={() => {
              navigate("/Admin/Addappointment");
            }}
          >
            New Appointment{" "}
          </button>
          <button
            className="btn btn-link my-2 px-4 mx-1 border"
            onClick={handleclick}
          >
            Plan Appointment{" "}
          </button>
        </div>

        <div className="container mt-5">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="personaldata-tab"
                data-bs-toggle="tab"
                data-bs-target="#personaldata"
                type="button"
                role="tab"
                aria-controls="personaldata"
                aria-selected="false"
              >
                Personal Data
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="Appointment-tab"
                data-bs-toggle="tab"
                data-bs-target="#Appointment"
                type="button"
                role="tab"
                aria-controls="Appointment"
                aria-selected="false"
              >
                Appointment
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="vitalsings-tab"
                data-bs-toggle="tab"
                data-bs-target="#vitalsings"
                type="button"
                role="tab"
                aria-controls="vitalsings"
                aria-selected="false"
              >
                Vital Sings
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="medicalhistory-tab"
                data-bs-toggle="tab"
                data-bs-target="#medicalhistory"
                type="button"
                role="tab"
                aria-controls="medicalhistory"
                aria-selected="false"
              >
                Medical
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="dental-tab"
                data-bs-toggle="tab"
                data-bs-target="#dental"
                type="button"
                role="tab"
                aria-controls="dental"
                aria-selected="false"
              >
                Dental
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="service-tab"
                data-bs-toggle="tab"
                data-bs-target="#service"
                type="button"
                role="tab"
                aria-controls="service"
                aria-selected="false"
              >
                Service
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="insurance-tab"
                data-bs-toggle="tab"
                data-bs-target="#insurance"
                type="button"
                role="tab"
                aria-controls="insurance"
                aria-selected="true"
              >
                Insurance
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="billing-tab"
                data-bs-toggle="tab"
                data-bs-target="#billing"
                type="button"
                role="tab"
                aria-controls="billing"
                aria-selected="false"
              >
                Billing
              </button>
            </li>
          </ul>

          <div
            className="tab-content p-3 border border-top-0"
            id="myTabContent"
          >
            <div
              className="tab-pane fade show active"
              id="insurance"
              role="tabpanel"
              aria-labelledby="insurance-tab"
            >
              <div className="col-12">
                <div className="card table-card">
                  <div className="card-header">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <h5 className="mb-3 mb-sm-0">Insurance </h5>
                      {/* <div><a href="../admins/course-teacher-apply.html" className="btn btn-outline-secondary">Apply Teacher List</a> <a href="../admins/course-teacher-add.html" className="btn btn-primary">Add Teacher</a></div> */}
                    </div>
                  </div>
                  <div className="container-fluid p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <button className="btn btn-primary">New Claims</button>
                      <button className="btn btn-primary">Add Insurance</button>
                    </div>

                    <div className="row">
                      {/* Left: Table */}
                      <div className="col-lg-9">
                        <div className="card border-0 rounded-4 shadow-sm">
                          <div className="card-header bg-white fw-bold border-bottom-0 d-flex justify-content-between align-items-center">
                            <span>Services History</span>
                            <span>Balance: 300BHD</span>
                          </div>
                          <div className="card-body p-0">
                            <div className="px-3 py-2 fw-semibold">
                              Claims #3290{" "}
                              <span className="text-muted">(Sent)</span>
                            </div>
                            <div className="table-responsive">
                              <table className="table table-bordered table-hover mb-0 text-center">
                                <thead className="table-primary">
                                  <tr>
                                    <th>Sn</th>
                                    <th>Doctor</th>
                                    <th>Category</th>
                                    <th>Service</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Total</th>
                                    <th>Deductable</th>
                                    <th>Co-Pat</th>
                                    <th>Co-Ins</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {services.map((item, index) => (
                                    <tr key={index}>
                                      <td>{item.sn}</td>
                                      <td>{item.doctor}</td>
                                      <td>{item.category}</td>
                                      <td>{item.service}</td>
                                      <td>{item.price}</td>
                                      <td>{item.discount}</td>
                                      <td>{item.total}</td>
                                      <td>{item.deductible}</td>
                                      <td>{item.copat}</td>
                                      <td>{item.coins}</td>
                                      <td>{item.status}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            {/* Table Footer Action */}
                            <div className="d-flex justify-content-between align-items-center px-3 py-2">
                              <span>Total: 132 BHD</span>
                              <div className="d-flex gap-2">
                                <i className="bi bi-printer-fill btn btn-light border"></i>
                                <i className="bi bi-pencil-fill btn btn-light border"></i>
                                <i className="bi bi-trash-fill btn btn-light border text-danger"></i>
                                <button className="btn btn-primary">
                                  Send
                                </button>
                                <button className="btn btn-outline-primary">
                                  Pay
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Insurance Cards */}
                      <div className="col-lg-3 mt-3 mt-lg-0">
                        {insuranceCards.map((card, idx) => (
                          <div
                            className={`border rounded-3 p-3 mb-3 shadow-sm`}
                            key={idx}
                            style={{
                              backgroundColor:
                                card.status === "Active"
                                  ? "#fef5e6"
                                  : "#fff7f5",
                            }}
                          >
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <strong>
                                Insurance Card {idx + 1}
                                <span
                                  className={`ms-2 badge bg-${
                                    card.status === "Active"
                                      ? "success"
                                      : "secondary"
                                  }`}
                                >
                                  Status {card.status}
                                </span>
                              </strong>
                              <i className="bi bi-pencil-square"></i>
                            </div>
                            <p className="mb-1">
                              <strong>Company Name:</strong> {card.company}
                            </p>
                            <p className="mb-1">
                              <strong>Policy Number:</strong> {card.policy}
                            </p>
                            <p className="mb-1">
                              <strong>Patient Name:</strong> {card.patient}
                            </p>
                            <p className="mb-1">
                              <strong>Issue Date:</strong> {card.issue}
                            </p>
                            <p className="mb-1">
                              <strong>Expiry Date:</strong> {card.expiry}
                            </p>
                            <p className="mb-1">
                              <strong>Deductable:</strong> {card.deductible}
                            </p>
                            <p className="mb-1">
                              <strong>Co-Patient:</strong> {card.copatient}
                            </p>
                            <p className="mb-1">
                              <strong>Co-Insurance:</strong> {card.coins}
                            </p>
                            <p className="mb-0">
                              <strong>Scan Copy:</strong>{" "}
                              <i className="bi bi-paperclip"></i>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="billing"
              role="tabpanel"
              aria-labelledby="billing-tab"
            >
              <div className="col-12">
                <div className="card table-card">
                  <div className="card-header">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <h5 className="mb-3 mb-sm-0">Billing </h5>
                      {/* <div><a href="../admins/course-teacher-apply.html" className="btn btn-outline-secondary">Apply Teacher List</a> <a href="../admins/course-teacher-add.html" className="btn btn-primary">Add Teacher</a></div> */}
                    </div>
                  </div>
                  <div
                    className="container-fluid py-4"
                    style={{
                      backgroundColor: "#f0f2f5",
                      minHeight: "100vh",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {/* Link to Bootstrap 5 CSS CDN */}
                    <link
                      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                    />
                    {/* Link to Bootstrap 5 JS CDN (bundle includes Popper.js) */}
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

                    {/* Main Row */}
                    <div className="row g-4">
                      {/* Left Column - Invoices Table */}
                      <div className="col-lg-8">
                        <div className="card shadow-sm rounded-4">
                          <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center rounded-top-4">
                            <h5 className="mb-0 fw-bold">Invoices</h5>
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-light rounded-circle p-2 me-2 shadow-sm"
                                title="Settings"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-settings"
                                >
                                  <circle cx="12" cy="12" r="3"></circle>
                                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                              </button>
                              <button
                                className="btn btn-light rounded-circle p-2 me-3 shadow-sm"
                                title="Filter"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-filter"
                                >
                                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                </svg>
                              </button>
                              <button className="btn btn-primary rounded-pill px-3 py-2 shadow-sm fw-bold">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-plus me-1"
                                >
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                New Invoice
                              </button>
                            </div>
                          </div>
                          <div className="card-body p-0">
                            <div className="table-responsive">
                              <table className="table table-hover mb-0">
                                <thead className="bg-light">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3 ps-4"
                                    >
                                      Inv#
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Date
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Services
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Amount
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      VAT
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Discount
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Insurance
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Status
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3 text-center"
                                    >
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {invoices.map((invoice, index) => (
                                    <tr key={index}>
                                      <td className="py-3 ps-4">
                                        {invoice.id}
                                      </td>
                                      <td className="py-3">{invoice.date}</td>
                                      <td className="py-3">
                                        {invoice.services}
                                      </td>
                                      <td className="py-3">{invoice.amount}</td>
                                      <td className="py-3">{invoice.vat}</td>
                                      <td className="py-3">
                                        {invoice.discount}
                                      </td>
                                      <td className="py-3">
                                        {invoice.insurance}
                                      </td>
                                      <td className="py-3">
                                        <span className="badge bg-success-subtle text-success fw-normal px-3 py-2 rounded-pill">
                                          {invoice.status}
                                        </span>
                                      </td>
                                      <td className="py-3 text-center">
                                        <button
                                          className="btn btn-link p-0 text-decoration-none me-2"
                                          title="View"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-eye text-primary"
                                          >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                              cx="12"
                                              cy="12"
                                              r="3"
                                            ></circle>
                                          </svg>
                                        </button>
                                        <button
                                          className="btn btn-link p-0 text-decoration-none me-2"
                                          title="Print"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-printer text-secondary"
                                          >
                                            <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                            <rect
                                              x="6"
                                              y="14"
                                              width="12"
                                              height="8"
                                            ></rect>
                                          </svg>
                                        </button>
                                        <button
                                          className="btn btn-link p-0 text-decoration-none"
                                          title="Delete"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-trash-2 text-danger"
                                          >
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line
                                              x1="10"
                                              y1="11"
                                              x2="10"
                                              y2="17"
                                            ></line>
                                            <line
                                              x1="14"
                                              y1="11"
                                              x2="14"
                                              y2="17"
                                            ></line>
                                          </svg>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Summary & Payment Plans */}
                      <div className="col-lg-4">
                        {/* Summary Card */}
                        <div className="card shadow-sm rounded-4 mb-4">
                          <div className="card-header bg-primary text-white border-0 py-3 d-flex justify-content-between align-items-center rounded-top-4">
                            <h5 className="mb-0 fw-bold">Summary</h5>
                            <button
                              className="btn btn-link p-0 text-white"
                              title="Edit Summary"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="card-body bg-white rounded-bottom-4 p-3">
                            <p className="mb-2">
                              <span className="fw-semibold">Name :</span> Ahmed
                              Ali Khan
                            </p>
                            <p className="mb-2">
                              <span className="fw-semibold">
                                Pending Balance :
                              </span>{" "}
                              50.000 BHD
                            </p>
                            <p className="mb-2">
                              <span className="fw-semibold">
                                Total Payments :
                              </span>{" "}
                              450.000 BHD
                            </p>
                            <p className="mb-2">
                              <span className="fw-semibold">
                                Insurance Balance :
                              </span>{" "}
                              0.0 BHD
                            </p>
                            <p className="mb-0">
                              <span className="fw-semibold">
                                Last Payment :
                              </span>{" "}
                              03/02/2025
                            </p>
                          </div>
                        </div>

                        {/* Payment Plans Card */}
                        <div className="card shadow-sm rounded-4">
                          <div className="card-header bg-primary text-white border-0 py-3 d-flex justify-content-between align-items-center rounded-top-4">
                            <h5 className="mb-0 fw-bold">Payment Plans</h5>
                            <button className="btn btn-light rounded-pill px-3 py-2 shadow-sm fw-bold">
                              Payment Plan
                            </button>
                          </div>
                          <div className="card-body p-0 bg-white rounded-bottom-4">
                            <div className="table-responsive">
                              <table className="table table-hover mb-0">
                                <thead className="bg-light">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3 ps-4"
                                    >
                                      Sn
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Name
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Duration
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Paid
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Remaining
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3 text-center"
                                    >
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {paymentPlans.map((plan, index) => (
                                    <tr key={index}>
                                      <td className="py-3 ps-4">{plan.sn}</td>
                                      <td className="py-3">{plan.name}</td>
                                      <td className="py-3">{plan.duration}</td>
                                      <td className="py-3">{plan.paid}</td>
                                      <td className="py-3">{plan.remaining}</td>
                                      <td className="py-3 text-center">
                                        <button
                                          className="btn btn-link p-0 text-decoration-none me-2"
                                          title="View"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-eye text-primary"
                                          >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                              cx="12"
                                              cy="12"
                                              r="3"
                                            ></circle>
                                          </svg>
                                        </button>
                                        <button
                                          className="btn btn-link p-0 text-decoration-none"
                                          title="Edit"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-edit-2 text-secondary"
                                          >
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                          </svg>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second Row - Payment Invoices Table */}
                    <div className="row mt-4">
                      <div className="col-12">
                        <div className="card shadow-sm rounded-4">
                          <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center rounded-top-4">
                            <h5 className="mb-0 fw-bold">Payment Invoices</h5>
                            <button className="btn btn-primary rounded-pill px-3 py-2 shadow-sm fw-bold">
                              Payment
                            </button>
                          </div>
                          <div className="card-body p-0">
                            <div className="table-responsive">
                              <table className="table table-hover mb-0">
                                <thead className="bg-light">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3 ps-4"
                                    >
                                      Sn
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Invoice ID
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Date
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Amount
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Method
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Transaction
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3"
                                    >
                                      Cashier
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-muted fw-normal py-3 text-center"
                                    >
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {paymentInvoices.map((payment, index) => (
                                    <tr key={index}>
                                      <td className="py-3 ps-4">
                                        {payment.sn}
                                      </td>
                                      <td className="py-3">
                                        {payment.invoiceId}
                                      </td>
                                      <td className="py-3">{payment.date}</td>
                                      <td className="py-3">{payment.amount}</td>
                                      <td className="py-3">{payment.method}</td>
                                      <td className="py-3">
                                        {payment.transaction}
                                      </td>
                                      <td className="py-3">
                                        {payment.cashier}
                                      </td>
                                      <td className="py-3 text-center">
                                        <button
                                          className="btn btn-link p-0 text-decoration-none me-2"
                                          title="View"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-eye text-primary"
                                          >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                              cx="12"
                                              cy="12"
                                              r="3"
                                            ></circle>
                                          </svg>
                                        </button>
                                        <button
                                          className="btn btn-link p-0 text-decoration-none"
                                          title="Edit"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-edit-2 text-secondary"
                                          >
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                          </svg>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="personaldata"
              role="tabpanel"
              aria-labelledby="personaldata-tab"
            >
              <div className="col-12">
                <div className="card table-card">
                  <div className="card-header">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <h5 className="mb-3 mb-sm-0">User Details </h5>
                      {/* <div><a href="../admins/course-teacher-apply.html" className="btn btn-outline-secondary">Apply Teacher List</a> <a href="../admins/course-teacher-add.html" className="btn btn-primary">Add Teacher</a></div> */}
                    </div>
                  </div>

                  <div
                    className="container-fluid p-4"
                    style={{ backgroundColor: "#eaf4fe" }}
                  >
                    <div className="row g-3">
                      {/* Left Section */}
                      <div className="col-md-9">
                        {/* Personal Info */}
                        <div className="card mb-3">
                          <div className="card-body p-5">
                            <h5 className="card-title">Personal Info</h5>
                            <div className="row g-3">
                              <div className="col-md-4">
                                <label className="form-label">
                                  File Number
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Medical ID</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" />
                              </div>

                              <div className="col-md-2">
                                <label className="form-label d-block">
                                  Gender
                                </label>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="male"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="male"
                                  >
                                    Male
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="female"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="female"
                                  >
                                    Female
                                  </label>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <label className="form-label">Age</label>
                                <input type="number" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">
                                  Date of Birth
                                </label>
                                <input type="date" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Civil ID</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">
                                  Passport ID
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">
                                  Nationality
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Contact Details */}
                        <div className="card mb-3 p-5">
                          <div className="card-body">
                            <h5 className="card-title">Contact Details</h5>
                            <div className="row g-3">
                              <div className="col-md-4">
                                <label className="form-label">Mobile</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" />
                              </div>
                              <div className="col-md-12">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Section */}
                      <div className="col-md-3">
                        {/* Visit Info */}
                        <div className="card mb-3 ">
                          <div className="card-body p-3">
                            <p>
                              <strong>Last Visit:</strong> 21-03-2025
                            </p>
                            <p>
                              <strong>First Visit:</strong> 21-03-2025
                            </p>
                            <p>
                              <strong>File Opening:</strong> 21-03-2025
                            </p>
                            <label className="form-label">Primary Doctor</label>
                            <select className="form-select">
                              <option>Select</option>
                              <option>Dr. A</option>
                              <option>Dr. B</option>
                            </select>
                          </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="card mb-3">
                          <div className="card-body p-3">
                            <h5 className="card-title">Emergency Contact</h5>
                            <input
                              type="text"
                              className="form-control mb-2"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              className="form-control mb-2"
                              placeholder="Relation"
                            />
                            <input
                              type="text"
                              className="form-control mb-2"
                              placeholder="Phone 1"
                            />
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Phone 2"
                            />
                          </div>
                        </div>

                        {/* Documents */}
                        <div className="card">
                          <div className="card-body p-3">
                            <h5 className="card-title">Documents</h5>
                            <div className="mb-3">
                              <label className="form-label">CPR Scan</label>
                              <input type="file" className="form-control" />
                            </div>
                            <div>
                              <label className="form-label">
                                Passport Copy
                              </label>
                              <input type="file" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-end gap-3 mt-4">
                      <button className="btn btn-primary">Save</button>
                      <button className="btn btn-warning">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="Appointment"
              role="tabpanel"
              aria-labelledby="Appointment-tab"
            >
              <div className="col-12">
                <div className="card table-card">
                  <div className="card-header">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <h5 className="mb-3 mb-sm-0">Appointment </h5>
                      {/* <div><a href="../admins/course-teacher-apply.html" className="btn btn-outline-secondary">Apply Teacher List</a> <a href="../admins/course-teacher-add.html" className="btn btn-primary">Add Teacher</a></div> */}
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <div className="table-responsive">
                      <table className="table table-hover" id="pc-dt-simple">
                        <thead>
                          <tr>
                            <th>Doctor Name</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Reason</th>
                            <th>Appointment Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataAppointment && dataAppointment.length > 0 ? (
                            dataAppointment.map((item, index) => {
                              console.log(item);
                              return (
                                <tr key={index}>
                                  <td>{item.doctorName}</td>
                                  <td>{item.startTime}</td>
                                  <td>{item.endTime}</td>
                                  <td>{item.reason}</td>
                                  <td>{item.status}</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="avtar avtar-xs btn-link-secondary"
                                    >
                                      <i className="ti ti-eye f-20" />
                                    </a>
                                    <a
                                      href="#"
                                      className="avtar avtar-xs btn-link-secondary"
                                    >
                                      <i className="ti ti-edit f-20" />
                                    </a>
                                    <a
                                      href="#"
                                      className="avtar avtar-xs btn-link-secondary"
                                    >
                                      <i className="ti ti-trash f-20" />
                                    </a>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td
                                colSpan="6"
                                className="text-center text-muted"
                              >
                                No data found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="vitalsings"
              role="tabpanel"
              aria-labelledby="vitalsings-tab"
            >
              <div className="col-12">
                <div className="card table-card">
                  <div className="card-header">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <h5 className="mb-3 mb-sm-0">Vital Sign </h5>
                      <div>
                        <button
                          className="btn btn-primary"
                          onClick={handleclickopenvital}
                        >
                          {" "}
                          Add Vitals
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <div className="table-responsive">
                      <table className="table table-hover" id="pc-dt-simple">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Nurse</th>
                            <th>BP</th>
                            <th>HR</th>
                            <th>Temp </th>
                            <th>RR </th>
                            <th>Weight</th>
                            <th>Height </th>
                            <th>Action </th>
                          </tr>
                        </thead>
                        <tbody>
                          {vitaldatas &&
                            vitaldatas.length > 0 &&
                            vitaldatas.map((item, index) => {
                              console.log(item);
                              return (
                                <>
                                  <tr key={index}>
                                    <td>
                                      {new Date(
                                        item.recorded_at
                                      ).toLocaleDateString("en-GB")}
                                    </td>
                                    <td>""</td>
                                    <td>{item.nurse}</td>
                                    <td>
                                      {item.blood_pressure_systolic} /{" "}
                                      {item.blood_pressure_diastolic}
                                    </td>
                                    <td>{item.heart_rate}</td>
                                    <td>{item.temperature}</td>
                                    <td>{item.respiratory_rate}</td>
                                    <td>{item.weight}</td>
                                    <td>{item.height}</td>
                                    <td>
                                      <a
                                        href="#"
                                        className="avtar avtar-xs btn-link-secondary"
                                      >
                                        <i className="ti ti-eye f-20" />{" "}
                                      </a>
                                      <a
                                        href="#"
                                        className="avtar avtar-xs btn-link-secondary"
                                      >
                                        <i className="ti ti-edit f-20" />{" "}
                                      </a>
                                      <a
                                        href="#"
                                        className="avtar avtar-xs btn-link-secondary"
                                      >
                                        <i className="ti ti-trash f-20" />
                                      </a>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
                {openVital && (
                        <div
                          className="modal fade show"
                          style={{
                            backgroundColor: "rgba(0,0,0,0.5)",
                            display: "block",
                          }}
                        >
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Add Vital</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  onClick={handlecloseVital}
                                ></button>
                              </div>
                              <div className="modal-body">
                                {/* Form for adding doctor */}

                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">Nurse</label>
                                    <input
                                      type="text"
                                      name="nurse"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Recorded At
                                    </label>
                                    <input
                                      type="text"
                                      name="recorded_at"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Blood Pressure Systolic
                                    </label>
                                    <input
                                      type="text"
                                      name="blood_pressure_systolic"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Blood Pressure Diastolic
                                    </label>
                                    <input
                                      type="text"
                                      name="blood_pressure_diastolic"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Heart Rate
                                    </label>
                                    <input
                                      type="text"
                                      name="heart_rate"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Respiratory Rate
                                    </label>
                                    <input
                                      type="text"
                                      name="recorded_at"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Temperature
                                    </label>
                                    <input
                                      type="text"
                                      name="temperature"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      weight{" "}
                                    </label>
                                    <input
                                      type="text"
                                      name="weight"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">height</label>
                                    <input
                                      type="text"
                                      name="height"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">BMI</label>
                                    <input
                                      type="text"
                                      name="bmi"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Oxygen Saturation
                                    </label>
                                    <input
                                      type="text"
                                      name="oxygen_saturation"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">Notes</label>
                                    <input
                                      type="text"
                                      name="notes"
                                      onChange={handlechange}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="modal-footer my-3">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handlesavevital}
                                  >
                                    Create vital
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
            </div>
            <div
              className="tab-pane fade"
              id="medicalhistory"
              role="tabpanel"
              aria-labelledby="medicalhistory-tab"
            >
              <div className="col-12">
                <div className="card table-card">
                  <div className="card-header">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <h5 className="mb-3 mb-sm-0">Insurance </h5>
                      {/* <div><a href="../admins/course-teacher-apply.html" className="btn btn-outline-secondary">Apply Teacher List</a> <a href="../admins/course-teacher-add.html" className="btn btn-primary">Add Teacher</a></div> */}
                    </div>
                  </div>
                  <div className="container mt-4">
                    <div className="row">
                      {/* Visit History */}
                      <div className="col-md-6 mb-4">
                        <div className="card">
                          <div className="card-header">Visit History</div>
                          <div className="card-body p-0">
                            <table className="table table-sm mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th>Date</th>
                                  <th>Doctor</th>
                                  <th>Notes</th>
                                  <th>Service</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {tableCell("xx/xx/yy")}
                                  {tableCell("Dr Ali")}
                                  {tableCell("Consultation Visit for RCT")}
                                  {tableCell("RCT #1 Molar")}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Diagnosis */}
                      <div className="col-md-3 mb-4">
                        <div className="card">
                          <div className="card-header d-flex justify-content-between">
                            <span>Diagnosis (ICD-10)</span>
                            <button className="btn btn-sm btn-primary">
                              Add
                            </button>
                          </div>
                          <div className="card-body p-0">
                            <table className="table table-sm mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th>Code</th>
                                  <th>Name</th>
                                  <th>Dated</th>
                                  <th>Notes</th>
                                  <th>Edit</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[...Array(3)].map((_, i) => (
                                  <tr key={i}>
                                    {tableCell("A20")}
                                    {tableCell("Cholesterol")}
                                    {tableCell("dd/mm/yy")}
                                    {tableCell("Active")}
                                    <td>
                                      <button className="btn btn-sm btn-outline-secondary">
                                        ✏️
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Allergies */}
                      <div className="col-md-3 mb-4">
                        <div className="card">
                          <div className="card-header d-flex justify-content-between">
                            <span>Allergies</span>
                            <button className="btn btn-sm btn-primary">
                              Add
                            </button>
                          </div>
                          <div className="card-body p-0">
                            <table className="table table-sm mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th>Sn</th>
                                  <th>Allergy</th>
                                  <th>Reaction</th>
                                  <th>Reaction</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[...Array(3)].map((_, i) => (
                                  <tr key={i}>
                                    {tableCell(i + 1)}
                                    {tableCell("Penicillin")}
                                    {tableCell("N/A")}
                                    {tableCell("Active")}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {/* Chief Complaints */}
                      <div className="col-md-6 mb-4">
                        <div className="card">
                          <div className="card-header d-flex justify-content-between">
                            <span>Chief Complaints</span>
                            <button className="btn btn-sm btn-primary">
                              Add
                            </button>
                          </div>
                          <div className="card-body p-0">
                            <table className="table table-sm mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th>Date</th>
                                  <th>Doctor</th>
                                  <th>Complaint</th>
                                  <th>Area</th>
                                  <th>Vitals</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[...Array(3)].map((_, i) => (
                                  <tr key={i}>
                                    {tableCell("xx/xx/yy")}
                                    {tableCell("Dr Ali")}
                                    {tableCell("Migraine")}
                                    {tableCell("Head")}
                                    {tableCell("Open")}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Prescription */}
                      <div className="col-md-3 mb-4">
                        <div className="card">
                          <div className="card-header">Prescription</div>
                          <div className="card-body p-0">
                            <table className="table table-sm mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th>Date</th>
                                  <th>Doctor</th>
                                  <th>Drugs</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[...Array(2)].map((_, i) => (
                                  <tr key={i}>
                                    {tableCell("dd/mm/yy")}
                                    {tableCell("Dr Morson")}
                                    {tableCell("Paracetamol & Brufen")}
                                    <td>
                                      <button className="btn btn-sm btn-outline-secondary me-1">
                                        ✏️
                                      </button>
                                      <button className="btn btn-sm btn-outline-danger">
                                        🗑️
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4">
                        <div className="card">
                          <div className="card-header d-flex justify-content-between">
                            <span>X-Ray & Radiology</span>
                            <button className="btn btn-sm btn-primary">
                              Add
                            </button>
                          </div>
                          <div className="card-body p-0">
                            <table className="table table-sm mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th>Date</th>
                                  <th>File</th>
                                  <th>Type</th>
                                  <th>View</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[...Array(3)].map((_, i) => (
                                  <tr key={i}>
                                    {tableCell("xx/xx/yy")}
                                    {tableCell("MRI")}
                                    {tableCell("Scan")}
                                    {tableCell("Scan")}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="card">
                          <div className="card-header d-flex justify-content-between">
                            <span>Lab Test</span>
                            <button className="btn btn-sm btn-primary">
                              Add
                            </button>
                          </div>
                          <div className="card-body p-0">
                            <table className="table table-sm mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th>Date</th>
                                  <th>Doctor</th>
                                  <th>Complaint</th>
                                  <th>Area</th>
                                  <th>Vitals</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[...Array(2)].map((_, i) => (
                                  <tr key={i}>
                                    {tableCell("xx/xx/yy")}
                                    {tableCell("Dr Ali")}
                                    {tableCell("Migraine")}
                                    {tableCell("Head")}
                                    {tableCell("Open")}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Attachments */}
                      {["Attachment", "Consent Form", "Medical report"].map(
                        (title, i) => (
                          <div className="col-md-2 mb-4" key={i}>
                            <div className="card h-100">
                              <div className="card-header">{title}</div>
                              <div className="card-body text-center text-muted">
                                No Data
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="service"
              role="tabpanel"
              aria-labelledby="service-tab"
            >
              <div className="col-12">
                <div className="card table-card">
                  <div className="card-header">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <h5 className="mb-3 mb-sm-0">Service </h5>
                      {/* <div><a href="../admins/course-teacher-apply.html" className="btn btn-outline-secondary">Apply Teacher List</a> <a href="../admins/course-teacher-add.html" className="btn btn-primary">Add Teacher</a></div> */}
                    </div>
                  </div>
                  <div className="card-body pt-3">
                    <div className="table-responsive">
                      <table className="table table-hover" id="pc-dt-simple">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Departments</th>
                            <th>Qualification</th>
                            <th>Mobile</th>
                            <th>Joining Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img
                                    src="../assets/images/user/avatar-1.jpg"
                                    alt="user image"
                                    className="img-radius wid-40"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="mb-0">Airi Satou</h6>
                                </div>
                              </div>
                            </td>
                            <td>Developer</td>
                            <td>B.COM., M.COM.</td>
                            <td>(123) 4567 890</td>
                            <td>2023/09/12</td>
                            <td>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-eye f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-edit f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-trash f-20" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img
                                    src="../assets/images/user/avatar-2.jpg"
                                    alt="user image"
                                    className="img-radius wid-40"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="mb-0">Ashton Cox</h6>
                                </div>
                              </div>
                            </td>
                            <td>Junior Technical</td>
                            <td>B.COM., M.COM.</td>
                            <td>(123) 4567 890</td>
                            <td>2023/12/24</td>
                            <td>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-eye f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-edit f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-trash f-20" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img
                                    src="../assets/images/user/avatar-3.jpg"
                                    alt="user image"
                                    className="img-radius wid-40"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="mb-0">Bradley Greer</h6>
                                </div>
                              </div>
                            </td>
                            <td>Sales Assistant</td>
                            <td>B.A, B.C.A</td>
                            <td>(123) 4567 890</td>
                            <td>2022/09/19</td>
                            <td>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-eye f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-edit f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-trash f-20" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img
                                    src="../assets/images/user/avatar-4.jpg"
                                    alt="user image"
                                    className="img-radius wid-40"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="mb-0">Brielle Williamson</h6>
                                </div>
                              </div>
                            </td>
                            <td>JavaScript Developer</td>
                            <td>B.A, B.C.A</td>
                            <td>(123) 4567 890</td>
                            <td>2022/08/22</td>
                            <td>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-eye f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-edit f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-trash f-20" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <img
                                    src="../assets/images/user/avatar-5.jpg"
                                    alt="user image"
                                    className="img-radius wid-40"
                                  />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <h6 className="mb-0">Airi Satou</h6>
                                </div>
                              </div>
                            </td>
                            <td>Developer</td>
                            <td>B.COM., M.COM.</td>
                            <td>(123) 4567 890</td>
                            <td>2023/09/12</td>
                            <td>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-eye f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-edit f-20" />{" "}
                              </a>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-trash f-20" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="dental"
              role="tabpanel"
              aria-labelledby="dental-tab"
            >
              <h4>dental Tab</h4>
              <Ract3d />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="modal fade show"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={handleClose}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Plan Appointment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                {/* Form for adding doctor */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="doctorName" className="form-label">
                      Doctor Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="doctorName"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specialization" className="form-label">
                      Specialization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialization"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Doctor
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      )}

    
      <ToastContainer />
    </div>
  );
}
