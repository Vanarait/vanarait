import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import isMobile from "./Common/MobileView";
import Title from "./Common/Title";

const StyledContainer = styled(Container)`
  .card {
    border-radius: 20%;
    a {
      font-size: 0.9rem;
    }
  }
  h2 {
    font-size: 1.7rem;
  }
  .card-title {
    color: #11bdf6;
    font-size: 1.25rem;
  }

  .service-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px 21px 12px 42%;
  }

  .service-online {
    background-color: #3498db;
  }

  .service-personal {
    background-color: #e67e22;
  }

  .service-realtime {
    background-color: #27ae60;
  }

  .service-support {
    background-color: #9b59b6;
  }
`;

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

const CareerSection = () => {
  return (
    <StyledContainer className={isMobile() ? "mb-0" : "mb-5 mt-4"}>
      <Title level={2} className="mb-4">
        Our Range of Services
      </Title>
      <Row>
        {services.map((service, index) => (
          <Col md={3} key={index}>
            <Card className={isMobile() ? "mb-4" : "h-100 d-flex flex-column"}>
              <div className={`service-icon ${service.icon}`}></div>
              <Card.Body className="flex-fill service px-3">
                <Card.Title as="h2">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Link to={service.link}>More Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default CareerSection;
