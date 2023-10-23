import React from 'react';
import { Carousel } from 'react-bootstrap';
import JavaTraining from "./JavaTraining";
import UiTraining from "./UiTraining";
import AzureTraining from "./AzureTraining";
import '../css/TextSlider.css'; // Import your CSS file

const TextSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slide-content">
        <AzureTraining />
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-content">
        <UiTraining />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-content">
        <JavaTraining />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default TextSlider;
