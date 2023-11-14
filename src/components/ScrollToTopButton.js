import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledScrollBtn = styled.div`
  .scroll-to-top {
    position: fixed;
    z-index: 100;
    bottom: 20px;
    right: 15px;
    transition: opacity 0.3s ease-in-out;
  }

  .scroll-to-top.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .scroll-to-top.visible {
    opacity: 1;
    pointer-events: auto;
  }
  // button {
  //   background-color: #11bdf6;
  //   border: 1px solid #b8dde9;
  // }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down 200 pixels
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledScrollBtn>
      <Button
        variant="danger"
        className={`scroll-to-top ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <i className="fa fa-arrow-circle-up fa-lg" aria-hidden="true"></i>
      </Button>
    </StyledScrollBtn>
  );
};

export default ScrollToTopButton;
