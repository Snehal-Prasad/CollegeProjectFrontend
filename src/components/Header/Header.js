import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './Header.css'; // Importing CSS file for styling
import logo from '../../assests/images/proctoruLogo.png'
import backgroundImage from '../../assests/images/backgroundimage.JPG'

// Header component
function Header() {
  const location = useLocation();

  // Check if the current location is the home page
  const isHomePage = location.pathname === '/';

  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* Link to the Welcome page */}
            <li><Link to="/welcome">Register</Link></li>
          </ul>
        </nav>
      </header>
      {/* Render the background image only on the home page */}
      {isHomePage && (
        <div className="background-image">
          <img src={backgroundImage} alt="Background" />
        </div>
      )}
    </div>
  );
}

export default Header;
