// import React from 'react'

// export default function Login() {
//   return (
//     <div>
//       hellow login
//     </div>
//   )
// }
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { baseurl } from "../../../Baseurl";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = async () => {
  if (validate()) {
    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseurl}userLogin`, userData);
      console.log(response);

      if (response.status === 200) {
        toast.success("Login successful");
        JSON.stringify(localStorage.setItem("userMedical", JSON.stringify(response.data)));
        navigate("/Admin/dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.message)
      console.error("Login failed:", error.response?.data?.message || error.message);
      // Optionally show error to user
    }

  } else {
    console.log("Validation failed");
  }
};


  return (
    <div className="container">
      <div
        className="login-box mx-auto mt-5 p-4 bg-white rounded shadow"
        style={{ maxWidth: "420px" }}
      >
        <div className="text-center mb-3">
          <span className="brand-name text-primary fw-bold fs-4">
            Able <sup>pro</sup>
          </span>
        </div>
        <h4 className="login-title fw-bold">Login</h4>
        <p className="text-end small">
          <NavLink to="/Register">Don't have an account?</NavLink>
        </p>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control bg-light"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control bg-light"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="button">
              👁
            </button>
          </div>
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ms-1 small">
              Keep me sign in
            </label>
          </div>
          <a href="" className="small">
            Forgot Password?
          </a>
        </div>
        <button className="btn btn-primary w-100" onClick={handleClick}>
          Login
        </button>
      </div>
          <ToastContainer />
    </div>
  );
}
