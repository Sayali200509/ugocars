import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();

  const menuItems = ["Home", "Cars", "How it works?", "Benefits", "Locations", "Contact"];

  const handleNavigation = (item) => {
    setActiveSection(item);
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

        {/* Left side - Logo only */}
        <div className="nav-left">
          <div className="logo-group" onClick={() => handleNavigation("Home")}>
            <div className="logo-inner-black">
              <span className="logo-u">UGO</span>
              <span className="logo-c">CAR RENTALS</span>
            </div>
          </div>
        </div>

        {/* Center — ALL nav links including Home */}
        <div className="nav-center">
          {menuItems.map((item) => (
            <div key={item} className="nav-item-container">
              <button
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => handleNavigation(item)}
              >
                {item}
              </button>
              {activeSection === item && <div className="active-underline"></div>}
            </div>
          ))}
        </div>

        {/* Right side — Call Now button */}
        <div className="nav-right">
          <button className="call-btn-blue">
            {/* Phone icon: 24×24, white fill, positioned at top:38px left:1246px in full layout */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
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