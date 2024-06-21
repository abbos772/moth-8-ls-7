import React from "react";
import "./Navbar.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoLogInOutline } from "react-icons/io5";
function Navbar() {
  return (
    <header className="navbar__wrapper">
      <div className="container">
        <nav className="navbar">
          <NavLink to={"/"} className="navbar__logo">
            <h2>uzum market</h2>
          </NavLink>
          <button className="navbar__category-btn">
            <IoMenu />
            <span>Katalog</span>
          </button>
          <div className="navbar__search">
            <input type="text" placeholder="Search..." />
            <button>
              <IoSearch />
            </button>
          </div>
          <div className="navbar__collection">
            <NavLink to={"/"} className="navbar__item">
              <IoHome />
              <span>Bosh Sahifa</span>
            </NavLink>
            <NavLink to={"/User"} className="navbar__item">
              <FaRegUser />
              <span>User</span>
            </NavLink>
            <NavLink to={"/Login"} className="navbar__item">
              <IoLogInOutline style={{ fontSize: "25" }} />
              <span>Login</span>
            </NavLink>
            <NavLink to={"/Register"} className="navbar__item">
              <FiShoppingCart />
              <span>Register</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
