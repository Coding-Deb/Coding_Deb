import React from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Col } from 'react-bootstrap'
import '../common.css'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Row} from "react-bootstrap";
import { C_Lang } from "../CourseScreens/C_Lang";
import { C_Plus_Lang } from "../CourseScreens/C_Plus_Lang";

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
    <Col style={{ backgroundColor: '#F5F5DC' , padding:"5px"}}>
        <h2>{location.state.name}</h2>
       {
       location.state.exm_code != null ?
       <SyntaxHighlighter language='c' style={darcula}>
            {location.state.exm_code}
        </SyntaxHighlighter>
      :
      null  
      }
      </Col>
      {
        location.state.name == "C" ?
        <C_Lang/>
        :
        location.state.name == "C++" ?
        <C_Plus_Lang/>
        :
        <h2>Others</h2>
      }
    </Row>
  </Container>
  );
};
