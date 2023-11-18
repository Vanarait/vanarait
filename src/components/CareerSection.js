import React from "react";
import { Link } from "react-router-dom";
import "../css/CareerSection.css";
import Title from "./Common/Title";

const services = [
  {
    title: "Online Training",
    description: "Learn from anywhere with our online training programs.",
    link: "/OnlineTrainingDetails",
    icon: "service-online",
  },
  {
    title: "Personal Training",
    description: "Get personalized training to achieve your career goals.",
    link: "/PersonalTrainingComponent",
    icon: "service-personal",
  },
  {
    title: "Real-time Project",
    description: "Work on real-world projects to gain practical experience.",
    link: "/RealTimeProjectComponent",
    icon: "service-realtime",
  },
  {
    title: "Job Support",
    description: "Get assistance in your job search and career advancement.",
    link: "/JobSupportComponent",
    icon: "service-support",
  },
];

function CareerSection() {
  return (
    <div className="career-section container">
      <Title className="section-title" level={2}>
        Our Range of Services
      </Title>
      <div className="service-container row">
        {services.map((service, index) => (
          <div className="col-md-3" key={index}>
            <div className="service">
              <div className={`service-icon ${service.icon}`}></div>
              <Title level={3}>{service.title}</Title>
              <p>{service.description}</p>
              <p>
                <Link to={service.link} className="learn-more">
                  More Details
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerSection;
