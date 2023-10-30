import React from 'react';
import TrainingCourse from './TrainingCourse'; // Import the shared component
import '../css/JavaTraining.css';


function JavaTraining() {
  return (
    <TrainingCourse
      title="Java Fullstack With Major Project in cloud"
      trainer="Mr. Harsha"
      date="10th Nov 2023 @ 9am"
      fee="----"
      zoomLink="https://www.vanarait.com"
      contact="9494494085"
      customStyle="java-course" // Custom CSS class
    />
  );
}

export default JavaTraining;

