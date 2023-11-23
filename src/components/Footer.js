import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import isMobile from "./Common/MobileView";
import SocialIcons from "./SocialIcons";
import Title from "./Common/Title";

const StyledTitle = styled(Title)`
  color: #11bdf6;
  font-size: 1rem;
`;

const FooterNav = styled(Navbar)`
  .navbar-nav {
    a {
      margin: 6px 0px;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #11bdf6;
      opacity: 0.9;
    }
  }
  .nav-link {
    i {
      color: #11bdf6;
      margin-right: 8px;
    }
    .fa-map-marker {
      font-size: 1.5rem;
    }
    .address {
      font-size: 0.8rem;
    }
  }
`;

const FooterCopy = styled.div`
  padding: 10px 0px 5px 0px;
  border-top: 1px solid #064e66;
  width: 100%;
  text-align: center;
  p {
    color: #fff;
    opacity: 0.5;
    margin: 0px;
  }
`;

const Footer = () => {
  return (
    <FooterNav bg="dark" variant="dark" expand="lg" className="flex-wrap">
      <Container className="justify-content-center">
        <Row className="w-100 mt-3">
          <Col lg={3}>
            <StyledTitle level={5}>QUICK LINKS</StyledTitle>
            <Nav className="me-auto flex-column">
              <Link to="/">Home</Link>
              <Link to="/CourseOfferings">Courses Offerings</Link>
              <Link to="/OnlineTrainingDetails"> New Batches</Link>
              <Link to="/TrainerRegistrationForm"> Trainer Registration</Link>
              <Link to="/Contact"> Get In Touch</Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <StyledTitle level={5} className={isMobile() ? "mt-4" : ""}>
              QUICK SERVICES
            </StyledTitle>
            <Nav className="me-auto flex-column">
              <Link to="/OnlineTrainingDetails">Online Training</Link>
              <Link to="/PersonalTrainingComponent">Personal Training</Link>
              <Link to="/JobSupportComponent"> Job Support</Link>
              <Link to="/RealTimeProjectComponent">
                Academic/Real Time projects
              </Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <StyledTitle level={5} className={isMobile() ? "mt-3" : "mb-3"}>
              FOLLOW US
            </StyledTitle>
            <SocialIcons />
            <StyledTitle level={5} className="mt-4 mb-0">
              TERMS AND CONDITIONS
            </StyledTitle>
            <Nav className="me-auto flex-column">
              <Nav.Link className="mb-0 p-0">
                Terms of use & Privacy Policy
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <StyledTitle level={5} className={isMobile() ? "mt-4" : ""}>
              CONTACT US
            </StyledTitle>
            <Nav className="me-auto flex-column">
              <Nav.Link href="tel:+919392926261" className="mb-0 p-0">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                +91 9392926261
              </Nav.Link>
              <Nav.Link href="mailto:hr@vanarait.com" className="mb-0 p-0">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                hr@vanarait.com
              </Nav.Link>
              <Nav.Link
                className="mb-3 p-0 d-flex"
                href="https://maps.app.goo.gl/Khr9twchZUQWRqv2A"
                target="_blank"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <address className="address mb-0">
                  6th floor, Nilgiri Block, Aditya enclave, Ameerpet,{" "}
                  <b>Land Mark:</b> Metro pillar 1075 Hyderabad, Telangana -
                  500016
                </address>
              </Nav.Link>
              <iframe
                title="Best Software Training Institute in Hyderabad | Online Training - Vanara IT"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.970448701306!2d78.4447975!3d17.4361209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cf6e2fffff%3A0x26ceb5c31e665f41!2sNilgiri%20Block!5e0!3m2!1sen!2sin!4v1700718306748!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Nav>
          </Col>
        </Row>
      </Container>

      <FooterCopy className="mt-4">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </FooterCopy>
    </FooterNav>
  );
};

export default Footer;
