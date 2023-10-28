import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Header.css';
import Navigation from '../components/Navigation';
import SocialIcons from '../components/SocialIcons'; // Import the HeaderContent component

import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="row">
            <div className="col-md-3">
              {/* Logo */}
              <div className="logo">
                <img src="images/logo.png" alt="Logo" />
              </div>
            </div>
            <div className="col-md-9">

              <div className="row">
                <div className="col-md-7">

                  {/* Contact Information */}
                  <div className="contact-info">
                    <div className="course-enquiry">
                      <span>Course Enquiry:</span>
                      <a href="tel:+919494494085">+91 9494494085</a>
                      <span>Email: </span>
                      <a href="mailto:hr@vanarait.com">hr@vanarait.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <SocialIcons />
                </div>
                <div className='col-md-2'>
                <button className="btn btn-danger"><Link to="/LoginForm">Sign In</Link></button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Navigation isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
