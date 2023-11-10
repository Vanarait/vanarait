import React from "react";
import { Carousel } from "react-bootstrap";
import TrainingCourse from "./TrainingCourse";
import "../css/TextSlider.css";

const trainingData = [
  {
    title: "UI Full Stack With Real Time Project in Cloud",
    trainer: "Mr. Ramesh",
    date: "21th Nov 2023 @ 9am",
    fee: "8000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "uiCourse",
  },

  {
    title: "Data structures and Design patterns in Java",
    trainer: "Mr. Ramesh",
    date: "21th Nov 2023 @ 6pm",
    fee: "5000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "dataCourse",
  },

  {
    title: "JAVA Full Stack With Real Time Project in Cloud",
    trainer: "Mr. Venkatesh",
    date: "28th Nov 2023 @ 8am",
    fee: "12000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "javaCourse",
  },
  // Add similar objects for Java and Azure training
];

const TextSlider = () => {
  return (
    <Carousel>
      {trainingData.map((training, index) => (
        <Carousel.Item key={index}>
          <div className="slide-content">
            <TrainingCourse {...training} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TextSlider;
