import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Importing CSS file for styling
import logo from '../../assests/images/proctoruLogo.png'
import backgroundImage from '../../assests/images/backgroundimage.JPG'

// Header component
function Header() {
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
      {/* Background image */}
      <div className="background-image">
      <img src={backgroundImage} alt="Company Logo" />
      </div>
    </div>
  );
}

export default Header;
