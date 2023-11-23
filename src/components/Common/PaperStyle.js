import React from "react";
import styled from "styled-components";
import { Card, Container, Row, Col } from "react-bootstrap";
import isMobile from "./MobileView";

const StyledPage = styled(Card)`
  max-width: 100%;
  text-align: left;
  border: 4px double lightgrey;
  .page-title {
    font-size: ${isMobile() ? "1rem" : "1.5rem"};
    font-weight: 600;
    background: linear-gradient(
      121.7deg,
      rgb(41, 116, 250) 22.9%,
      rgb(67, 212, 255) 69%
    );
    color: #fff;
    padding: 10px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
`;

const PaperStyle = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col md={9} className="m-auto">
          <StyledPage className="my-5">
            <Card.Body className="p-0">{children}</Card.Body>
          </StyledPage>
        </Col>
      </Row>
    </Container>
  );
};

export default PaperStyle;
