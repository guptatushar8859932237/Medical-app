import { NavLink, useNavigate } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useEffect, useState } from "react";
import { baseurImage, baseurl } from "../../../Baseurl";
import axios from "axios";
import Swal from "sweetalert2";
export default function Patient() {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const response = await axios.get(`${baseurl}getAllPatients`);
      if (response.data.success === true) {
        console.log(response);
        setDoctor(response.data.data); // or response.data.patients if nested
      } else {
        console.error("Failed to fetch patient data:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching patient data:", error.message);
    }
  };
  const handledelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const response = await axios.delete(`${baseurl}deletePatient/${id}`);
        console.log(response.data);

        Swal.fire("Deleted!", "Patient has been deleted.", "success");
        getdata();
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Something went wrong while deleting.", "error");
      }
    }
  };

  return (
    <div className="pc-container">
      <div className="pc-content ">
        <div className="col-12">
          <div className="card table-card">
            <div className="card-header">
              <div className="d-sm-flex align-items-center justify-content-between">
                <h5 className="mb-3 mb-sm-0">Patient list</h5>
                <div>
                  <button
                    className="btn btn-primary my-2 px-4"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/Admin/addPatient");
                    }}
                  >
                    New Patient{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body pt-3">
              <div className="table-responsive">
                <table className="table table-hover" id="pc-dt-simple">
                  <thead>
                    <tr>
                      <th>Photo </th>
                      <th>File No.</th>
                      <th>Name </th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Mobile</th>
                      <th>Primary Doctor</th>
                      <th>Last Visit</th>
                      <th>Balance</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctor &&
                      doctor.length > 0 &&
                      doctor.map((item, index) => {
                        console.log(item);
                        return (
                          <tr key={index}>
                            <td>
                              <img
                                src={`${baseurImage}${item.profileImage}`}
                                alt="No Image"
                                className="img-radius wid-40"
                              />
                            </td>
                            <td className="pc-mtext">{item.fileNumber}</td>
                            <td>
                              {item.firstName} {item.lastName}
                            </td>
                            <td>{item.gender}</td>
                            <td>{item.age}</td>
                            <td>{item.mobileNumber}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <NavLink
                                to="/Admin/Manageappointment"
                                state={{ patientid: item.id }}
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-eye f-20" />{" "}
                              </NavLink>
                              <a
                                href="#"
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i className="ti ti-edit f-20" />{" "}
                              </a>
                              <div
                                style={{ cursor: "pointer" }}
                                className="avtar avtar-xs btn-link-secondary"
                              >
                                <i
                                  className="ti ti-trash f-20"
                                  onClick={() => {
                                    handledelete(item.id);
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
