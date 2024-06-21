import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
