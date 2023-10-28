import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Header.css';

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
      <div className="top-row">
        
      <div className="container mobile">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <img src="images/logo.png" alt="Logo" />
              </div>
            </div>
            <div className="col-md-9 top-row-content">
              <div className="row">
                <div className="col-md-8">
                  <div className="course-enquiry">

                    <div className="col-md-6">
                      <span>Course Enquiry:</span>
                      <a href="tel:+919494494085">+91 9494494085</a>
                    </div>

                    <div className="col-md-6">
                      <span>Email: </span>
                      <a href="mailto:hr@vanarait.com">hr@vanarait.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="social-icons">
                    <div className="rounded-social-buttons">
                      <a
                        className="social-button whatsup"
                        href="https://chat.whatsapp.com/CYmkHLDzRTyJkY5Dw0LRPd&amp;text=Hello, I Want to discuss with you regarding "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                      <a className="social-button twitter" href="https://twitter.com/VanaraIT" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        className="social-button youtube"
                        href="https://www.youtube.com/@vanarait?sub_confirmation=1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                      <a className="social-button facebook" href="https://www.facebook.com/vanarait" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="social-button instagram" href="https://www.instagram.com/vanarait/" target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">

                  <nav className={`navigation ${isMobileMenuOpen ? 'open' : 'close'}`}>
                    <ul>
                      <li> <Link to="/">Home</Link></li>
                      <li>
                        <Link> Services <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                        <ul className="submenu">
                          <li><Link to="/OnlineTrainingDetails">Online Training</Link></li>
                          <li><Link to="/PersonalTrainingComponent">Personal Training</Link></li>
                          <li><Link to="/JobSupportComponent">Job Support</Link></li>
                          <li><Link to="/RealTimeProjectComponent">Academic/Real Time projects</Link></li>
                        </ul>
                      </li>
                      <li> <Link to="/CourseOfferings"> Courses Offering</Link> </li>
                      <li><Link to="/OnlineTrainingDetails"> Batch Schedules </Link>
                      </li>
                      <li> <Link to="/TrainerRegistrationForm">Trainer Registration</Link></li>
                      <li><Link to="/ContactForm">Get In Touch</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-3">
                  <div className="user-actions resp">
                    <button className="btn btn-danger"><Link to="/LoginForm">Sign In</Link></button>
                  </div>
                  <button onClick={toggleMobileMenu} className="mobile-menu-toggle">
                    <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container desktop">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <img src="images/logo.png" alt="Logo" />
              </div>
            </div>
            <div className="col-md-9 top-row-content">
              <div className="row">
                <div className="col-md-8">
                  <div className="course-enquiry">

                    <div className="col-md-6">
                      <span>Course Enquiry:</span>
                      <a href="tel:+919494494085">+91 9494494085</a>
                    </div>

                    <div className="col-md-6">
                      <span>Email: </span>
                      <a href="mailto:hr@vanarait.com">hr@vanarait.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="social-icons">
                    <div className="rounded-social-buttons">
                      <a
                        className="social-button whatsup"
                        href="https://chat.whatsapp.com/CYmkHLDzRTyJkY5Dw0LRPd&amp;text=Hello, I Want to discuss with you regarding "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                      <a className="social-button twitter" href="https://twitter.com/VanaraIT" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        className="social-button youtube"
                        href="https://www.youtube.com/@vanarait?sub_confirmation=1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                      <a className="social-button facebook" href="https://www.facebook.com/vanarait" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="social-button instagram" href="https://www.instagram.com/vanarait/" target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">

                  <nav className={`navigation ${isMobileMenuOpen ? 'open' : 'close'}`}>
                    <ul>
                      <li> <Link to="/">Home</Link></li>
                      <li>
                        <Link> Services <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                        <ul className="submenu">
                          <li><Link to="/OnlineTrainingDetails">Online Training</Link></li>
                          <li><Link to="/PersonalTrainingComponent">Personal Training</Link></li>
                          <li><Link to="/JobSupportComponent">Job Support</Link></li>
                          <li><Link to="/RealTimeProjectComponent">Academic/Real Time projects</Link></li>
                        </ul>
                      </li>
                      <li> <Link to="/CourseOfferings"> Courses Offering</Link> </li>
                      <li><Link to="/OnlineTrainingDetails"> Batch Schedules </Link>
                      </li>
                      <li> <Link to="/TrainerRegistrationForm">Trainer Registration</Link></li>
                      <li><Link to="/ContactForm">Get In Touch</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-3">
                  <div className="user-actions resp">
                    <button className="btn btn-danger"><Link to="/LoginForm">Sign In</Link></button>
                  </div>
                  <button onClick={toggleMobileMenu} className="mobile-menu-toggle">
                    <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                  </button>
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
