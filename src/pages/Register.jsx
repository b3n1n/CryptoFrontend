import React, { useState, useEffect } from "react";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    });

    // email, pass validation

    console.log("STATUS:", response.status);

    const text = await response.text();

    console.log("BODY:", text);

    if (response.ok) {
      alert("Registration successful");
    } else {
      alert("Registration failed");
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 col-12 col-md-6 col-lg-4">
        <h2 className="text-center mb-4">Registration</h2>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Username</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Confirm password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
