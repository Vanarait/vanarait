import React from 'react';
import StarRating from './StarRating'; // Import the StarRating component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon
import '../css/StudentFeedback.css';

function StudentFeedback() {
  // Sample feedback and ratings data
  const feedbackData = [
    {
      name: 'Sidramesh mudma',
      course: 'UI Full Satack',
      feedback: 'Vanara IT helped me gain valuable skills and kickstart my career!',
      rating: 5, // Rating out of 5
    },
    {
      name: 'Manikanta Shakarulu',
      course: 'Java Full Stack',
      feedback: 'The instructors are excellent, and I enjoyed the real-world projects.',
      rating: 4,
    },
    {
      name: 'Jeeva petupulu',
      course: 'Java Full Stack',
      feedback: 'Flexible learning options made it easy to balance with my job.',
      rating: 5,
    },
    {
      name: 'Ashok Mulla',
      course: 'Java Full Stack',
      feedback: 'Great content, realtime Instructor,Hands-on Experience,Feedback and Assessment.',
      rating: 4,
    },
    {
      name: 'Meghana Vadivelu',
      course: 'React JS',
      feedback: 'Flexible learning options made it easy to balance with my job.',
      rating: 5,
    },
    {
      name: 'Shiva MP',
      course: 'React JS',
      feedback: 'Great content, realtime Instructor,Hands-on Experience,Feedback and Assessment.',
      rating: 3.5,
    },
  ];

  return (
    <div className="student-feedback container">
      <h2 className="feedback-title">Recent Student Feedback and Ratings</h2>
      <div className="feedback-list row">
        {feedbackData.map((feedback, index) => (
          <div key={index} className="col-md-4">
            <div className="feedback-item">
              <div className="user-info">
                <FontAwesomeIcon icon={faUser} className="user-icon" size="2x" />
                <div className="info-text">
                  <p className="student-name">{feedback.name}</p>
                  <p className="student-course">{feedback.course}</p>
                </div>
              </div>
              <p className="student-feedback">{feedback.feedback}</p>
              <div className="student-rating">
                <StarRating rating={feedback.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentFeedback;
