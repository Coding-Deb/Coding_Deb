import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Link } from "react-router-dom";

export const Sign = () => {
  const [activeKey, setActiveKey] = useState("sign-in");
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // You can access signInData.email and signInData.password for further processing
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // You can access signUpData.name, signUpData.email, and signUpData.password for further processing
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Tab.Container
            id="auth-tabs"
            activeKey={activeKey}
            onSelect={(key) => setActiveKey(key)}
          >
            <Nav variant="pills" className="mb-3">
            <Nav.Item>
              <Nav.Link eventKey="sign-in">
                <Link to="/SignIn" className="nav-link-custom" style={{textDecoration:'none',color:'white',fontWeight:'bolder'}}>
                  Sign In
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sign-up">
                <Link to="/SignUp" className="nav-link-custom" style={{textDecoration:'none',color:'white',fontWeight:'bolder'}}>
                  Sign Up
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="sign-in">
                <SignIn />
              </Tab.Pane>
              <Tab.Pane eventKey="sign-up">
                <SignUp />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};
