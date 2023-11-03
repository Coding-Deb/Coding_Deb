import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/home" className="navbar-brand">
          <img
            src={require("../Images/Coding_Deb.jpg")}
            height={50}
            alt="Logo"
          />
        </Link>
        <h3 className="display-6 text-center mb-2 mb-lg-0 fw-bolder">Coding Deb</h3>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                activeClassName="active-link"
              >
                <h5>
                  Home
                </h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/courses"
                activeClassName="active-link"
              >
                <h5>
                  Courses
                </h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active-link"
              >
                <h5>
                  About
                </h5>
              </NavLink>
            </li>
          </ul>

          <div className="d-flex">
            <button type="button" className="btn btn-outline-primary me-2">
              <NavLink to="/SignIn">Account</NavLink>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
