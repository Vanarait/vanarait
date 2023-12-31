import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import ReactGa from "react-ga";
import { motion } from "framer-motion";
import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OnlineTrainingDetails from "./components/OnlinTrainingDetails";
import PersonalTrainingComponent from "./components/PersonalTrainingComponent";
import RealTimeProjectComponent from "./pages/RealTimeProjectComponent";
import JobSupportComponent from "./pages/JobSupportComponent";
import TrainerRegistrationForm from "./pages/TrainerRegistrationForm";
import LoginForm from "./components/LoginForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import RegistrationForm from "./components/RegistrationForm";
import CourseOfferings from "./pages/CourseOfferings";
import isMobile from "./components/Common/MobileView";
import WhatsAppChatbot from "./components/WhatsAppChatbot";
import ScrollToTopButton from "./components/ScrollToTopButton";
import LandingPopup from "./components/LandingPopup";

WebFont.load({
  google: {
    families: ["Poppins:300,400,500,600,700&display=swap"],
  },
});

const MainContainer = styled.div`
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  margin-top: ${isMobile() ? "92px" : "133px"};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
  }
`;

const AppRouter = () => {
  useEffect(() => {
    ReactGa.initialize("G-HHJJBM4YPP");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <LandingPopup />
      <Header />
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 80 }}
        transition={{ duration: 0.8 }}
      >
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CourseOfferings" element={<CourseOfferings />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/OnlineTrainingDetails"
              element={<OnlineTrainingDetails />}
            />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            <Route
              path="/PersonalTrainingComponent"
              element={<PersonalTrainingComponent />}
            />
            <Route
              path="/RealTimeProjectComponent"
              element={<RealTimeProjectComponent />}
            />
            <Route
              path="/TrainerRegistrationForm"
              element={<TrainerRegistrationForm />}
            />
            <Route
              path="/JobSupportComponent"
              element={<JobSupportComponent />}
            />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route
              path="/ForgotPasswordForm"
              element={<ForgotPasswordForm />}
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContainer>
      </motion.div>
      <WhatsAppChatbot />
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
};

export default AppRouter;
