import React from 'react';
import TrainingCourse from './TrainingCourse'; // Import the shared component
import '../css/AzureTraining.css';
function AzureTraining() {
  return (
    <TrainingCourse
      title="Azure DevOps Training"
      trainer="Mr. Ramesh"
      date="11th Nov 2023 @ 7am"
      fee="5000"
      zoomLink="https://example.com"
      contact="9494494085"
      customStyle="azure-course" // Custom CSS class
    />
  );
}
export default AzureTraining;
