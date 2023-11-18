import React, { useState } from "react";
import { Link } from "react-router-dom";
import isMobile from "./Common/MobileView";
import styled from "styled-components";
import { Container, Form, Button } from "react-bootstrap";
import Title from "../components/Common/Title";

const StyledTitle = styled(Title)`
  background: #11bdf6;
`;
const StyledDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: ${isMobile() ? "" : "42%"};
`;

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., make an API request to validate the user's credentials
  };

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <StyledDiv className="bg-white my-5">
          <StyledTitle className="p-3 text-white" level={5}>
            Login
          </StyledTitle>
          <Form onSubmit={handleSubmit} className="px-5 py-3">
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2 w-100">
              Login
            </Button>
          </Form>
          <Link to="/ForgotPasswordForm" className="px-5 py-3">
            Forgot Password?
          </Link>
          <p className="px-5 py-2">
            Don't have an account? <Link to="/RegistrationForm">Sign Up</Link>
          </p>
        </StyledDiv>
      </div>
    </Container>
  );
};

export default LoginForm;
