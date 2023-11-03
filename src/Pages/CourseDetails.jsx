import React from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const CourseDetails = () => {
  const location = useLocation();

  const containerStyle = {
    background: "linear-gradient(45deg, #3494E6, #EC6EAD)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <div className="card mb-4" style={cardStyle}>
        <div className="card-body">
          <h4 className="card-title">{location.state.name}</h4>
          <p className="card-text">{location.state.description}</p>
        </div>
      </div>
    </div>
  );
};
