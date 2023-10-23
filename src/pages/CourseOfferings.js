import React from 'react';
import '../css/CourseOfferings.css';

const CourseOfferings = () => {
  // Sample data for course offerings
  const courses = [
    {
      id: 1,
      title: 'React JS',
      durationMonths: 2,
      originalPrice: '$199',
      offerPrice: '$149',
      imageUrl: 'https://example.com/react-course-image.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Core and Advanced Java',
      durationMonths: 3,
      originalPrice: '$249',
      offerPrice: '$199',
      imageUrl: 'https://example.com/nodejs-course-image.jpg', // Replace with actual image URL
    },
    {
        id: 3,
        title: 'UI FullStack With Resct JS',
        durationMonths: 2,
        originalPrice: '$199',
        offerPrice: '$149',
        imageUrl: 'https://example.com/react-course-image.jpg', // Replace with actual image URL
      },
      {
        id: 4,
        title: 'Java FullStack With Resct JS',
        durationMonths: 3,
        originalPrice: '$249',
        offerPrice: '$199',
        imageUrl: 'https://example.com/nodejs-course-image.jpg', // Replace with actual image URL
      },
      {
        id: 5,
        title: 'AWS DevOps',
        durationMonths: 2,
        originalPrice: '$199',
        offerPrice: '$149',
        imageUrl: 'https://example.com/react-course-image.jpg', // Replace with actual image URL
      },
      {
        id: 6,
        title: 'Azure DevOps',
        durationMonths: 3,
        originalPrice: '$249',
        offerPrice: '$199',
        imageUrl: 'https://example.com/nodejs-course-image.jpg', // Replace with actual image URL
      },
    // Add more courses as needed
  ];

  return (
    <div className="course-offerings-container">
      <h2>Course Offerings</h2>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className="course">
            <img src={course.imageUrl} alt={course.title} />
            <h6>{course.title}</h6>
            <p>
              <span className='ct_cf'>Duration:</span> {course.durationMonths} months
            </p>
            <p className="price-info">
              <span className='ct_cf'>Price:</span> {course.offerPrice} <span className="original-price">({course.originalPrice})</span>
            </p>
            <button className="course-details-button">Course Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOfferings;
