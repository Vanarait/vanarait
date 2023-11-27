import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import Title from "../components/Common/Title";

const StyledTitle = styled(Title)`
  background: #11bdf6;
`;

const StyledDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .form-control,
  .form-select,
  .input-group-text {
    border: 1px solid #11bdf6;
  }
  .input-group-text {
    background: #1596c0;
    color: #fff;
  }
`;

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
    selectedOption: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "phoneNumber" && type === "text" && /^\d{0,10}$/.test(value)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.trim(),
      }));
    } else if (name !== "phoneNumber") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "select-one" ? value : value.trim(),
      }));
    }
  };

  const optionData = [
    { id: 11, label: "Graduation (Completed)" },
    { id: 22, label: "Graduation (Ongoing)" },
    { id: 33, label: "Post Graduation (Completed)" },
    { id: 44, label: "Graduation (Ongoing)" },
    { id: 55, label: "12th Intermediate" },
    { id: 66, label: "Diploma" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
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
          <Form.Label>Phone:</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
            <Form.Control
              placeholder="Enter Mobile Number"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </InputGroup>
          <Form.Label>Highest Qualification:</Form.Label>
          <Form.Select
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleInputChange}
            className="mb-3"
          >
            <option value="">Select...</option>
            {optionData.map((option) => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            ))}
          </Form.Select>
          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Query:</Form.Label>
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
