import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/prog_lang")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
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
                <NavLink
                  className="nav-link"
                  to="/Home"
                  activeClassName="active-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Courses"
                  activeClassName="active-link"
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/About"
                  activeClassName="active-link"
                >
                  About
                </NavLink>
              </li>
            </ul>
            
            <div className="d-flex">
              {/* Add Sign In button */}
              <button type="button" className="btn btn-outline-primary me-2">
                Sign In
              </button>
              {/* Add Sign Up button */}
              <button type="button" className="btn btn-outline-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
