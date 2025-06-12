import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Component/Header/Login/Login';
import Admin from './Admin';
import Patient from './Component/Header/MAnage Patient/Patient';
import ManageDoctors from './Component/Header/Manage doctors/ManageDoctors';
import Staff from './Component/Header/ManageStaff/Staff';
import ManageAppointment from './Component/Manage Appointment/ManageAppointment';
import ManageLabs from './Component/ManageLabs/ManageLabs';
import Protected from './Component/Protected';
import Addappointment from './Component/Manage Appointment/Appointment/Addappointment';
import Addpatient from './Component/Header/MAnage Patient/Addpatient';
import Billing from './Component/Billing/Billing';
import Pharmacy from './Component/Pharmacy/Pharmacy';
import Insurance from './Component/Insuranse/Insurance';
import Medical from './Component/Medical/Medical';
import Changepassword from './Component/Profile/Changepassword';
import Register from './Component/Header/Login/Register';
import Appointment2 from './Component/Appointment2/Appointment2';
import DoctorBooking from './Component/Header/ManageStaff/DoctorBooking';
import Myprofile from './Setting/Myprofile';
import DoctorDashboard from './Component/Header/ManageStaff/DoctorDashboard';
import Reports from './Component/Reports/Reports';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Admin"
            element={<Protected Component={Admin} />}>
            <Route path="dashboard" element={<Dashboard />} />
            {/* patirnt roues */}
            <Route path="Patient" element={<Patient />} />
            <Route path="addPatient" element={<Addpatient />} />
            {/* profile routes */}
            <Route path="Changepassword" element={<Changepassword />} />
            {/*appointment two
              */}
              <Route  path='appointment2' element={<Appointment2 />}  />
            {/* doctor routes */}
            <Route path="ManageDoctors" element={<ManageDoctors />} />
            <Route path="ManageStaff" element={<Staff />} />
            <Route path="Manageappointment" element={<ManageAppointment />} />
            <Route path="ManageLabs" element={<ManageLabs />} />
            <Route path="Addappointment" element={<Addappointment />} />
            <Route path="Billing" element={<Billing />} />
            <Route path="Pharmacy" element={<Pharmacy />} />
            <Route path="Insurance" element={<Insurance />} />
            <Route path="Medicals" element={<Medical />} />
            <Route path="DoctorBooking" element={<DoctorBooking />} />
            <Route path="myprofile" element={<Myprofile />} />
            <Route path="/Admin/DoctorDashboard" element={<DoctorDashboard />} />
            <Route path="/Admin/ReportsInc" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
