import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SignIn = () => {
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // You can access signInData.email and signInData.password for further processing
  };
  return (
    <Form onSubmit={handleSignInSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={signInData.email}
          onChange={handleSignInChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={signInData.password}
          onChange={handleSignInChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSignInSubmit}>
        Sign In
      </Button>
      {/* Display input data at the end of the form */}
      <div>
        <p>Email: {signInData.email}</p>
        <p>Password: {signInData.password}</p>
      </div>
    </Form>
  );
};
