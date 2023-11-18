import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import isMobile from "./Common/MobileView";
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

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here, e.g., send a password reset email
  };

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <StyledDiv className="bg-white my-5">
          <StyledTitle className="p-3 text-white" level={5}>
            Forgot Password
          </StyledTitle>
          <Form onSubmit={handleSubmit} className="px-5 py-3">
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Reset Password
            </Button>
          </Form>
          <p className="px-5">
            Already have an account? <Link to="/LoginForm">Sign In</Link>
          </p>
        </StyledDiv>
      </div>
    </Container>
  );
};

export default ForgotPasswordForm;
