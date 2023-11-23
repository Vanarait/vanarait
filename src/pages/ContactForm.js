import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import Title from "../components/Common/Title";

const StyledTitle = styled(Title)`
  background: #11bdf6;
`;

const StyledDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .form-control {
    border: 1px solid #11bdf6;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with data:", formData);
  };

  return (
    <Container>
      <StyledDiv className="my-5">
        <StyledTitle className="p-3 text-white" level={5}>
          Contact Us
        </StyledTitle>
        <Form onSubmit={handleSubmit} className="px-5 py-3">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

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

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Submit
          </Button>
        </Form>
      </StyledDiv>
    </Container>
  );
};

export default ContactForm;
