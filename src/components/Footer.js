import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import isMobile from "./Common/MobileView";
import SocialIcons from "./SocialIcons";

const FooterNav = styled(Navbar)`
  h5 {
    color: #11bdf6;
    font-size: 1rem;
  }
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
      <Container>
        <Row className="w-100 mt-3">
          <Col lg={3}>
            <h5>QUICK LINKS</h5>
            <Nav className="me-auto flex-column">
              <Link to="/">Home</Link>
              <Link to="/CourseOfferings">Courses Offerings</Link>
              <Link to="/OnlineTrainingDetails"> New Batches</Link>
              <Link to="/TrainerRegistrationForm"> Trainer Registration</Link>
              <Link to="/ContactForm"> Get In Touch</Link>
              <Link to="/ContactForm"> Get In Touch</Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <h5 className={isMobile() ? "mt-4" : ""}>QUICK SERVICES</h5>
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
            <h5 className={isMobile() ? "mt-4" : ""}>TERMS AND CONDITIONS</h5>
            <Nav className="me-auto flex-column">
              <Nav.Link className="mb-0 p-0">
                Terms of use & Privacy Policy
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <h5 className={isMobile() ? "mt-4" : ""}>CONTACT US</h5>
            <Nav className="me-auto flex-column mb-4">
              <Nav.Link href="tel:+919392926261" className="mb-0 p-0">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                +91 9392926261
              </Nav.Link>
              <Nav.Link href="mailto:hr@vanarait.com" className="mb-0 p-0">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                hr@vanarait.com
              </Nav.Link>
            </Nav>
            <h5 className="mb-2">FOLLOW US</h5>
            <SocialIcons />
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
