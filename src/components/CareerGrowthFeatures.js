import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faQuestion, faCogs, faFilePdf, faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../css/CareerGrowthFeatures.css';

function CareerGrowthFeatures() {
  const features = [
    {
      title: "Learn from home",
      description: "Stay safe indoors.",
      icon: faHome, // Use Font Awesome icons
      color: "red", // Define the color
    },
    {
      title: "Beginner friendly",
      description: "No prior knowledge required",
      icon: faUser,
      color: "blue",
    },
    {
      title: "Doubt clearing",
      description: "Through Q&A forum",
      icon: faQuestion,
      color: "green",
    },
    {
      title: "Build a project",
      description: "For hands-on practice.",
      icon: faCogs,
      color: "orange",
    },
    {
      title: "Downloadable content",
      description: "PDF Documents",
      icon: faFilePdf,
      color: "purple",
    },
    {
      title: "Completion Certificate",
      description: "from Vanara IT",
      icon: faCertificate,
      color: "pink",
    },
    // Add more features with titles, descriptions, and colors
  ];

  const rows = [];
  for (let i = 0; i < features.length; i += 3) {
    const row = features.slice(i, i + 3);
    rows.push(row);
  }

  return (
    <div className="career-growth-features container">
      <h2> Key Benefits</h2>
      {rows.map((row, rowIndex) => (
        <div className="feature-row row" key={rowIndex}>
          {row.map((feature, featureIndex) => (
            <div className="col-md-4" key={featureIndex}>
              <div className="feature mb-4">
                <FontAwesomeIcon
                  icon={feature.icon}
                  size="2x" // Adjust the size as needed
                  style={{ color: feature.color }} // Apply the color
                />
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CareerGrowthFeatures;
