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
        <h2 className="display-6 text-center">Coding Deb</h2>

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
              <NavLink className="nav-link" to="/Home" activeClassName="active-link">
                <h5>Home</h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Courses" activeClassName="active-link">
                <h5>Courses</h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About" activeClassName="active-link">
                <h5>About</h5>
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
