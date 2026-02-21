import React from "react";
import "./Desktop6.css";

const features = [
  {
    id: 1,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage included with every rental for your peace of mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "24/7 Availability",
    description: "Book anytime, pick up anytime. Our service runs around the clock, everyday.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Premium Support",
    description: "Dedicated customer support team ready to assist you throughout your journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Best Price Guarantee",
    description: "Find a lower price elsewhere? We'll match it and give you 10% off.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Quality Assured",
    description: "Every vehicle undergoes rigorous inspection before each rental.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Free Delivery",
    description: "Get your car delivered to your doorstep at no extra cost in select areas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const Desktop6 = () => {
  return (
    <section className="d6-section">
      <h1 className="d6-title">
        The <span>UGoCar</span> Advantage
      </h1>
      <p className="d6-subtitle">
        We go above and beyond to deliver an exceptional rental experience.
      </p>
      <div className="d6-grid">
        {features.map((feature) => (
          <div className="d6-card" key={feature.id}>
            <div className="d6-icon-box">{feature.icon}</div>
            <h3 className="d6-card-title">{feature.title}</h3>
            <p className="d6-card-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Desktop6;