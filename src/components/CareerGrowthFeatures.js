import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faQuestion,
  faCogs,
  faFilePdf,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
// import "../css/CareerGrowthFeatures.css";
import Title from "./Common/Title";

const StyledContainer = styled(Container)`
  .card {
    border-top-right-radius: 35px !important;
    border-bottom-left-radius: 35px !important;
    max-width: none;
  }
  h2 {
    font-size: 1.7rem;
  }
  .card-title {
    font-weight: bold;
  }
`;

const CareerGrowthFeatures = () => {
  const features = [
    {
      title: "Learn from home",
      description: "Stay safe indoors.",
      icon: faHome,
      color: "red",
    },
    {
      title: "Beginner friendly",
      description: "No prior knowledge required",
      icon: faUser,
      color: "blue",
    },
    {
      title: "Doubt clearing",
      description: "Through Q&A forum",
      icon: faQuestion,
      color: "green",
    },
    {
      title: "Build a project",
      description: "For hands-on practice.",
      icon: faCogs,
      color: "orange",
    },
    {
      title: "Downloadable content",
      description: "PDF Documents",
      icon: faFilePdf,
      color: "purple",
    },
    {
      title: "Completion Certificate",
      description: "from Vanara IT",
      icon: faCertificate,
      color: "pink",
    },
  ];

  const rows = [];
  for (let i = 0; i < features.length; i += 3) {
    const row = features.slice(i, i + 3);
    rows.push(row);
  }

  return (
    <StyledContainer className="my-4">
      <Title level={2} className="mb-4">
        Key Benefits
      </Title>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((feature, featureIndex) => (
            <Col md={4} key={featureIndex} className="mb-4">
              <Card className="h-100 d-flex flex-column rounded-0">
                <FontAwesomeIcon
                  icon={feature.icon}
                  size="2x"
                  style={{ color: feature.color }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </StyledContainer>
  );
};

export default CareerGrowthFeatures;
