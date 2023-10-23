import React from 'react';
import '../css/Footer.css'; // Import the CSS file for sty
import WhatsAppChatbot from './WhatsAppChatbot';
const Footer = () => {
  return (
    <footer className="footer">
      <WhatsAppChatbot />
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
