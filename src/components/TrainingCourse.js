import React from "react";
import "../css/TrainingCourse.css";
import Title from "../components/Common/Title";

const TrainingCourse = ({
  title,
  trainer,
  date,
  fee,
  zoomLink,
  contact,
  customStyle,
}) => {
  return (
    <div className={`TrainingCourse ${customStyle}`}>
      <div className="banner-content">
        <Title className="course-title" level={1}>
          {title}
        </Title>
        <Title className="trainer" level={2}>
          Online Training By {trainer}
        </Title>

        <Title level={3}>Demo on {date}</Title>
        <Title level={4}>Fee: {fee}</Title>
        <a href={zoomLink} target="_blank" rel="noreferrer noopener">
          Zoom Link
        </a>
        <Title level={5}>Please contact for any clarification: {contact}</Title>
      </div>
    </div>
  );
};

export default TrainingCourse;
