import React from "react";
import { Container, Nav, Navbar, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import styled from "styled-components";
import isMobile from "./Common/MobileView";

const StyledButton = styled(Button)`
  background: #11bdf6;
  border: 1px solid #b8dde9;
  font-weight: 600;
  a {
    color: #fff;
    text-decoration: none;
    .fa-sign-in {
      margin-right: 5px;
    }
  }
  &:hover {
    background: lightskyblue;
    border: 1px solid #b8dde9;
  }
`;

const StyledNav = styled(Navbar)`
  background-color: #1596c0;
  .primaryNav {
    span {
      margin-right: 8px;
      color: lightskyblue;
    }
    .nav-link {
      padding: 0px;
      margin-right: 12px;
      color: #fff;
      text-decoration: underline;
    }
  }
`;

const PrimaryNav = () => {
  const stackStyles = isMobile()
    ? { direction: "vertical" } // Apply vertical stacking for mobile screens
    : { direction: "horizontal" }; // No additional styles for non-mobile screens

  return (
    <StyledNav expand="lg" fixed="top">
      <Container className={isMobile() ? "d-flex flex-column" : ""}>
        {!isMobile() && (
          <Stack
            direction={stackStyles.direction}
            gap={isMobile() ? 0 : 3}
            className={`d-flex justify-content-between align-items-center primaryNav ${
              isMobile() && "mt-2 mb-4 flex-column"
            }`}
          >
            <div className="d-flex">
              <span>{isMobile() ? "Enquiry :" : "Course Enquiry:"}</span>
              <Nav.Link href="tel:+919392926261">+91 9392926261</Nav.Link>
            </div>
            <div className="d-flex">
              <span>Email: </span>
              <Nav.Link href="mailto:hr@vanarait.com">hr@vanarait.com</Nav.Link>
            </div>
          </Stack>
        )}
        <Stack
          direction={stackStyles.direction}
          gap={isMobile() ? 0 : 3}
          className="d-flex flex-row justify-content-between align-items-center"
        >
          <SocialIcons />
          <StyledButton variant="primary">
            <Link to="/LoginForm">
              <i className="fa fa-sign-in" aria-hidden="true"></i>
              Sign in
            </Link>
          </StyledButton>
        </Stack>
      </Container>
    </StyledNav>
  );
};

export default PrimaryNav;
