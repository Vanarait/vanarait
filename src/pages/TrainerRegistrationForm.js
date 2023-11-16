import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import isMobile from "../components/Common/MobileView";

const StyledDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: ${isMobile() ? "" : "42%"};
  h5 {
    background: #11bdf6;
  }
`;

const TrainerRegistration = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    experience: "",
    courses_taught: "",
    password: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    // If validation fails, update the errors state and prevent form submission
    const validationErrors = {};
    // Perform validation logic, e.g., check if required fields are empty, validate email format, etc.
    // If there are errors, set them in the validationErrors object

    if (Object.keys(validationErrors).length === 0) {
      // If there are no errors, submit the form data
      // You can use fetch or axios to send a POST request to your backend API
      // Example using fetch:
      fetch("http://localhost:8080/api/trainers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log("Success:", data);
        })
        .catch((error) => {
          // Handle errors
          console.log(error);
        });
    } else {
      // If there are validation errors, update the errors state to display error messages
      setErrors(validationErrors);
    }
  };

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <StyledDiv className="bg-white my-5">
          <h5 className="p-3 text-white">Trainer Registration</h5>
          <Form onSubmit={handleSubmit} className="px-5 py-3">
            <Row>
              <Col md={12}>
                <Form.Group controlId="full_name" className="mb-3">
                  <Form.Label>Full Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                  />
                  {errors.full_name && (
                    <span className="error-message">{errors.full_name}</span>
                  )}
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group controlId="experience" className="mb-3">
                  <Form.Label>Years of Experience:</Form.Label>
                  <Form.Control
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                  {errors.experience && (
                    <span className="error-message">{errors.experience}</span>
                  )}
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="courses_taught" className="mb-3">
                  <Form.Label>Courses Taught:</Form.Label>
                  <Form.Control
                    type="text"
                    name="courses_taught"
                    value={formData.courses_taught}
                    onChange={handleInputChange}
                  />
                  {errors.courses_taught && (
                    <span className="error-message">
                      {errors.courses_taught}
                    </span>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <span className="error-message">{errors.password}</span>
                  )}
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="resume" className="mb-3">
                  <Form.Label>Upload Resume (PDF, DOC, DOCX):</Form.Label>
                  <Form.Control
                    type="file"
                    name="resume"
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange}
                  />
                  {errors.resume && (
                    <span className="error-message">{errors.resume}</span>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" className="w-100 mt-3">
              Register
            </Button>
          </Form>
        </StyledDiv>
      </div>
    </Container>
  );
};

export default TrainerRegistration;
