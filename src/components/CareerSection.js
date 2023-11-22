import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  faHouseLaptop,
  faHouseUser,
  faProjectDiagram,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import isMobile from "./Common/MobileView";
import Title from "./Common/Title";

const StyledContainer = styled(Container)`
  .card {
    border-radius: ${isMobile() ? "20%" : "15%"};
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
    margin-left: 10px;
  }

  .service-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px 21px 12px 42%;
  }

  .fa-house-user path {
    fill: #3498db;
  }

  .fa-house-laptop path {
    fill: #e67e22;
  }

  .fa-diagram-project path {
    fill: #27ae60;
  }

  .fa-handshake-angle path {
    fill: #9b59b6;
  }

  .svg-inline--fa {
    font-size: 1.5rem;
  }
`;

const services = [
  {
    title: "Online Training",
    description: "Learn from anywhere with our online training programs.",
    link: "/OnlineTrainingDetails",
    icon: faHouseUser,

    borderClr: {
      top: "5px solid #3498db",
      right: "5px solid #3498db69",
    },
  },
  {
    title: "Personal Training",
    description: "Get personalized training to achieve your career goals.",
    link: "/PersonalTrainingComponent",
    icon: faHouseLaptop,
    borderClr: {
      top: "5px solid orange",
      right: "5px solid #ffa50059",
    },
  },
  {
    title: "Real-time Project",
    description: "Work on real-world projects to gain practical experience.",
    link: "/RealTimeProjectComponent",
    icon: faProjectDiagram,
    borderClr: {
      top: "5px solid green",
      right: "5px solid #00800057",
    },
  },
  {
    title: "Job Support",
    description: "Get assistance in your job search and career advancement.",
    link: "/JobSupportComponent",
    icon: faHandsHelping,
    borderClr: {
      top: "5px solid purple",
      right: "5px solid #8000803d",
    },
  },
];

const CareerSection = () => {
  return (
    <StyledContainer className={isMobile() ? "mb-0" : "mb-5 mt-4"}>
      <Title level={1} className="mb-4" style={{ fontSize: "1.7rem" }}>
        Our Range of Services
      </Title>
      <Row>
        {services.map((service, index) => (
          <Col md={3} key={index}>
            <Card
              className={isMobile() ? "mb-4" : "h-100 d-flex flex-column"}
              style={{
                borderTop: service.borderClr.top,
                borderRight: service.borderClr.right,
              }}
            >
              <Card.Body className="flex-fill service px-3">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={service.icon} />
                  <Card.Title as="h2" className="mb-0">
                    {service.title}
                  </Card.Title>
                </div>
                <hr />
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
