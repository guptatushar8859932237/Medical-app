import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseurImage, baseurl } from "../../../Baseurl";
import axios from "axios";
import Swal from "sweetalert2";

export default function Patient() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const response = await axios.get(`${baseurl}getAllPatients`);
      if (response.data.success === true) {
        setPatients(response.data.data);
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
        await axios.delete(`${baseurl}deletePatient/${id}`);
        Swal.fire("Deleted!", "Patient has been deleted.", "success");
        getdata();
      } catch (error) {
        Swal.fire("Error!", "Something went wrong while deleting.", "error");
      }
    }
  };

  // Filter + Pagination Logic
  const filteredPatients = patients.filter(
    (item) =>
      `${item.firstName} ${item.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.fileNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mobileNumber?.toString().includes(searchTerm) ||
      item.fileNumber?.toString().includes(searchTerm) ||
      item.gender?.toString().includes(searchTerm) ||
      item.primaryDoctor?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirst, indexOfLast);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search
  };

  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="col-12">
          <div className="col-3">
            <input
              type="text"
              placeholder="Search by name, or mobile"
              className="form-control mb-3"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="card table-card">
            <div className="card-header">
              <div className="d-sm-flex align-items-center justify-content-between">
                <h5 className="mb-3 mb-sm-0">Patient list</h5>
                <button
                  className="btn btn-primary px-4"
                  onClick={() => navigate("/Admin/addPatient")}
                >
                  New Patient
                </button>
              </div>
            </div>

            <div className="card-body pt-3">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>File No.</th>
                      <th>Name</th>
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
                    {currentPatients.length > 0 ? (
                      currentPatients.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <img
                              src={`${baseurImage}${item.profileImage}`}
                              alt="No Img"
                              className="img-radius wid-40"
                            />
                          </td>
                          <td>{item.fileNumber}</td>
                          <td>
                            {item.firstName} {item.lastName}
                          </td>
                          <td>{item.gender}</td>
                          <td>{item.age}</td>
                          <td>{item.mobileNumber}</td>
                          <td>{item.primaryDoctor || "-"}</td>
                          <td>
                            {item.lastVisitDate &&
                            !isNaN(new Date(item.lastVisitDate))
                              ? new Date(item.lastVisitDate).toLocaleDateString(
                                  "en-GB"
                                )
                              : "-"}
                          </td>
                          <td>{item.balance || "-"}</td>
                          <td>
                            <NavLink
                              to="/Admin/Manageappointment"
                              state={{ patientid: item.id }}
                              className="avtar avtar-xs btn-link-secondary"
                            >
                              <i className="ti ti-eye f-20" />
                            </NavLink>
                            <a
                              href="#"
                              className="avtar avtar-xs btn-link-secondary"
                            >
                              <i className="ti ti-edit f-20" />
                            </a>
                            <div
                              style={{ cursor: "pointer" }}
                              className="avtar avtar-xs btn-link-secondary"
                              onClick={() => handledelete(item.id)}
                            >
                              <i className="ti ti-trash f-20" />
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10" className="text-center">
                          No patients found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              {totalPages > 1 && (
                <nav>
                  <ul className="pagination justify-content-end mt-3 me-3">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          currentPage > 1 && setCurrentPage(currentPage - 1)
                        }
                      >
                        &laquo;
                      </button>
                    </li>
                    {totalPages}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          currentPage < totalPages &&
                          setCurrentPage(currentPage + 1)
                        }
                      >
                        &raquo;
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
