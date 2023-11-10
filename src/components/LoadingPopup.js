import React, { useState } from 'react';
import '../css/LoadingPopup.css';

const LoadingPopup = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
        setIsOpen(false);
    };

    if (!isOpen) {
        return null; // Don't render anything if the popup is closed
    }

    return (
        <div className="loading-overlay">
            <div className="container">
                <button className="close-button" onClick={closePopup}>
                    X
                </button>

                <h3 className="title"> JAVA FULL STACK TRAINING</h3>
                <p className="info">Details:</p>
                <ul className="event-details">
                    <li>Online Training</li>
                    <li>Time: 7:00 AM (IST)</li>
                    <li>Zoom Link: <a href="https://zoom.us/" target="_blank" rel="noopener noreferrer">Join Event</a></li>
                    <li>Password: 000123</li>
                    <li>Contact: +91 9392926261</li>
                    <li>Website: <a href="http://www.vanarait.com" target="_blank" rel="noopener noreferrer">www.Vanarait.com</a></li>
                </ul>
            </div>
        </div>
    );
};

export default LoadingPopup;
