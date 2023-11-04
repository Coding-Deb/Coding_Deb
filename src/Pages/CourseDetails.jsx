import React from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../common.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CourseDetails = () => {
  const location = useLocation();

  const code = `
    function greet(name) {
      return "Hello, " + name + "!";
    }

    const userName = "John";
    const greeting = greet(userName);
    console.log(greeting);
  `;

  const containerStyle = {
    background: "linear-gradient(45deg, #3494E6, #EC6EAD)",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group scrollable-list">
              <a
                href="/Coursesdetails"
                className="list-group-item list-group-item-action active"
              >
                An active item
              </a>
              <a
                href="/Coursesdetails"
                className="list-group-item list-group-item-action"
              >
                A second item
              </a>
              {/* Add more items as needed */}
            </div>
          </div>

          <div className="col-md-8">
            <div className="card mb-5" style={cardStyle}>
              <div className="card-body">
                <h3 className="card-title">{location.state.name}</h3>
                <h6 className="card-subtitle mb-2 text-muted">
                  Created In {location.state.year}
                </h6>
                <p className="card-text">{location.state.description}</p>
                <SyntaxHighlighter language="javascript" style={dark}>
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
            {/* <SyntaxHighlighter language="javascript" style={dark}>
              {code}
            </SyntaxHighlighter> */}
          </div>
        </div>
      </div>
    </div>
  );
};
