import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa"; // Import the icons you want to use

export const About = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>About Us</Navbar.Brand>
      </Navbar>

      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4">About Us</h2>
            <p>
              Welcome to our website dedicated to learning coding languages with
              <strong className="text-primary"> @Coding_Deb</strong>.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-dark text-white py-4">
        <footer>
          <Row className="text-center">
            <Col md={4}>
              <h3>Contact Us</h3>
              <div className="mb-3">
                <FaPhone size={24} /> +1-123-456-7890
              </div>
              <div className="mb-3">
                <FaEnvelope size={24} /> info@example.com
              </div>
              <div>
                <FaMapMarker size={24} /> 123 Main St, City, Country
              </div>
            </Col>
            <Col md={4}>
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/home" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/courses" className="text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h3>Follow Us</h3>
              <div>
                <a href="#" className="text-white me-2">
                  Facebook
                </a>
                <a href="#" className="text-white me-2">
                  Twitter
                </a>
                <a href="#" className="text-white me-2">
                  Instagram
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              &copy; {new Date().getFullYear()} Your Company Name
            </Col>
          </Row>
        </footer>
      </Container>
    </div>
  );
};
