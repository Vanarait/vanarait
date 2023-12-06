import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Image, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Assests/Images/logo-new.png";
import isMobile from "./Common/MobileView";
import Title from "./Common/Title";

const StyledNav = styled(Navbar)`
  background-color: #212121 !important;
  transition: max-height 0.5s ease-in-out;
  margin-top: ${isMobile() ? "35px" : "54px"};
  .primaryNav {
    .nav-item {
      border-bottom: ${isMobile() && "1px solid #6e6e6e"};
      margin-right: 10px;
      &:hover {
        background: #6c757d;
        border-radius: 5px;
      }
    }
    a {
      color: #fff;
      font-family: "Poppins", sans-serif;
      font-size: 0.9rem;
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
    a {
      text-decoration: none;
    }
    .logo {
      height: ${isMobile() ? "45px" : "55px"};
    }
    .logo-title {
      margin-left: 8px;
      h1 {
        font-size: ${isMobile() ? "2rem" : "2.5rem"};
        font-weight: normal;
        color: #fff;
        text-shadow: 0px 3px 2px mediumblue;
        line-height: ${isMobile() ? "0.2" : "0.6"};
        margin-top: ${isMobile() ? "15px" : "10px"};
        font-family: "Poppins", sans-serif;
      }
      span {
        font-size: ${isMobile() ? "0.5rem" : "0.6rem"};
        text-transform: uppercase;
        margin-left: 10px;
        color: aqua;
      }
    }
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
  { label: "Get In Touch", link: "/Contact" },
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
      if (window.scrollY > 40) {
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
      className={
        scrolling
          ? "navbar-sticky py-1"
          : isMobile()
          ? "py-1"
          : "navbar-top bg-body-tertiary"
      }
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          className={`navbar-brand ${
            scrolling && !isMobile() ? "d-none" : "p-0"
          }`}
        >
          <Link to="/" className="d-flex align-items-center">
            <Image src={Logo} alt="Vanara IT Academy Logo" className="logo" />
            <div className="logo-title">
              <Title level={1} className="mb-0">
                Vanara IT
              </Title>
              <span>Learn Here And Lead In It Industry</span>
            </div>
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
                  className={`nav-item ${scrolling ? "fade-in" : ""}`}
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
                <Nav.Item
                  key={index}
                  className={`nav-item ${scrolling ? "fade-in" : ""}`}
                >
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
