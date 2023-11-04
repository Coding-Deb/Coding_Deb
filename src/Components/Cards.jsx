import React from "react";
import cardapi from "../api/cardapi";
import "../common.css"; // Import a CSS file for styling
import { Button } from "react-bootstrap";

export const Cards = () => {
  return (
    <div className="cards-container">
      {cardapi.map((item, index) => {
        return (
          <div className={`card ${index % 2 === 0 ? "even" : "odd"}`}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={require("../Images/Coding_Deb.jpg")}
                  className="img-fluid d-block"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <div className="mb-2 bg-success justify-content-center align-content-center p-1 rounded-pill">
                    <Button variant="outline-success" size="sm" className="justify-content-center align-content-center">
                      <h5 className="fw-bolder" style={{color:'white'}}>
                        Details
                      </h5>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
