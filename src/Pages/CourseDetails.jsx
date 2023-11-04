import React from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../common.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { Container, Row, Col } from 'react-bootstrap';
import { Col, ListGroup ,Container, Row} from "react-bootstrap";

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
    minHeight: "100vh",
    // display: "flex",
    
    // alignItems: "center",
    // padding:"25px",
    // marginTop:"40px"
  };

  return (
    <Container fluid style={containerStyle}>
    <Row>
      <Col style={{ backgroundColor: '#445785' , height:"100%" , position:"absolute"}} xs={2}>
        <h2>first</h2>
      </Col>
      <Col style={{ backgroundColor: '#445ab5' }}>
        <h2>first</h2>
      </Col>
    </Row>
  </Container>
  );
};
