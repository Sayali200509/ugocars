import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const menuItems = ["Home", "Cars", "How it works?", "Benefits", "Locations", "Contact"];

  const handleNavigation = (item) => {
    setActiveSection(item);
    
    // Map menu items to routes
    const routeMap = {
      "Home": "/",
      "Cars": "/cars",
      "How it works?": "/how-it-works",
      "Benefits": "/benefits",
      "Locations": "/locations",
      "Contact": "/contact"
    };
    
    navigate(routeMap[item]);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left side - Logo and Home */}
        <div className="nav-left">
          {/* LOGO: Circle + Outer Ring */}
          <div className="logo-group" onClick={() => handleNavigation("Home")}>
            <div className="logo-outer-ring">
              <div className="logo-inner-black">
                <span className="logo-u">UGO</span>
                <span className="logo-c">CAR RENTALS</span>
              </div>
            </div>
            <span className="brand-name">UGoCar</span>
          </div>
          
          {/* Home link */}
          <button
            className={`nav-link ${activeSection === "Home" ? 'active' : ''}`}
            onClick={() => handleNavigation("Home")}
          >
            Home
          </button>
        </div>

        {/* Center - Other navigation links */}
        <div className="nav-center">
          {menuItems.filter(item => item !== "Home").map((item) => (
            <div key={item} className="nav-item-container">
              <button
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => handleNavigation(item)}
              >
                {item}
              </button>
              {/* The underline appears only for active section */}
              {activeSection === item && <div className="active-underline"></div>}
            </div>
          ))}
        </div>

        {/* Right side - Call Now button */}
        <div className="nav-right">
          <button className="call-btn-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
