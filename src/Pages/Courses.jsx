import React from "react";
import prog_lang from "../api/courses";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Courses = () => {
  const navigate = useNavigate();

  const containerStyle = {
    background: "linear-gradient(45deg, #3494E6, #EC6EAD)",
    minHeight: "100vh",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%"
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row" style={rowStyle}>
        {prog_lang.map((item, index) => {
          return (
            <div className="col-md-6" key={index}>
              <div className="card mb-4" style={cardStyle}>
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Year Created: {item.year_created}</p>
                  <p className="card-text">Example Code: {item.example_code}</p>
                  <p className="card-text">Paradigm: {item.paradigm}</p>
                  <div className="d-flex justify-content-center align-content-center">
                    <Button
                      type="button"
                      className="btn btn-outline-primary me-2"
                      style={{ backgroundColor: "#2B1C78", color: "white" }}
                      onClick={() =>
                        navigate("/Coursesdetails", {
                          state: {
                            name: item.name,
                            description: item.description,
                            year: item.year_created,
                          },
                        })
                      }
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
