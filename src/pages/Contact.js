import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import backgroundImage from "../Assests/Images/contact2.jpg";
import Location from "../components/Location";

const StyleContainer = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Contact = () => {
  return (
    <>
      <StyleContainer className="d-flex align-items-center justify-content-center flex-column">
        <Container fluid>
          <Row>
            <Col md={5}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </StyleContainer>
      <Location />
    </>
  );
};

export default Contact;
