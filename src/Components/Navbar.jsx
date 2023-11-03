import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#2B1C78" }}
    >
      <div className="container">
        <Link to="/home" className="navbar-brand">
          <img
            src={require("../Images/Coding_Deb.jpg")}
            height={50}
            alt="Logo"
            className="rounded-pill"
          />
        </Link>
        <h3
          className="display-6 text-center mb-2 mb-lg-0 fw-bolder"
          style={{ color: "white" }}
        >
          Coding Deb
        </h3>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "white", borderColor: "blue" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: "white" }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                activeClassName="active-link"
                style={{ color: "white" }}
              >
                <h5>Home</h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/courses"
                activeClassName="active-link"
                style={{ color: "white" }}
              >
                <h5>Courses</h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active-link"
                style={{ color: "white" }}
              >
                <h5>About</h5>
              </NavLink>
            </li>
          </ul>

          <div className="d-flex">
            <button type="button" className="btn btn-outline-primary me-2">
              <NavLink
                to="/SignIn"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                Account
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
