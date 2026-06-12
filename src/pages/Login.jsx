import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });

    const data = await response;

    console.log("STATUS:", response.status);

    const text = await response.text();

    console.log("BODY:", text);

    if (response.ok) {
      alert("Login successful");
      navigate("/");
      localStorage.setItem("token", text);
    } else {
      alert("Login failed");
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 col-12 col-md-6 col-lg-4">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>

            <input
              type="text"
              className="form-control"
              value={userName}
              placeholder="Enter username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
