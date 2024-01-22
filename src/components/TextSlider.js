import React from "react";
import { Carousel } from "react-bootstrap";
import TrainingCourse from "./TrainingCourse";
import "../css/TextSlider.css";

const trainingData = [
  {
    title: "Core Java",
    trainer: "Mr. Ramesh",
    date: "04th Feb 2024 @ 9:30am",
    fee: "1000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "uiCourse",
    bgColor:
      "linear-gradient(89.9deg, rgb(208, 146, 255) 0.1%, rgb(255, 237, 237) 47.9%, rgb(255, 255, 231) 100.2%)",
  },

  {
    title: "React JS",
    trainer: "Mr. Venkatesh",
    date: "5th Feb 2024 @ 2pm",
    fee: "1000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "dataCourse",
    bgColor:
      " radial-gradient(circle at 50.3% 44.5%, rgb(116, 147, 179) 0%, rgb(62, 83, 104) 100.2%)",
  },

  {
    title: "AWS DevOps",
    trainer: "Mr. Ramesh",
    date: "208th Feb 2024 @ 8pm",
    fee: "12000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "javaCourse",
    bgColor:
      "radial-gradient(592px at 48.2% 50%, rgba(205, 205, 249, 0.6) 0%, rgb(160, 199, 254) 74.6%)",
  },
  {
    title: "Java UI Full Stack",
    trainer: "Mr. Venkatesh",
    date: "28th Feb 2024 @ 4pm",
    fee: "12000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "javaCourse",
    bgColor:
      "radial-gradient(592px at 48.2% 50%, rgba(200, 200, 249, 0.6) 0%, rgb(160, 199, 254) 74.6%)",
  },
  // Add similar objects for Java and Azure training
];

const TextSlider = () => {
  return (
    <Carousel>
      {trainingData.map((training, index) => (
        <Carousel.Item key={index}>
          <div
            className="slide-content"
            style={{ background: training.bgColor }}
          >
            <TrainingCourse {...training} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TextSlider;
