import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import OnlineTrainingDetails from './components/OnlinTrainingDetails';
import PersonalTrainingComponent from './components/PersonalTrainingComponent';
import RealTimeProjectComponent from './pages/RealTimeProjectComponent';
import JobSupportComponent from './pages/JobSupportComponent';
import TrainerRegistrationForm from './pages/TrainerRegistrationForm';
import ContactForm from './pages/ContactForm';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import RegistrationForm from './components/RegistrationForm';
import CourseOfferings from './pages/CourseOfferings';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CourseOfferings" element={<CourseOfferings />} />
        <Route path="/about" element={<About />} />
        <Route path="/OnlineTrainingDetails" element={<OnlineTrainingDetails />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/PersonalTrainingComponent" element={<PersonalTrainingComponent />} />
        <Route path="/RealTimeProjectComponent" element={<RealTimeProjectComponent />} />
        <Route path="/TrainerRegistrationForm" element={<TrainerRegistrationForm />} />
        <Route path="/JobSupportComponent" element={<JobSupportComponent />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/ForgotPasswordForm" element={<ForgotPasswordForm />} />
       <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
