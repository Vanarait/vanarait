import React from 'react';
import '../css/TrainingCourse.css';

function TrainingCourse({ title, trainer, date, fee, zoomLink, contact, customStyle }) {
  return (
    <div className={`TrainingCourse ${customStyle}`}>
      <div className="banner-content">
        <h1 className="course-title">{title}</h1>
        <h2 className="trainer">Online Training By {trainer}</h2>
        <h3>Demo on {date}</h3>
        <h4>Fee: {fee}</h4>
        <a href={zoomLink} target="_blank" rel="noreferrer noopener">
          Zoom Link
        </a>
        <h5>Please contact for any clarification: {contact}</h5>
      </div>
    </div>
  );
}

export default TrainingCourse;
