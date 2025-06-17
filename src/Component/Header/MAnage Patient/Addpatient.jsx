import React, { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { baseurl } from "../../../Baseurl";
import axios from "axios";
import { toast } from "react-toastify";
const AddPatientForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    lastVisitDate: "",
    civilNumber: "",
    passportNumber: "",
    mobileNumber: "",
    email: "",
    address: "",
    fileOpenedDate: "",
    firstVisitDate: "",
    defaultDoctorId: "",
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactPhone1: "",
    emergencyContactPhone2: "",
  });
  const [doctors, setDoctors] = useState([]);
  const [files, setFiles] = useState({
    profileImage: null,
    cprScan: null,
    passportCopy: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({ ...prev, [name]: selectedFiles[0] }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formData.civilNumber) newErrors.civilNumber = "Civil ID is required";
    if (!formData.passportNumber)
      newErrors.passportNumber = "Passport number is required";
    if (!formData.mobileNumber)
      newErrors.mobileNumber = "Mobile number is required";
    if (!formData.email) newErrors.email = "Email is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      setSubmitted(false);
      return;
    }
    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("dateOfBirth", formData.dateOfBirth);
    data.append("gender", formData.gender);
    data.append("nationality", formData.nationality);
    data.append("civilIdNumber", formData.civilNumber);
    data.append("passportNumber", formData.passportNumber);
    data.append("mobileNumber", formData.mobileNumber);
    data.append("email", formData.email);
    data.append("address", formData.address || "");
    data.append("fileOpenedDate", formData.fileOpenedDate);
    data.append("firstVisitDate", formData.firstVisitDate);
    data.append("defaultDoctorId", formData.defaultDoctorId);
    data.append("emContactName", formData.emergencyContactName);
    data.append("emContactRelation", formData.emergencyContactRelation);
    data.append("emContactPhone1", formData.emergencyContactPhone1);
    data.append("emContactPhone2", formData.emergencyContactPhone2);
    data.append("lastVisitDate", formData.lastVisitDate);

    if (files.profileImage) data.append("profileImage", files.profileImage);
    if (files.cprScan) data.append("cprScan", files.cprScan);
    if (files.passportCopy) data.append("passportCopy", files.passportCopy);

    try {
      const response = await axios.post(`${baseurl}registerPatient`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success	=== true ) {
        setSubmitted(true);
        navigate("/Admin/patient");
        toast.success("Patient added successfully!");
      } else {
        alert("Submission failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert(
        "Submission failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);
  const getDoctors = async () => {
    try {
      const response = await axios.get(`${baseurl}getActiveDoctors`);
      if (response.data.success === true) {
        setDoctors(response.data.data);
      }
      else{
        console.log("epi error")
      }
    } catch (error)  {
      console.log(error)

    }
  };

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="col-12">
          <div className="card table-card">
            <div className="card-header">
              <div className="d-sm-flex align-items-center justify-content-between">
                <h5 className=" my-2">Patient list</h5>
              </div>
            </div>
            {/* [ breadcrumb ] start */}
            {/* <div className="page-header">
          <div className="page-block">
            <div className="row align-items-center">
              <div className="col-md-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/Admin/dashboard">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item">
                    <NavLink to="/Admin/patient">Manage Patient</NavLink>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Add Patient
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
            {/* <div className="page-header"></div> */}

            {/* <h2 className="mb-4 text-center">Add Patient</h2> */}
            {submitted && (
              <div className="alert alert-success">
                Patient added successfully!
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="row g-3 px-3 py-2 mb-3"
            >
              <div className="col-md-4">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-danger">{errors.firstName}</p>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-danger">{errors.lastName}</p>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="form-control"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
                {errors.dateOfBirth && (
                  <p className="text-danger">{errors.dateOfBirth}</p>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-control"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-danger">{errors.gender}</p>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  className="form-control"
                  value={formData.nationality}
                  onChange={handleChange}
                />
                {errors.nationality && (
                  <p className="text-danger">{errors.nationality}</p>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label">Civil ID Number</label>
                <input
                  type="text"
                  name="civilNumber"
                  className="form-control"
                  value={formData.civilNumber}
                  onChange={handleChange}
                />
                {errors.civilNumber && (
                  <p className="text-danger">{errors.civilNumber}</p>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label">Passport Number</label>
                <input
                  type="text"
                  name="passportNumber"
                  className="form-control"
                  value={formData.passportNumber}
                  onChange={handleChange}
                />
                {errors.passportNumber && (
                  <p className="text-danger">{errors.passportNumber}</p>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  className="form-control"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                {errors.mobileNumber && (
                  <p className="text-danger">{errors.mobileNumber}</p>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>

              <div className="col-md-4">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">File Opened Date</label>
                <input
                  type="date"
                  name="fileOpenedDate"
                  className="form-control"
                  value={formData.fileOpenedDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">First Visit Date</label>
                <input
                  type="date"
                  name="firstVisitDate"
                  className="form-control"
                  value={formData.firstVisitDate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Default Doctor ID</label><br/>
                <select    name="defaultDoctorId"
                  className="form-control"
                  value={formData.defaultDoctorId}
                  onChange={handleChange}>
                  {
                    doctors && doctors.length>0 && doctors.map((item,index)=>{
                      console.log(item)  
                      return(

                          <>
                          <option value={item.id}>{item?.fullName}</option>
                          </>
                        )
                    })
                  }
                </select>
                {/* <input
                  type="text"
                  name="defaultDoctorId"
                  className="form-control"
                  value={formData.defaultDoctorId}
                  onChange={handleChange}
                /> */}
              </div>
              <div className="col-md-4">
                <label className="form-label">Emergency Contact Name</label>
                <input
                  type="text"
                  name="emergencyContactName"
                  className="form-control"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Emergency Contact Relation</label>
                <input
                  type="text"
                  name="emergencyContactRelation"
                  className="form-control"
                  value={formData.emergencyContactRelation}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Emergency Phone 1</label>
                <input
                  type="text"
                  name="emergencyContactPhone1"
                  className="form-control"
                  value={formData.emergencyContactPhone1}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Emergency Phone 2</label>
                <input
                  type="text"
                  name="emergencyContactPhone2"
                  className="form-control"
                  value={formData.emergencyContactPhone2}
                  onChange={handleChange}
                />
              </div>

              {/* File Upload Fields */}
              <div className="col-md-4">
                <label className="form-label">Profile Image</label>
                <input
                  type="file"
                  name="profileImage"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">CPR Scan</label>
                <input
                  type="file"
                  name="cprScan"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Passport Copy</label>
                <input
                  type="file"
                  name="passportCopy"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>
                  <div className="col-md-4">
                <label className="form-label">First Visit Date</label>
                <input
                  type="date"
                  name="lastVisitDate"
                  className="form-control"
                  value={formData.lastVisitDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AddPatientForm;
