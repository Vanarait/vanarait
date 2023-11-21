import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Image, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Assests/Images/logo.png";
import isMobile from "./Common/MobileView";

const StyledNav = styled(Navbar)`
  transition: max-height 0.5s ease-in-out;
  margin-top: ${isMobile() ? "35px" : "54px"};
  .primaryNav {
    .nav-item {
      border-bottom: ${isMobile() && "1px solid #6e6e6e"};
      margin-right: 14px;
      &:hover {
        background: #6c757d;
        border-radius: 5px;
      }
    }
    a {
      color: #fff;
    }
  }
  .dropdown-toggle {
    transition: background-color 1s ease;
  }

  .fade-in {
    animation: fadeIn 1s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .dropdown-menu {
    padding: 0px;
  }
  .show .fade-in {
    display: block;
    border-bottom: 1px solid;
    padding: 8px 15px;
    &:hover {
      background: #6c757d;
    }
    &:last-child {
      border-bottom: 0px;
    }
  }

  .navbar-brand {
    max-height: 100px;
    opacity: 1;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .navbar-brand.d-none {
    max-height: 0;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
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
  const [scrolling, setScrolling] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenuBar(!showMenuBar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    if (isMobile()) {
      setShowDropdown(!showDropdown);
    }
  };

  return (
    <StyledNav
      collapseOnSelect
      expand="lg"
      className={scrolling ? "navbar-sticky" : "navbar-top bg-body-tertiary"}
      data-bs-theme="dark"
      bg="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          className={`navbar-brand ${scrolling && !isMobile() ? "d-none" : ""}`}
        >
          <Link to="/">
            <Image
              src={Logo}
              alt="Logo not found"
              width={isMobile() ? 250 : 300}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu}>
          {showMenuBar ? (
            <i className="fa fa-times fa-lg" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ flexDirection: "column" }}
        >
          <Nav className={`${!scrolling && "me-auto"} primaryNav`}>
            {menuItems.map((menuItem, index) =>
              menuItem.submenu ? (
                <NavDropdown
                  title={menuItem.label}
                  key={index}
                  show={showDropdown}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  onClick={handleToggle}
                >
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <NavDropdown.Item
                      key={subIndex}
                      href={subItem.link}
                      className={`fade-in ${showDropdown ? "show" : ""}`}
                    >
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
