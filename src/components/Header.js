import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Include Font Awesome CSS
import '../css/Header.css'; // Create a custom CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="top-row">
        <div className="container">
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
                    <span>Course Enquiry:</span>
                    <a href="tel:+919494494085">+91 9494494085</a>
                    <span>Email: </span>
                    <a href="mailto:example@example.com">hr@vanarait.com</a>
                  </div>
                </div>
                <div className="col-md-4">
               
                <div className="social-icons">
                    <div class="rounded-social-buttons">
                      <a class="social-button whatsup" href="https://chat.whatsapp.com/CYmkHLDzRTyJkY5Dw0LRPd&amp;text=Hello, I Want to discus with you regarding " target="_blank" rel="noreferrer"><i class="fa fa-whatsapp" aria-hidden="true"></i>A</a>
                      <a class="social-button twitter " href="https://twitter.com/VanaraIT" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i>C</a>
                      <a class="social-button youtube" href="https://www.youtube.com/@vanarait?sub_confirmation=1" target="_blank" rel="noreferrer"><i class="fa fa-youtube"></i>B</a>
                      <a class="social-button facebook" href="https://www.facebook.com/vanarait" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i>D</a>
                      <a class="social-button instagram" href="https://www.instagram.com/vanarait/" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i>E</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  <nav className="navigation">
                    <ul>
                      <li> <Link to="/">Home</Link></li>

                      <li>
                        <a href="www.vanarait.com"> Services <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                        <ul class="submenu">
                          <li><Link to="/OnlineTrainingDetails">Online Training</Link></li>

                          <li>
                            <Link to="/PersonalTrainingComponent">Personal Training</Link>
                          </li>
                          <li>
                            <Link to="/JobSupportComponent">Job Support</Link>
                          </li>
                          <li>
                            <Link to="/RealTimeProjectComponent">Academic/Real Time projects</Link>
                          </li>

                        </ul>
                      </li>
                      <li> <Link to="/CourseOfferings"> Courses Offering</Link> </li>

                      <li>
                        <Link to="/OnlineTrainingDetails"> Batch Schedules </Link>

                      </li>

                      <li> <Link to="/TrainerRegistrationForm">Trainer Registration</Link></li>
                      <li><Link to="/ContactForm">Get In Touch</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-3">
                <div className="user-actions">
                    <button className="btn btn-primary"><Link to="/LoginForm">Sign In</Link></button>
                  </div>
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
