import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Import your global CSS file for additional styles
import AppRouter from './AppRouter';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
        <AppRouter />
        </div>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;
