import './App.css';
import Header from './Component/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './Component/Header/Sideabar/Sidebar';
import Dashboard from './Pages/Dashboard';
import Login from './Component/Header/Login/Login';
import Admin from './Admin';
import Patient from './Component/Header/MAnage Patient/Patient';
import ManageDoctors from './Component/Header/Manage doctors/ManageDoctors';
import Staff from './Component/Header/ManageStaff/Staff';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/header" element={<Header />} />
          <Route path="/sidebar" element={<Sidebar />} /> */}
        </Routes>
<Routes path="Admin" element={<Admin />} >
<Route path="/Admin/dashboard" element={<Dashboard />} />
<Route path="/Admin/Patient" element={<Patient />} />
<Route path="/Admin/ManageDoctors" element={<ManageDoctors />} />
<Route path="/Admin/ManageStaff" element={<Staff />} />
</Routes>

      </BrowserRouter>
    {/* <Header />
    <Sidebar />
    <Dashboard /> */}
    </div>
  );
}

export default App;
