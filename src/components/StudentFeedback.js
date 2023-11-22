import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";
import Title from "./Common/Title";

const StyledContainer = styled(Container)`
  background-color: #e6e6fa;
  .card {
    text-align: left;
    max-width: none;
    .user-icon {
      color: #007bff;
      margin-right: 10px;
    }

    .course-name {
      font-style: italic;
      font-size: 0.9rem;
      color: #11bdf6;
      font-weight: bold;
    }

    .student-course {
      font-style: italic;
    }

    .student-rating {
      text-align: right;
    }

    .starIcons {
      color: rgb(132, 112, 2);
    }
  }
  .card-title {
    font-weight: bold;
  }
`;

const StudentFeedback = () => {
  const feedbackData = [
    {
      name: "Sidramesh mudma",
      course: "UI Full Stack",
      feedback:
        "Vanara IT helped me gain valuable skills and kickstart my career!",
      rating: 5,
    },
    {
      name: "Manikanta Shakarulu",
      course: "Java Full Stack",
      feedback:
        "The instructors are excellent, and I enjoyed the real-world projects.",
      rating: 4,
    },
    {
      name: "Jeeva petupulu",
      course: "Java Full Stack",
      feedback:
        "Flexible learning options made it easy to balance with my job.",
      rating: 5,
    },
    {
      name: "Ashok Mulla",
      course: "Java Full Stack",
      feedback:
        "Great content, realtime Instructor,Hands-on Experience,Feedback and Assessment.",
      rating: 4,
    },
    {
      name: "Meghana Vadivelu",
      course: "React JS",
      feedback:
        "Flexible learning options made it easy to balance with my job.",
      rating: 5,
    },
    {
      name: "Shiva MP",
      course: "React JS",
      feedback:
        "Great content, realtime Instructor,Hands-on Experience,Feedback and Assessment.",
      rating: 3.5,
    },
  ];

  const handleRating = (rating) => {
    console.log(`User rated with ${rating} stars`);
    // Add your logic for handling the rating here
  };

  return (
    <StyledContainer className="my-4">
      <Title level={1} className="mb-4" style={{ fontSize: "1.7rem" }}>
        Recent Student Feedback and Ratings
      </Title>
      <Row>
        {feedbackData.map((feedback, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 d-flex flex-column rounded-0">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="user-icon"
                    size="2x"
                  />
                  <div>
                    <Title
                      level={2}
                      className="mb-0"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      {feedback.name}
                    </Title>
                    <p className="mb-0 course-name">{feedback.course}</p>
                  </div>
                </div>
                <p className="my-4">{feedback.feedback}</p>
                <div className="student-rating">
                  <StarRating
                    totalStars={5}
                    initialRating={feedback.rating}
                    onRate={handleRating}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default StudentFeedback;
