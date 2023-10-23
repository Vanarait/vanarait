import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextSlider from "../components/TextSlider";
import CareerSection from "../components/CareerSection";
import CareerGrowthFeatures from "../components/CareerGrowthFeatures";
import StudentFeedback from "../components/StudentFeedback";
import ImageCarousel from "../components/ImageCarousel";
import '../css/Home.css';
const Home = () => {
  const images = [
    'clients/acc.png',
    'clients/cog.png',
    'clients/dbs.png',
    'clients/ibm.png',
    'clients/hcl.png',
    'clients/lt.png',
    'clients/ss.png',
    'clients/techm.png',
    'clients/ss.png',
    'clients/wipro.png',
    'clients/deloite.png',
    'clients/techsystem.jpg'
    // Add more image URLs here
  ];

  return (
    <div className="home">
      <div className="container">
        <div className='row sliders'>
          <div className='col-md-12'>
            <TextSlider />
          </div>
        </div>
        <div className='careerSection'>
          <CareerSection />
        </div>
        <div className='CareerGrowthFeatures'>
        <CareerGrowthFeatures />
        </div>
        <div className='row studentFeedback'>
          <StudentFeedback />
        </div>
        <div className='row clients'>
        <div className="clients-title">
          <h2 className="animated-title">Our clients</h2>
        </div>
        <ImageCarousel images={images} autoScrollInterval={5000} />

        </div>
      </div>
    </div >
  );
};

export default Home;
