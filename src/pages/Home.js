import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextSlider from "../components/TextSlider";
import CareerSection from "../components/CareerSection";
import CareerGrowthFeatures from "../components/CareerGrowthFeatures";
import StudentFeedback from "../components/StudentFeedback";
import ImageCarousel from "../components/Marquee";
import Title from "../components/Common/Title";
import "../css/Home.css";
const Home = () => {
  const images = [
    "clients/acc.png",
    "clients/cog.png",
    "clients/dbs.png",
    "clients/ibm.png",
    "clients/hcl.png",
    "clients/lt.png",
    "clients/ss.png",
    "clients/techm.png",
    "clients/ss.png",
    "clients/wipro.png",
    "clients/deloite.png",
    "clients/techsystem.jpg",
    // Add more image URLs here
  ];

  return (
    <div className="home">
      <div className="container-fluid">
        <div className="row sliders">
          <TextSlider />
        </div>
        <div className="row careerSection">
          <div className="container">
            <CareerSection />
          </div>
        </div>
        <div className="CareerGrowthFeatures">
          <CareerGrowthFeatures />
        </div>
        <div className="row sf">
          <div className="container">
            <StudentFeedback />
          </div>
        </div>
        <div className="row clients">
          <div className="container">
            <div className="container">
              <div className="clients-title">
                <Title level={2}>Our clients</Title>
              </div>
              <ImageCarousel images={images} autoScrollInterval={5000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
