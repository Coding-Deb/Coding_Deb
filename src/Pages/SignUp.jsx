import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // You can access signUpData.name, signUpData.email, and signUpData.password for further processing
  };
  return (
    <Form onSubmit={handleSignUpSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={signUpData.name}
          onChange={handleSignUpChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={signUpData.email}
          onChange={handleSignUpChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleSignUpChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSignUpSubmit}>
        Sign Up
      </Button>
      <div>
        <p>Name: {signUpData.name}</p>
        <p>Email: {signUpData.email}</p>
        <p>Password: {signUpData.password}</p>
      </div>
    </Form>
  );
};
