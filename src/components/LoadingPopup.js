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

                <h1 className="title"> Vanara IT</h1>
                <p className="description">Learn, Lead, and Discover the World of AWS</p>
                <p className="info">Event Details:</p>
                <ul className="event-details">
                    <li>By Mr. Ramesh</li>
                    <li>November 14th</li>
                    <li>10+ Years of Experience</li>
                    <li>Time: 7:00 AM (IST)</li>
                    <li>Zoom Link: <a href="https://zoom.us/" target="_blank" rel="noopener noreferrer">Join Event</a></li>
                    <li>Password: 000123</li>
                    <li>Contact: +91949449 49085</li>
                    <li>Website: <a href="http://www.vanarait.com" target="_blank" rel="noopener noreferrer">www.Vanarait.com</a></li>
                </ul>
            </div>
        </div>
    );
};

export default LoadingPopup;
