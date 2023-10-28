import React from 'react';
import '../css/UiTraining.css';
import TrainingCourse from './TrainingCourse'; // Import the shared component

function UiTraining() {
  return (
    <TrainingCourse
      title="UI Fullstack With React JS"
      trainer="Mr. Venkatesh"
      date="11th Nov 2023 @ 7am"
      fee="---"
      zoomLink="https://www.vanarait.com"
      contact="9494494085"
      customStyle="ui-course" // Custom CSS class
    />
  );
}
export default UiTraining;