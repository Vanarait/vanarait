import React from "react";
import { Carousel } from "react-bootstrap";
import TrainingCourse from "./TrainingCourse";
import "../css/TextSlider.css";

const trainingData = [
  {
    title: "HTML5 & CSS3 with Bootstrap",
    trainer: "Mis. Rani",
    date: "",
    fee: "3000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "uiCourse",
    bgColor:
      "radial-gradient(592px at 48.2% 50%, rgba(215, 215, 129, 0.6) 0%, rgb(161, 199, 254) 74.6%)",
  },
  {
    title: "Core & Advance Java",
    trainer: "Mrs. Ramesh",
    date: "",
    fee: "4000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "dataCourse",
    bgColor:
      "radial-gradient(592px at 48.2% 50%, rgba(215, 215, 149, 0.5) 0%, rgb(160, 199, 254) 74.6%)",
  },

  {
    title: "Javascript with React JS",
    trainer: "Mrs. Venkatesh",
    date: "",
    fee: "5000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "javaCourse",
    bgColor:
      "radial-gradient(592px at 49.2% 50%, rgba(215, 201, 129, 0.6) 0%, rgb(160, 199, 254) 74.6%)",
  },
  {
    title: "Angular 12 with TypeScript",
    trainer: "Mrs. Venkatesh",
    date: "",
    fee: "4000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "uiCourse",
    bgColor:
      "radial-gradient(592px at 48.2% 50%, rgba(215, 205, 129, 0.6) 0%, rgb(160, 189, 254) 74.6%)",
  },

  {
    title: "AWS DevOps",
    trainer: "Mrs. Ramesh",
    date: "",
    fee: "5000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "javaCourse",
    bgColor:
      "radial-gradient(592px at 48.2% 50%, rgba(215, 205, 129, 0.6) 0%, rgb(160, 199, 254) 74.6%)",
  },
  {
    title: "Java with React Project",
    trainer: "Mrs. Ramesh",
    date: "",
    fee: "10000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "dataCourse",
    bgColor:
      "radial-gradient(392px at 48.2% 50%, rgba(215, 225, 149, 0.6) 0%, rgb(160, 199, 254) 74.6%)",
  },
  {
    title: "Java8 with SpringBoot",
    trainer: "Mrs. Ramesh",
    date: "",
    fee: "6000 INR",
    zoomLink: "https://www.vanarait.com",
    contact: "+91 9392926261",
    customStyle: "uiCourse",
    bgColor:
      "radial-gradient(592px at 48.2% 50%, rgba(215, 215, 129, 0.6) 0%, rgb(160, 199, 254) 74.6%)",
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
