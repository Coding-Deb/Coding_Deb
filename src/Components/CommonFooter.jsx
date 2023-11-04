import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const CommonFooter = () => {
  return (
    <Container fluid className="bg-dark text-white py-4">
    <Row>
      <Col className="text-center">
        &copy; {new Date().getFullYear()} Coding Deb
      </Col>
    </Row>
    </Container>
  );
};
