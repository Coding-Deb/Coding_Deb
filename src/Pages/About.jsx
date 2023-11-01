import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa"; // Import the icons you want to use

export const About = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>About Page</Navbar.Brand>
      </Navbar>

      <Container className="m-4">
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
              This is website to Learn All Coding Language With Me
              <strong className="m-2">@Coding_Deb</strong>
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-dark text-white text-center p-3">
        <Row>
          <Col>
            <h3>Contact Us</h3>
            <div>
              <FaPhone size={24} /> +1-123-456-7890
            </div>
            <div>
              <FaEnvelope size={24} /> info@example.com
            </div>
            <div>
              <FaMapMarker size={24} /> 123 Main St, City, Country
            </div>
          </Col>
        </Row>
        <Row>
          <Col>&copy; {new Date().getFullYear()} Your Company Name</Col>
        </Row>
      </Container>
    </div>
  );
};
