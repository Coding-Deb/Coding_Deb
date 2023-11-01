import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { SearchResultsDropdown } from "./SearchResultsDropdown";

// import "./Navbar.css"; // Import your custom CSS for styling

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

  const handleSearch = (e) => {
    e.preventDefault();
    const results = data.filter((lang) =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

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
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {searchResults.length > 0 ? (
        <SearchResultsDropdown searchResults={searchResults} />
      )
      :
      null
    
    }
    </div>
  );
};
