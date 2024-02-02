import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../css/CourseOfferings.css";
import Title from "../components/Common/Title";

const CourseOfferings = () => {
  // Sample data for course offerings
  const courses = [
    {
      id: 1,
      title: "React JS",
      durationMonths: 2,
      originalPrice: "5000 INR",
      offerPrice: "3000 INR",
      imageUrl: "vanarait/src/Assests/Images/contact2.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Core and Advanced Java",
      durationMonths: 3,
      originalPrice: "10000 INR",
      offerPrice: "6000 INR",
      imageUrl: "vanarait/src/Assests/Images/contact2.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      title: "UI FullStack With Resct JS",
      durationMonths: 2,
      originalPrice: "18000 INR",
      offerPrice: "12000 INR",
      imageUrl: "vanarait/src/Assests/Images/contact2.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Java FullStack With Resct JS",
      durationMonths: 3,
      originalPrice: "32000 INR",
      offerPrice: "16000 INR",
      imageUrl: "vanarait/src/Assests/Images/contact2.jpg", // Replace with actual image URL
    },
    {
      id: 5,
      title: "AWS DevOps",
      durationMonths: 2,
      originalPrice: "18000 INR",
      offerPrice: "10000 INR",
      imageUrl: "vanarait/src/Assests/Images/contact2.jpg", // Replace with actual image URL
    },
    
    // Add more courses as needed
  ];

  return (
    <Container>
      <Row className="mt-3 mb-3">
        <Title className="mb-3" level={1} style={{ fontSize: "1.5rem" }}>
          Course Offerings
        </Title>
        {courses.map((course) => (
          <Col md={4} key={course.id} className="mb-4">
            <div className="course">
              <Title level={6}>{course.title}</Title>
              <p className="price-info">
                <span className="ct_cf">Duration:</span> {course.durationMonths}{" "}
                months
              </p>
              <p className="price-info">
                <span className="ct_cf">Price: </span> {course.offerPrice}{" "}
                <span className="original-price">({course.originalPrice})</span>
              </p>
              <Button className="w-100 py-2">Course Details</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseOfferings;
