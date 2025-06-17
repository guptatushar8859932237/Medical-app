import { useNavigate } from "react-router-dom";
import BarChart from "./Barcjart";
import MyChart from "./Chart1";
import MyPieChart from "./Piechart";
export default function Dashboard() {
  const handlenavigate = useNavigate()
  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="col-12">
          <div className="row">
            <div className="col-md-4 col-xxl-4" onClick={()=>{handlenavigate('/Admin/patient')}}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6 className="mb-0">New Patient</h6>
                    <select className="form-select rounded-3 form-select-sm w-auto">
                      <option>Today</option>
                      <option>Weekly</option>
                      <option selected="selected">Monthly</option>
                    </select>
                  </div>
                  <div className="my-3">
                  <MyChart  />
                    <h5 className="text-center mt-3">
                      $30200{" "}
                      <small className="text-primary ">
                        <i className="ti ti-arrow-up-right" /> 30.6%
                      </small>
                    </h5>
                  </div>
                  <div className="d-grid">
                    <a className="btn btn-link-primary" role="button" href="#">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xxl-3" onClick={()=>{handlenavigate('/Admin/appointment2')}}>
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">New Appointment</h5>
                    <select className="form-select rounded-3 form-select-sm w-auto">
                      <option>Today</option>
                      <option>Weekly</option>
                      <option selected="selected">Monthly</option>
                    </select>
                  </div>
                  <div className="my-3 w-100">
                    <div id="new-users-graph">
                      <MyChart />
                    </div>
                    <h5 className="text-center mt-3">
                      $30200{" "}
                      <small className="text-success">
                        <i className="ti ti-arrow-up-right" /> 30.6%
                      </small>
                    </h5>
                  </div>
                  <div className="d-grid">
                    <a className="btn btn-link-primary" role="button" href="#">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xxl-3" onClick={()=>{handlenavigate('/Admin/Pharmacy')}}   >
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">Pharmacy</h5>
                    <select className="form-select rounded-3 form-select-sm w-auto">
                      <option>Today</option>
                      <option>Weekly</option>
                      <option selected="selected">Monthly</option>
                    </select>
                  </div>
                  <div className="my-3">
                    <div id="visitors-graph">
                      <MyChart />
                    </div>
                    <h5 className="text-center mt-3">
                      $30200{" "}
                      <small className="text-danger">
                        <i className="ti ti-arrow-down-right" /> 30.6%
                      </small>
                    </h5>
                  </div>
                  <div className="d-grid">
                    <a className="btn btn-link-primary" role="button" href="#">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-12">
              <div className="row">
                <div className="col-md-6 col-xxl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="avtar avtar-s bg-light-secondary">
                          <i className="ti ti-currency-dollar f-20" />
                        </div>
                        <div className="dropdown">
                          <a
                            className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ti ti-dots-vertical f-18" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Name
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Date
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Ratting
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Unread
                            </a>
                          </div>
                        </div>
                      </div>
                      <h5 className="mb-0">$30,200.00</h5>
                      <p className="text-muted mb-0">Income</p>
                      <div className="mt-2">
                        <div id="income-graph">
                          <MyPieChart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="mb-0">Languages support</h5>
                        <div className="dropdown">
                          <a
                            className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ti ti-dots-vertical f-18" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Name
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Date
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Ratting
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Unread
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avtar avtar-xs bg-light-secondary">
                            <i className="ti ti-arrow-big-right f-18" />
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">
                            Update version{" "}
                            <span className="badge bg-light-success">
                              V1.1.0
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="mt-2 mb-3">
                        <div id="languages-graph" />
                      </div>
                      <div className="row g-2">
                        <div className="col-6">
                          <div className="d-grid">
                            <button className="btn btn-outline-secondary">
                              React
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-grid">
                            <button className="btn btn-outline-secondary">
                              Angular
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-grid">
                            <button className="btn btn-outline-secondary">
                              Bootstrap
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-grid">
                            <button className="btn btn-outline-secondary">
                              MUI
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="mb-0">Languages support</h5>
                        <div className="dropdown">
                          <a
                            className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ti ti-dots-vertical f-18" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Name
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Date
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Ratting
                            </a>{" "}
                            <a className="dropdown-item" href="#">
                              Unread
                            </a>
                          </div>
                        </div>
                      </div>
                      <BarChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
