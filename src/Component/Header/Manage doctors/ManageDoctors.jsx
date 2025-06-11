import React from 'react'
import Sidebar from '../Sideabar/Sidebar'
import Header from '../Header'

export default function ManageDoctors() {
  return (
    <div>
        <Header />
        <Sidebar/>
         <div className="offcanvas pc-announcement-offcanvas offcanvas-end" tabIndex={-1} id="announcement" aria-labelledby="announcementLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="announcementLabel">What's new announcement?</h5><button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <p className="text-span">Today</p>
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
            <div className="badge bg-light-success f-12">Big News</div>
            <p className="mb-0 text-muted">2 min ago</p><span className="badge dot bg-warning" />
          </div>
          <h5 className="mb-3">Able Pro is Redesigned</h5>
          <p className="text-muted">Able Pro is completely renowed with high aesthetics User Interface.</p><img src="../assets/images/layout/img-announcement-1.png" alt="img" className="img-fluid mb-3" />
          <div className="row">
            <div className="col-12">
              <div className="d-grid"><a className="btn btn-outline-secondary" href="https://1.envato.market/zNkqj6" target="_blank">Check Now</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
            <div className="badge bg-light-warning f-12">Offer</div>
            <p className="mb-0 text-muted">2 hour ago</p><span className="badge dot bg-warning" />
          </div>
          <h5 className="mb-3">Able Pro is in best offer price</h5>
          <p className="text-muted">Download Able Pro exclusive on themeforest with best price.</p><a href="https://1.envato.market/zNkqj6" target="_blank"><img src="../assets/images/layout/img-announcement-2.png" alt="img" className="img-fluid" /></a>
        </div>
      </div>
      <p className="text-span mt-4">Yesterday</p>
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
            <div className="badge bg-light-primary f-12">Blog</div>
            <p className="mb-0 text-muted">12 hour ago</p><span className="badge dot bg-warning" />
          </div>
          <h5 className="mb-3">Featured Dashboard Template</h5>
          <p className="text-muted">Do you know Able Pro is one of the featured dashboard template selected by
            Themeforest team.?</p><img src="../assets/images/layout/img-announcement-3.png" alt="img" className="img-fluid" />
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
            <div className="badge bg-light-primary f-12">Announcement</div>
            <p className="mb-0 text-muted">12 hour ago</p><span className="badge dot bg-warning" />
          </div>
          <h5 className="mb-3">Buy Once - Get Free Updated lifetime</h5>
          <p className="text-muted">Get the lifetime free updates once you purchase the Able Pro.</p><img src="../assets/images/layout/img-announcement-4.png" alt="img" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>{/* [ Header ] end */}{/* [ Main Content ] start */}
  <div className="pc-container">
    <div className="pc-content">{/* [ breadcrumb ] start */}
      <div className="page-header">
        <div className="page-block">
          <div className="row align-items-center">
            <div className="col-md-12">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="../index_html.html">Home</a></li>
                <li className="breadcrumb-item"><a href="javascript: void(0)">Dashboard</a></li>
                <li className="breadcrumb-item" aria-current="page">Manage Doctors</li>
              </ul>
            </div>
            <div className="col-md-12">
              <div className="page-header-title">
                <h2 className="mb-0">Manage Doctors</h2>
              </div>
            </div>
          </div>
        </div>
      </div>{/* [ breadcrumb ] end */}{/* [ Main Content ] start */}
    
    </div>
  </div>{/* [ Main Content ] end */}
    </div>
  )
}
