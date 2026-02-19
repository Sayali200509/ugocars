import React, { useState } from "react";
import "./HowItWorksPage.css";

// ── STEP DATA ──────────────────────────────────────────────
const steps = [
  {
    number: 1,
    icon: "/images/hiw-car-icon.png",
    title: "Choose Your Car",
    desc: "Browse our diverse fleet of well-maintained vehicles and select the perfect one for your journey",
    tag: "💡 Sedans, SUVs, and more available",
  },
  {
    number: 2,
    icon: "/images/hiw-calendar-icon.png",
    title: "Pick a Plan",
    desc: "Choose from flexible daily, weekly, or monthly rental plans that fit your budget",
    tag: "💡 Best prices guaranteed",
  },
  {
    number: 3,
    icon: "/images/hiw-key-icon.png",
    title: "Drive & Enjoy",
    desc: "Pick up your car from any of our convenient locations and hit the road with confidence",
    tag: "💡 24/7 roadside support",
  },
  {
    number: 4,
    icon: "/images/hiw-return-icon.png",
    title: "Easy Return",
    desc: "Return the car at the same location with a simple, hassle-free handover process",
    tag: "💡 No hidden charges",
  },
];

// ── STATS ──────────────────────────────────────────────────
const stats = [
  {
    icon: "/images/hiw-stat-secure.png",
    value: "100%",
    label: "Hassle free Secured Trip",
  },
  {
    icon: "/images/hiw-stat-cars.png",
    value: "25000+",
    label: "Quality cars in the city",
  },
  {
    icon: "/images/hiw-stat-delivery.png",
    value: "Delivery",
    label: "Anywhere, Anytime",
  },
  {
    icon: "/images/hiw-stat-endless.png",
    value: "Endless",
    label: "Pay by hour, drive limitless",
  },
];

// ── CATEGORIES (order: Delivery, Budget, Top Rated, SUV for 2×2 grid) ──
const categories = [
  { label: "Delivery", img: "/images/hiw-cat-delivery.png", arrow: "↗" },
  { label: "Budget", img: "/images/hiw-cat-budget.png", arrow: "↗" },
  { label: "Top Rated", img: "/images/hiw-cat-toprated.png", arrow: "↗" },
  { label: "SUV", img: "/images/hiw-cat-suv.png", arrow: "↗" },
];

// ── COMPONENT ──────────────────────────────────────────────
const HowItWorksPage = () => {
  const [location, setLocation] = useState("Shivaji Nagar, Pune");
  const [tripStart, setTripStart] = useState("25 Jan'26, 8 AM");
  const [tripEnd, setTripEnd] = useState("27 Jan'26, 8 AM");
  const [delivery, setDelivery] = useState(false);

  return (
    <div className="hiw-page">
      {/* ══ SECTION 1: RENT IN 4 STEPS ══════════════════════ */}
      <section className="hiw-steps-section">
        <h1 className="hiw-steps-title">
          Rent in <span className="hiw-steps-title--blue">4 Simple Steps</span>
        </h1>
        <p className="hiw-steps-subtitle">
          Renting a car has never been this simple—choose your location, pick a date, book your ride, and enjoy the journey.
        </p>

        {/* Steps row */}
        <div className="hiw-steps-row">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              {/* Card */}
              <div className="hiw-step-card">
                {/* Step number bubble */}
                <div className="hiw-step-number">{step.number}</div>

                {/* Icon box */}
                <div className="hiw-step-icon-wrap">
                  <img src={step.icon} alt={step.title} className="hiw-step-icon" />
                </div>

                <h3 className="hiw-step-card-title">{step.title}</h3>
                <p className="hiw-step-card-desc">{step.desc}</p>

                {/* Divider + tag */}
                <div className="hiw-step-divider" />
                <p className="hiw-step-tag">{step.tag}</p>
              </div>

              {/* Arrow connector between cards */}
              {i < steps.length - 1 && (
                <div className="hiw-step-arrow">→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step labels below */}
        <div className="hiw-step-labels">
          {steps.map((step) => (
            <div key={step.number} className="hiw-step-label-item">
              <div className="hiw-step-label-arrow">↓</div>
              <span className="hiw-step-label-text">Step {step.number}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="hiw-cta-text">
          Ready to start your journey? The process takes less than 5 minutes!
        </p>
        <button className="hiw-cta-btn">
          Get Started Now <span className="hiw-cta-btn-arrow">↓</span>
        </button>
      </section>

      {/* ══ SECTION 2: BOOKING FORM + CAR IMAGE ═════════════ */}
      <section className="hiw-booking-section">
        <div className="hiw-booking-inner">

          {/* Left — form */}
          <div className="hiw-booking-form-wrap">
            <p className="hiw-booking-eyebrow">Looking for Best Car Rentals?</p>
            <h2 className="hiw-booking-title">Book Self-Drive Car Rentals Across India</h2>

            {/* Location */}
            <div className="hiw-field">
              <label className="hiw-field-label">Location</label>
              <input
                className="hiw-input"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            {/* Trip Start / End */}
            <div className="hiw-field-row">
              <div className="hiw-field hiw-field--half">
                <label className="hiw-field-label">Trip Starts</label>
                <input
                  className="hiw-input"
                  type="text"
                  value={tripStart}
                  onChange={(e) => setTripStart(e.target.value)}
                />
              </div>
              <div className="hiw-field hiw-field--half">
                <label className="hiw-field-label">Trip Ends</label>
                <input
                  className="hiw-input"
                  type="text"
                  value={tripEnd}
                  onChange={(e) => setTripEnd(e.target.value)}
                />
              </div>
            </div>

            {/* Checkbox */}
            <label className="hiw-checkbox-label">
              <input
                type="checkbox"
                checked={delivery}
                onChange={(e) => setDelivery(e.target.checked)}
                className="hiw-checkbox"
              />
              Delivery &amp; Pick-up, from anywhere
            </label>

            {/* Search */}
            <button className="hiw-search-btn">SEARCH</button>
          </div>

          {/* Right — car1 and car2 side by side */}
          <div className="hiw-booking-cars">
            <img
              src="/images/contact us car1.png"
              alt="Car rental option 1"
              className="hiw-booking-car-img hiw-booking-car-1"
            />
            <img
              src="/images/contact us car2.png"
              alt="Car rental option 2"
              className="hiw-booking-car-img hiw-booking-car-2"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="hiw-stats-bar">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="hiw-stat">
                <img src={stat.icon} alt={stat.value} className="hiw-stat-icon" />
                <div className="hiw-stat-text">
                  <span className="hiw-stat-value">{stat.value}</span>
                  <span className="hiw-stat-label">{stat.label}</span>
                </div>
              </div>
              {i < stats.length - 1 && <div className="hiw-stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ══ SECTION 3: TOP CATEGORIES ════════════════════════ */}
      <section className="hiw-categories-section">
        <div className="hiw-categories-inner">
          <div className="hiw-categories-heading">
            <h2 className="hiw-categories-title">Top<br />Categories</h2>
          </div>

          <div className="hiw-categories-grid">
            {categories.map((cat) => (
              <div key={cat.label} className="hiw-cat-card">
                <img src={cat.img} alt={cat.label} className="hiw-cat-img" />
                <div className="hiw-cat-overlay">
                  <span className="hiw-cat-label">{cat.label}</span>
                  <span className="hiw-cat-arrow">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
