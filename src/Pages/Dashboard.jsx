
export default function Dashboard() {
  return (
    
   
  <div className="pc-container">
    <div className="pc-content">{/* [ breadcrumb ] start */}
      <div className="row">
        <div className="col-md-6 col-xxl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-0">New Orders</h5><select className="form-select rounded-3 form-select-sm w-auto">
                  <option>Today</option>
                  <option>Weekly</option>
                  <option selected="selected">Monthly</option>
                </select>
              </div>
              <div className="my-3">
                <div id="new-orders-graph" />
                <h5 className="text-center mt-3">$30200 <small className="text-primary"><i className="ti ti-arrow-up-right" /> 30.6%</small></h5>
              </div>
              <div className="d-grid"><a className="btn btn-link-primary" role="button" href="#">View More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-0">New Users</h5><select className="form-select rounded-3 form-select-sm w-auto">
                  <option>Today</option>
                  <option>Weekly</option>
                  <option selected="selected">Monthly</option>
                </select>
              </div>
              <div className="my-3">
                <div id="new-users-graph" />
                <h5 className="text-center mt-3">$30200 <small className="text-success"><i className="ti ti-arrow-up-right" /> 30.6%</small></h5>
              </div>
              <div className="d-grid"><a className="btn btn-link-primary" role="button" href="#">View More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="mb-0">Visitors</h5><select className="form-select rounded-3 form-select-sm w-auto">
                  <option>Today</option>
                  <option>Weekly</option>
                  <option selected="selected">Monthly</option>
                </select>
              </div>
              <div className="my-3">
                <div id="visitors-graph" />
                <h5 className="text-center mt-3">$30200 <small className="text-danger"><i className="ti ti-arrow-down-right" /> 30.6%</small></h5>
              </div>
              <div className="d-grid"><a className="btn btn-link-primary" role="button" href="#">View More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card bg-gray-800 dropbox-card mb-3">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="text-white">Dropbox Storage</h5>
                <h4 className="text-white">150GB</h4>
              </div>
              <div className="mb-3">
                <div className="avtar avtar-s"><i className="ti ti-cloud f-18" /></div>
              </div><small className="text-white">134,2GB of 150GB Users</small>
              <div className="progress mt-2 bg-transparent" style={{"height":"8px"}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{"width":"15%"}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-warning" role="progressbar" style={{"width":"20%"}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-light-primary" role="progressbar" style={{"width":"20%"}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-success" role="progressbar" style={{"width":"25%"}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
          <div className="card bg-primary available-balance-card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-0 text-white">Available Balance</p>
                  <h4 className="mb-0 text-white">$1,234.90</h4>
                </div>
                <div className="avtar"><i className="ti ti-arrows-left-right f-18" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header pb-0 pt-2">
              <ul className="nav nav-tabs analytics-tab" id="myTab" role="tablist">
                <li className="nav-item" role="presentation"><button className="nav-link active" id="analytics-tab-1" data-bs-toggle="tab" data-bs-target="#analytics-tab-1-pane" type="button" role="tab" aria-controls="analytics-tab-1-pane" aria-selected="true">Overview</button></li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="analytics-tab-2" data-bs-toggle="tab" data-bs-target="#analytics-tab-2-pane" type="button" role="tab" aria-controls="analytics-tab-2-pane" aria-selected="false">Marketing</button></li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="analytics-tab-3" data-bs-toggle="tab" data-bs-target="#analytics-tab-3-pane" type="button" role="tab" aria-controls="analytics-tab-3-pane" aria-selected="false">Project</button></li>
                <li className="nav-item" role="presentation"><button className="nav-link" id="analytics-tab-4" data-bs-toggle="tab" data-bs-target="#analytics-tab-4-pane" type="button" role="tab" aria-controls="analytics-tab-4-pane" aria-selected="false">Order</button></li>
              </ul>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-7 col-xl-8">
                  <ul className="list-inline mb-3 d-flex align-items-center justify-content-end">
                    <li className="list-inline-item">
                      <div className="d-flex"><button type="button" className="btn btn-sm me-1 btn-secondary">This week</button> <button type="button" className="btn btn-sm me-1 btn-light">Last week</button>
                      </div>
                    </li>
                    <li className="list-inline-item"><a href="#" className="avtar avtar-s btn-link-secondary border border-secondary"><i className="ti ti-external-link f-18" /></a></li>
                    <li className="list-inline-item"><a href="#" className="avtar avtar-s btn-link-secondary border border-secondary"><i className="ti ti-arrows-diagonal f-18" /></a></li>
                    <li className="list-inline-item">
                      <div className="dropdown"><a href="#" className="avtar avtar-s btn-link-secondary border border-secondary dropdown-toggle arrow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots f-18" /></a>
                        <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Name</a> <a className="dropdown-item" href="#">Date</a> <a className="dropdown-item" href="#">Ratting</a> <a className="dropdown-item" href="#">Unread</a></div>
                      </div>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="analytics-tab-1-pane" role="tabpanel" aria-labelledby="analytics-tab-1" tabIndex={0}>
                      <div id="overview-chart-1" />
                    </div>
                    <div className="tab-pane fade" id="analytics-tab-2-pane" role="tabpanel" aria-labelledby="analytics-tab-2" tabIndex={0}>
                      <div id="overview-chart-2" />
                    </div>
                    <div className="tab-pane fade" id="analytics-tab-3-pane" role="tabpanel" aria-labelledby="analytics-tab-3" tabIndex={0}>
                      <div id="overview-chart-3" />
                    </div>
                    <div className="tab-pane fade" id="analytics-tab-4-pane" role="tabpanel" aria-labelledby="analytics-tab-4" tabIndex={0}>
                      <div id="overview-chart-4" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xl-4">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avtar avtar-s bg-light-secondary"><i className="ti ti-chart-bar f-20" /></div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="row g-1">
                            <div className="col-6">
                              <p className="text-muted mb-1">Total Sales</p>
                              <h6 className="mb-0">1,800</h6>
                            </div>
                            <div className="col-6 text-end">
                              <h6 className="mb-1">- 245</h6>
                              <p className="text-danger mb-0"><i className="ti ti-arrow-down-left" /> 30.6%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avtar avtar-s bg-light-secondary"><i className="ti ti-chart-arrows-vertical f-20" /></div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="row g-1">
                            <div className="col-6">
                              <p className="text-muted mb-1">Revenue</p>
                              <h6 className="mb-0">$5667</h6>
                            </div>
                            <div className="col-6 text-end">
                              <h6 className="mb-1">+$2100</h6>
                              <p className="text-success mb-0"><i className="ti ti-arrow-up-right" /> 30.6%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avtar avtar-s bg-light-secondary"><i className="ti ti-shopping-cart f-20" /></div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="row g-1">
                            <div className="col-6">
                              <p className="text-muted mb-1">Abandon Cart</p>
                              <h6 className="mb-0">128</h6>
                            </div>
                            <div className="col-6 text-end">
                              <h6 className="mb-1">-26</h6>
                              <p className="text-warning mb-0"><i className="ti ti-arrows-left-right" /> 5%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avtar avtar-s bg-light-secondary"><i className="ti ti-ad f-20" /></div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="row g-1">
                            <div className="col-6">
                              <p className="text-muted mb-1">Ads Spent</p>
                              <h6 className="mb-0">$2500</h6>
                            </div>
                            <div className="col-6 text-end">
                              <h6 className="mb-1">$200</h6>
                              <p className="text-success mb-0"><i className="ti ti-arrow-up-right" /> 10.6%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
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
                    <div className="avtar avtar-s bg-light-secondary"><i className="ti ti-currency-dollar f-20" /></div>
                    <div className="dropdown"><a className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical f-18" /></a>
                      <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Name</a> <a className="dropdown-item" href="#">Date</a> <a className="dropdown-item" href="#">Ratting</a> <a className="dropdown-item" href="#">Unread</a></div>
                    </div>
                  </div>
                  <h5 className="mb-0">$30,200.00</h5>
                  <p className="text-muted mb-0">Income</p>
                  <div className="mt-2">
                    <div id="income-graph" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Languages support</h5>
                    <div className="dropdown"><a className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical f-18" /></a>
                      <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Name</a> <a className="dropdown-item" href="#">Date</a> <a className="dropdown-item" href="#">Ratting</a> <a className="dropdown-item" href="#">Unread</a></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avtar avtar-xs bg-light-secondary"><i className="ti ti-arrow-big-right f-18" /></div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">Update version <span className="badge bg-light-success">V1.1.0</span></h6>
                    </div>
                  </div>
                  <div className="mt-2 mb-3">
                    <div id="languages-graph" />
                  </div>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="d-grid"><button className="btn btn-outline-secondary">React</button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-grid"><button className="btn btn-outline-secondary">Angular</button></div>
                    </div>
                    <div className="col-6">
                      <div className="d-grid"><button className="btn btn-outline-secondary">Bootstrap</button></div>
                    </div>
                    <div className="col-6">
                      <div className="d-grid"><button className="btn btn-outline-secondary">MUI</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Overview Product</h5>
                <div className="dropdown"><a className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical f-18" /></a>
                  <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Name</a> <a className="dropdown-item" href="#">Date</a> <a className="dropdown-item" href="#">Ratting</a> <a className="dropdown-item" href="#">Unread</a></div>
                </div>
              </div>
              <div className="my-3">
                <div id="overview-product-graph" />
              </div>
              <div className="row g-3 text-center">
                <div className="col-6 col-lg-4 col-xxl-4">
                  <div className="overview-product-legends">
                    <p className="text-dark mb-1"><span>Apps</span></p>
                    <h6 className="mb-0">10+</h6>
                  </div>
                </div>
                <div className="col-6 col-lg-4 col-xxl-4">
                  <div className="overview-product-legends">
                    <p className="text-dark mb-1"><span>Other</span></p>
                    <h6 className="mb-0">5+</h6>
                  </div>
                </div>
                <div className="col-6 col-lg-4 col-xxl-4">
                  <div className="overview-product-legends">
                    <p className="text-secondary mb-1"><span>Widgets</span></p>
                    <h6 className="mb-0">150+</h6>
                  </div>
                </div>
                <div className="col-6 col-lg-4 col-xxl-4">
                  <div className="overview-product-legends">
                    <p className="text-secondary mb-1"><span>Forms</span></p>
                    <h6 className="mb-0">50+</h6>
                  </div>
                </div>
                <div className="col-6 col-lg-4 col-xxl-4">
                  <div className="overview-product-legends">
                    <p className="text-primary mb-1"><span>Components</span></p>
                    <h6 className="mb-0">200+</h6>
                  </div>
                </div>
                <div className="col-6 col-lg-4 col-xxl-4">
                  <div className="overview-product-legends">
                    <p className="text-primary mb-1"><span>Pages</span></p>
                    <h6 className="mb-0">150+</h6>
                  </div>
                </div>
              </div>
              <div className="row g-2 text-center mt-4">
                <div className="col-sm-6">
                  <div className="d-grid"><button className="btn btn-outline-secondary">View All</button>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-grid"><button className="btn btn-primary">Create new Page</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-md-12">
          <div className="row">
            <div className="col-md-6 col-xxl-12">
              <div className="card">
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Payment History</h5><a className="avtar avtar-s btn-link-secondary"><i className="ti ti-plus f-18" /></a>
                  </div>
                </div>
                <ul className="list-group list-group-flush border-top-0">
                  <li className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avtar avtar-s bg-light-secondary"><img src="../assets/images/widget/img-paypal.png" alt="img" className="img-fluid" /></div>
                      </div>
                      <div className="flex-grow-1 mx-2">
                        <p className="mb-1">Paypal</p>
                        <h6 className="mb-0">+210,000 <small className="text-success">+ 30.6%</small>
                        </h6>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="dropdown"><a className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical f-18" /></a>
                          <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Name</a> <a className="dropdown-item" href="#">Date</a> <a className="dropdown-item" href="#">Ratting</a> <a className="dropdown-item" href="#">Unread</a></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avtar avtar-s bg-light-secondary"><img src="../assets/images/widget/img-gpay.png" alt="img" className="img-fluid" /></div>
                      </div>
                      <div className="flex-grow-1 mx-2">
                        <p className="mb-1">Gpay</p>
                        <h6 className="mb-0">-$2,000 <small className="text-danger">- 30.6%</small></h6>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="dropdown"><a className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical f-18" /></a>
                          <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Name</a> <a className="dropdown-item" href="#">Date</a> <a className="dropdown-item" href="#">Ratting</a> <a className="dropdown-item" href="#">Unread</a></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avtar avtar-s bg-light-secondary"><img src="../assets/images/widget/img-phonepay.png" alt="img" className="img-fluid" /></div>
                      </div>
                      <div className="flex-grow-1 mx-2">
                        <p className="mb-1">Phone Pay</p>
                        <h6 className="mb-0">-$2,000 <small className="text-danger">- 30.6%</small></h6>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="dropdown"><a className="avtar avtar-s btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical f-18" /></a>
                          <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Name</a> <a className="dropdown-item" href="#">Date</a> <a className="dropdown-item" href="#">Ratting</a> <a className="dropdown-item" href="#">Unread</a></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card-footer">
                  <div className="d-grid"><button className="btn btn-outline-secondary">View all</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="my-n4" style={{"width":"130px"}}>
                        <div id="total-earning-graph-1" />
                      </div>
                    </div>
                    <div className="flex-grow-1 mx-2">
                      <p className="mb-1">Total Earning</p>
                      <h6 className="mb-0">$45,890</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="my-n4" style={{"width":"130px"}}>
                        <div id="total-earning-graph-2" />
                      </div>
                    </div>
                    <div className="flex-grow-1 mx-2">
                      <p className="mb-1">Total Earning</p>
                      <h6 className="mb-0">$45,890</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}
