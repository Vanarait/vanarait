import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Container,
  Button,
  Stack,
} from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import Logo from "../Assests/Images/logo.png";

const StyledNav = styled(Navbar)`
  .primaryNav {
    .nav-item {
      padding: 0 5px 0px 0px;
      &:hover {
        background: #6c757d;
        border-radius: 5px;
      }
    }
    a {
      color: #fff;
    }
  }
  .navbar-nav {
    .hstack {
      span {
        color: #fff;
        margin-right: -10px;
      }
      .nav-link {
        padding: 0px;
        margin-right: 12px;
        color: #0d6efd;
        text-decoration: underline;
      }
    }
  }
`;

const menuItems = [
  { label: "Home", link: "/" },
  {
    label: "Services",
    submenu: [
      { label: "Online Training", link: "/OnlineTrainingDetails" },
      { label: "Personal Training", link: "/PersonalTrainingComponent" },
      { label: "Job Support", link: "/JobSupportComponent" },
      {
        label: "Academic/Real Time projects",
        link: "/RealTimeProjectComponent",
      },
    ],
  },
  { label: "Courses Offering", link: "/CourseOfferings" },
  { label: "New Batch Schedules", link: "/OnlineTrainingDetails" },
  { label: "Trainer Registration", link: "/TrainerRegistrationForm" },
  { label: "Get In Touch", link: "/ContactForm" },
  // Add more menu items as needed
];

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      setIsMobile(mediaQuery.matches);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const stackStyles = isMobile
    ? { direction: "vertical" } // Apply vertical stacking for mobile screens
    : { direction: "horizontal" }; // No additional styles for non-mobile screens

  return (
    <StyledNav
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image src={Logo} alt="Logo not found" width={300} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ flexDirection: "column" }}
        >
          <Nav className="me-auto">
            <Stack direction={stackStyles.direction} gap={isMobile ? 0 : 3}>
              <span>Course Enquiry:</span>
              <Nav.Link href="tel:+919494494085">+91 9494494085</Nav.Link>
              <span>Email: </span>
              <Nav.Link href="mailto:hr@vanarait.com">hr@vanarait.com</Nav.Link>
              <SocialIcons />
              <Button variant="danger">
                <Link to="/LoginForm">Sign In</Link>
              </Button>
            </Stack>
          </Nav>
          <Nav className="me-auto primaryNav">
            {menuItems.map((menuItem, index) =>
              menuItem.submenu ? (
                <NavDropdown title={menuItem.label} key={index}>
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <NavDropdown.Item key={subIndex} href={subItem.link}>
                      {subItem.label}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Item key={index}>
                  <Nav.Link href={menuItem.link}>{menuItem.label}</Nav.Link>
                </Nav.Item>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNav>
  );
};

export default Navigation;
