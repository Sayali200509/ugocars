import React from 'react';
import './Desktop4.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-container">
        {/* Section Header */}
        <div className="how-header">
          <p className="how-label">HOW IT WORKS</p>
          <h2 className="how-title">
            Rent in <span className="highlight-blue">4 Simple Steps</span>
          </h2>
          <p className="how-description">
            Renting a car has never been this simple—choose your location, pick a date, book your ride, and enjoy the journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {/* Step 01 - Choose Location */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-icon-wrapper location-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#6799FE"/>
                </svg>
              </div>
              <span className="step-number">01</span>
            </div>
            <h3 className="step-title">Choose Location</h3>
            <p className="step-description">
              Select your pickup location from our wide network of cities and hubs.
            </p>
            <a href="#" className="step-link">Find a location</a>
          </div>

          {/* Step 02 - Pick a Date */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-icon-wrapper calendar-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="15" rx="2" stroke="#6799FE" strokeWidth="2" fill="none"/>
                  <path d="M3 10h18M8 3v4M16 3v4" stroke="#6799FE" strokeWidth="2"/>
                </svg>
              </div>
              <span className="step-number">02</span>
            </div>
            <h3 className="step-title">Pick a Date</h3>
            <p className="step-description">
              Choose your rental dates and time that suit your schedule.
            </p>
            <a href="#" className="step-link">Check availability</a>
          </div>

          {/* Step 03 - Book Your Car */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-icon-wrapper car-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="#6799FE"/>
                </svg>
              </div>
              <span className="step-number">03</span>
            </div>
            <h3 className="step-title">Book Your Car</h3>
            <p className="step-description">
              Browse through our diverse fleet, and book the car that fits your needs, completely online.
            </p>
            <a href="#" className="step-link">Browse cars</a>
          </div>

          {/* Step 04 - Enjoy the Ride */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-icon-wrapper smile-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#6799FE" strokeWidth="2" fill="none"/>
                  <circle cx="9" cy="10" r="1.5" fill="#6799FE"/>
                  <circle cx="15" cy="10" r="1.5" fill="#6799FE"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#6799FE" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="step-number">04</span>
            </div>
            <h3 className="step-title">Enjoy the Ride</h3>
            <p className="step-description">
              Pick up your car and hit the road with confidence. Enjoy a smooth drive with 24/7 support.
            </p>
            <a href="#" className="step-link">View reviews</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
