import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Home', link: '/' },
  {
    label: 'Services',
    link: '#',
    submenu: [
      { label: 'Online Training', link: '/OnlineTrainingDetails' },
      { label: 'Personal Training', link: '/PersonalTrainingComponent' },
      { label: 'Job Support', link: '/JobSupportComponent' },
      { label: 'Academic/Real Time projects', link: '/RealTimeProjectComponent' },
    ],
  },
  { label: 'Courses Offering', link: '/CourseOfferings' },
  { label: 'Batch Schedules', link: '/BatchSchedules' },
  { label: 'Trainer Registration', link: '/TrainerRegistrationForm' },
  { label: 'Get In Touch', link: '/ContactForm' },
  // Add more menu items as needed
];

const Navigation = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav className={`navigation ${isMobileMenuOpen ? 'open' : 'close'}`}>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {menuItem.submenu ? (
              <span>
                {menuItem.label} <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            ) : (
              <Link to={menuItem.link}>{menuItem.label}</Link>
            )}
            {menuItem.submenu && (
              <ul className="submenu">
                {menuItem.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subItem.link}>{subItem.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
