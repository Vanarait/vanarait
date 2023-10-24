import React from 'react';
import '../css/WhatsAppChatbotPopup.css';

class WhatsAppChatbot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // Initial state is closed
    };
  }

  // Toggle the chatbot popup
  toggleChatbot = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div className="chatbot-container">
        <div className={`chatbot-popup ${this.state.isOpen ? 'open' : ''}`}>
          {/* Close button */}
          <button className="close-button" onClick={this.toggleChatbot}>
            <i class="fa fa-window-close" aria-hidden="true"></i>
          </button>
          <img src="images/logo.png" alt="Logo" className='img-fluid'/>
          {/* WhatsApp chat link */}
          <div className='great'>
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
        <button className="chatbot-icon" onClick={this.toggleChatbot}>
          <i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i> Message Us
        </button>
      </div>
    );
  }
}

export default WhatsAppChatbot;
