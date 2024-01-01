import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../css/WhatsAppChatbotPopup.css";
import isMobile from "./Common/MobileView";
import Logo from "../Assests/Images/logo-new.png";
import styled from "styled-components";

const StyledBtn = styled(Button)`
  z-index: 100;
  right: ${isMobile() && "-35px"};
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
        <div className="d-flex align-items-center justify-content-between chatHeader p-2">
          <img src={Logo} alt="Logo" width={30} />
          <button className="close-button" onClick={toggleChatbot}>
            <i className="fa fa-window-close" aria-hidden="true"></i>
          </button>
        </div>
        <div className="p-2">
          <div className="great">
            <p>Hi there,</p>
            <p>Welcome to Vanara IT..!!</p>
            <p>How can we help you?</p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=+91-9392926261&amp;text=Hello, I have a question about https%3A%2F%2FvanaraIT.com%2Fonline-training-schedules"
            target="_blank"
            rel="noreferrer" // Added for enhanced security
            className="whatsapp-link my-2"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <StyledBtn className="chatbot-icon" onClick={toggleChatbot}>
        <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
        {!isMobile() && "Chat with us"}
      </StyledBtn>
    </div>
  );
}

export default WhatsAppChatbot;
