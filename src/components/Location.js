import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import isMobile from "./Common/MobileView";

const StyledRow = styled(Row)`
  background-color: lavender;
  border-top: 3px solid #11bdf6;
  border-bottom: 3px solid #11bdf6;
  i {
    color: #11bdf6;
  }
`;

const Location = () => {
  return (
    <Container fluid>
      <StyledRow className="py-4">
        <Col md={4} className={isMobile() ? "mb-3" : ""}>
          <Card className="h-100 d-flex flex-column">
            <Card.Body>
              <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i>
              <div className="mt-2">+91 9392926261</div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className={isMobile() ? "mb-3" : ""}>
          <Card className="h-100 d-flex flex-column">
            <Card.Body>
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <div className="mt-2">vanarait.hyd@gmail.com</div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 d-flex flex-column">
            <Card.Body>
              <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              <address className="mb-0 mt-2">
                6th floor, Nilgiri Block, Aditya enclave, Ameerpet,{" "}
                <b>Land Mark:</b> Metro pillar 1075 Hyderabad, Telangana -
                500016
              </address>
            </Card.Body>
          </Card>
        </Col>
      </StyledRow>
      <Row>
        <Col>
          <iframe
            title="Best Software Training Institute in Hyderabad | Online Training - Vanara IT"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.970448701306!2d78.4447975!3d17.4361209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cf6e2fffff%3A0x26ceb5c31e665f41!2sNilgiri%20Block!5e0!3m2!1sen!2sin!4v1700718306748!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height={400}
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
