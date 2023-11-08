import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import styled from "styled-components";
import isMobile from "./Common/MobileView";

const StyledNav = styled(Navbar)`
  .primaryNav {
    span {
      margin-right: 8px;
    }
    .nav-link {
      padding: 0px;
      margin-right: 12px;
      color: #0d6efd;
      text-decoration: underline;
    }
  }
`;

function PrimaryNav() {
  const stackStyles = isMobile()
    ? { direction: "vertical" } // Apply vertical stacking for mobile screens
    : { direction: "horizontal" }; // No additional styles for non-mobile screens

  return (
    <StyledNav expand="lg" className="bg-body-tertiary" fixed="top">
      <Container className={isMobile() ? "d-flex flex-column" : ""}>
        <Stack
          direction={stackStyles.direction}
          gap={isMobile() ? 0 : 3}
          className={`d-flex justify-content-between align-items-center primaryNav ${
            isMobile() && "mt-2 mb-4 flex-column"
          }`}
        >
          <div className="d-flex">
            <span>{isMobile() ? "Enquiry :" : "Course Enquiry:"}</span>
            <Nav.Link href="tel:+919494494085">+91 9494494085</Nav.Link>
          </div>
          <div className="d-flex">
            <span>Email: </span>
            <Nav.Link href="mailto:hr@vanarait.com">hr@vanarait.com</Nav.Link>
          </div>
        </Stack>

        <Stack
          direction={stackStyles.direction}
          gap={isMobile() ? 0 : 3}
          className="d-flex flex-row justify-content-between align-items-center"
        >
          <SocialIcons />
          <Button variant="danger">
            <Link to="/LoginForm">Sign In</Link>
          </Button>
        </Stack>
      </Container>
    </StyledNav>
  );
}

export default PrimaryNav;
