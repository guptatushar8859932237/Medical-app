// import React from 'react'

// export default function Login() {
//   return (
//     <div>
//       hellow login
//     </div>
//   )
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleClick = () => {
    if (validate()) {
      console.log("Login successful");
      navigate("/Admin/dashboard");
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
          <a href="">Don't have an account?</a>
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
    </div>
  );
}
