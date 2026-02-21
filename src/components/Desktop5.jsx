import React from "react";
import "./Desktop5.css";

const steps = [
  {
    id: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="#4A90D9" stroke="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: "Choose Location",
    description: "Select your pickup location from our wide network of cities and hubs.",
    link: "Find a location",
  },
  {
    id: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Pick a Date",
    description: "Choose your rental dates and time that suit your schedule.",
    link: "Check availability",
  },
  {
    id: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17H5v-5l2.5-6h9L19 12v5z" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
        <path d="M5 12h14" />
      </svg>
    ),
    title: "Book Your Car",
    description: "Browse through our diverse fleet, and book the car that fits your needs, completely online.",
    link: "Browse cars",
  },
  {
    id: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Enjoy the Ride",
    description: "Pick up your car and hit the road with confidence. Enjoy a smooth drive with 24/7 support.",
    link: "View reviews",
  },
];

const Desktop5 = () => {
  return (
    <section className="hiw-section">
      <p className="hiw-label">HOW IT WORKS</p>
      <h1 className="hiw-title">
        Rent in <span>4 Simple Steps</span>
      </h1>
      <p className="hiw-subtitle">
        Renting a car has never been this simple—choose your location, pick a
        date, book your ride, and enjoy the journey.
      </p>
      <div className="hiw-grid">
        {steps.map((step) => (
          <div className="hiw-card" key={step.id}>
            <div className="hiw-card-top">
              <div className="hiw-icon-box">{step.icon}</div>
              <span className="hiw-step-number">{step.id}</span>
            </div>
            <h3 className="hiw-card-title">{step.title}</h3>
            <p className="hiw-card-desc">{step.description}</p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <button onClick={(e) => e.preventDefault()} className="hiw-card-link">{step.link}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Desktop5;