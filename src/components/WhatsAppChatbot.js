import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../css/WhatsAppChatbotPopup.css";
import isMobile from "./Common/MobileView";
import styled from "styled-components";

const StyledBtn = styled(Button)`
  z-index: 100;
  bottom: ${isMobile() && "57px"};
  right: ${isMobile() && "-10px"};
  .fa-whatsapp {
    margin: ${isMobile() && "0px"};
  }
`;
function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle the chatbot popup
  const toggleChatbot = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-popup ${isOpen ? "open" : ""}`}>
        {/* Close button */}
        <button className="close-button" onClick={toggleChatbot}>
          <i className="fa fa-window-close" aria-hidden="true"></i>
        </button>
        <img src="images/logo.png" alt="Logo" className="img-fluid" />
        {/* WhatsApp chat link */}
        <div className="great">
          <p>Hi there,</p>
          <p>Welcome to Vanara IT..!!</p>
          <p>How can we help you?</p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=919494494085&amp;text=Hello, I have a question about https%3A%2F%2FvanaraIT.com%2Fonline-training-schedules"
          target="_blank"
          rel="noreferrer" // Added for enhanced security
          className="whatsapp-link"
        >
          Chat on WhatsApp
        </a>
      </div>
      <StyledBtn className="chatbot-icon" onClick={toggleChatbot}>
        <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
        {!isMobile() && "Chat with us"}
      </StyledBtn>
    </div>
  );
}

export default WhatsAppChatbot;
