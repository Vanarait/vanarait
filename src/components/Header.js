import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../css/Header.css";
import Navigation from "../components/Navigation";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col>
        <Navigation />
      </Col>
    </Row>
  );
};

export default Header;
