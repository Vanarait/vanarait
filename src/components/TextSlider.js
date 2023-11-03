import React from 'react';
import { Carousel } from 'react-bootstrap';
import TrainingCourse from './TrainingCourse';
import '../css/TextSlider.css';

const trainingData = [
  
  {
    title: 'UI Fullstack With Real Time Project in Cloud',
    trainer: 'Mr. Ramesh',
    date: '21th Nov 2023 @ 9am',
    fee: '8000',
    zoomLink: 'https://www.vanarait.com',
    contact: '9494494085',
    customStyle: 'uiCourse',
  },
  
  {
    title: 'Data structures in Cloud',
    trainer: 'Mr. Ramesh',
    date: '21th Nov 2023 @ 6pm',
    fee: '5000',
    zoomLink: 'https://www.vanarait.com',
    contact: '9494494085',
    customStyle: 'dataCourse',
  },
  
  {
    title: 'JAVA Fullstack With Real Time Project in Cloud',
    trainer: 'Mr. Venkatesh',
    date: '28th Nov 2023 @ 8am',
    fee: '12000',
    zoomLink: 'https://www.vanarait.com',
    contact: '9494494085',
    customStyle: 'javaCourse',
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
