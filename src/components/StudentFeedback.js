import React from 'react';
import StarRating from './StarRating'; // Import the StarRating component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon
import '../css/StudentFeedback.css';

function StudentFeedback() {
  // Sample feedback and ratings data
  const feedbackData = [
    {
      name: 'John Doe',
      course: 'Web Development',
      feedback: 'Vanara IT helped me gain valuable skills and kickstart my career!',
      rating: 5, // Rating out of 5
    },
    {
      name: 'Jane Smith',
      course: 'Data Science',
      feedback: 'The instructors are excellent, and I enjoyed the real-world projects.',
      rating: 4,
    },
    {
      name: 'Bob Johnson',
      course: 'Mobile App Development',
      feedback: 'Flexible learning options made it easy to balance with my job.',
      rating: 5,
    },
    {
      name: 'Ramesh Ask',
      course: 'Machine Learning',
      feedback: 'Great content and supportive community!',
      rating: 4,
    },
  ];

  return (
    <div className="student-feedback">
      <h2 className="feedback-title">Recent Student Feedback and Ratings</h2>
      <div className="feedback-list">
        {feedbackData.map((feedback, index) => (
          <div key={index} className="feedback-item">
            <div className="user-info">
              <FontAwesomeIcon icon={faUser} className="user-icon" size="2x" />
              <div className="info-text">
                <p className="student-name">{feedback.name}</p>
                <p className="student-course">{feedback.course}</p>
              </div>
            </div>
            <p className="student-feedback">{feedback.feedback}</p>
            <div className="student-rating">
              <span className="rating-label">Rating:</span>
              <StarRating rating={feedback.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentFeedback;
