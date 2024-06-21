import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "axios";
const initialState = {
  Username: "",
  Password: "",
};

const Login = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const handleLogin = (e) => {
    e.preventDefault();
    setFormData(initialState);
    axios.post("/auth/sing-in", formData).then((res) => {
      localStorage.setItem("x-auth-token", res.data.data.token);
    });
  };
  return (
    <div>
      <form onSubmit={handleLogin} action="">
        <h2>Login</h2>
        <input
          value={formData.Username}
          onChange={handleChange}
          name="Username"
          type="text"
        />
        <input
          value={formData.Password}
          onChange={handleChange}
          name="Password"
          type="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
