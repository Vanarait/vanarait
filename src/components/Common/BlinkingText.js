import React, { useState } from "react";
import styled from "styled-components";
import { Badge } from "react-bootstrap";

const StyledBadge = styled(Badge)`
  &.blinking-text {
    animation: blink 1.5s infinite;
    background: linear-gradient(45deg, #6b9916, #64645b);
    border-radius: 0;
  }
  &.paused {
    animation-play-state: paused;
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BlinkingText = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledBadge
      className={`blinking-text ${isHovered ? "paused" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </StyledBadge>
  );
};

export default BlinkingText;
