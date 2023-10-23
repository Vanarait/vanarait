import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CareerSection.css'; // Import your CSS file

function CareerSection() {
  return (
    <div className="career-section">
      <h2 className="section-title">Our Range of Services</h2>
      <div className="service-container">
        <div className="service">
          <div className="service-icon service-online"></div>
          <h3>Online Training</h3>
          <p>
            Learn from anywhere with our online training programs.
            <Link to="/OnlineTrainingDetails" className="learn-more">
              Learn More
            </Link>
          </p>
        </div>
        <div className="service">
          <div className="service-icon service-personal"></div>
          <h3>Personal Training</h3>
          <p>
            Get personalized training to achieve your career goals.
            <Link to="/PersonalTrainingComponent" className="learn-more">
              Learn More
            </Link>
          </p>
        </div>
        <div className="service">
          <div className="service-icon service-realtime"></div>
          <h3>Realtime Project</h3>
          <p>
            Work on real-world projects to gain practical experience.
            <Link to="/RealTimeProjectComponent" className="learn-more">
              Learn More
            </Link>
          </p>
        </div>
        <div className="service">
          <div className="service-icon service-support"></div>
          <h3>Job Support</h3>
          <p>
            Get assistance in your job search and career advancement.
            <Link to="/JobSupportComponent" className="learn-more">
              Learn More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerSection;
