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
    tag: " No hidden charges",
  },
];

// ── STATS ──────────────────────────────────────────────────
const stats = [
  { icon: "/images/hiw-stat-secure.png",   value: "100%",     label: "Hassle free Secured Trip" },
  { icon: "/images/hiw-stat-cars.png",     value: "25000+",   label: "Quality cars in the city" },
  { icon: "/images/hiw-stat-delivery.png", value: "Delivery", label: "Anywhere, Anytime" },
  { icon: "/images/hiw-stat-endless.png",  value: "Endless",  label: "Pay by hour, drive limitless" },
];

// ── CATEGORIES ─────────────────────────────────────────────
const categories = [
  { label: "Delivery",  img: "/images/hiw-cat-delivery.png" },
  { label: "Budget",    img: "/images/hiw-cat-budget.png" },
  { label: "Top Rated", img: "/images/hiw-cat-toprated.png" },
  { label: "SUV",       img: "/images/hiw-cat-suv.png" },
];

// ── COMPONENT ──────────────────────────────────────────────
const HowItWorksPage = () => {
  const [city,      setCity]      = useState("Pune");
  const [location,  setLocation]  = useState("Shivaji Nagar, Pune");
  const [tripStart, setTripStart] = useState("25 Jan'26, 8 AM");
  const [tripEnd,   setTripEnd]   = useState("27 Jan'26, 8 AM");
  const [delivery,  setDelivery]  = useState(false);

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

        <div className="hiw-steps-row">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className="hiw-step-card">
                <div className="hiw-step-number">{step.number}</div>
                <div className="hiw-step-icon-wrap">
                  <img src={step.icon} alt={step.title} className="hiw-step-icon" />
                </div>
                <h3 className="hiw-step-card-title">{step.title}</h3>
                <p className="hiw-step-card-desc">{step.desc}</p>
                <div className="hiw-step-divider" />
                <p className="hiw-step-tag">{step.tag}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hiw-step-arrow">
                  <div className="hiw-step-arrow-line" />
                  <div className="hiw-step-arrow-tip" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="hiw-step-labels">
          {steps.map((step) => (
            <div key={step.number} className="hiw-step-label-item">
              <div className="hiw-step-label-arrow">↓</div>
              <span className="hiw-step-label-text">Step {step.number}</span>
            </div>
          ))}
        </div>

        <p className="hiw-cta-text">
          Ready to start your journey? The process takes less than 5 minutes!
        </p>
        <button className="hiw-cta-btn">
          Get Started Now <span className="hiw-cta-btn-arrow">↓</span>
        </button>
      </section>

      {/* ══ SECTION 2: BOOKING FORM + CARS ══════════════════ */}
      <section className="hiw-booking-section">
        <div className="hiw-booking-inner">
          <div className="hiw-booking-form-wrap">
            <p className="hiw-booking-eyebrow">Looking for Best Car Rentals?</p>
            {/* LEFT-aligned title — matches expected */}
            <h2 className="hiw-booking-title">Book Self-Drive Car Rentals Across India</h2>

            {/* City dropdown */}
            <div className="hiw-field">
              <label className="hiw-field-label">City</label>
              <div className="hiw-select-wrap">
                <select className="hiw-select" value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
                <span className="hiw-select-chevron">▾</span>
              </div>
            </div>

            <div className="hiw-field">
              <label className="hiw-field-label">Location</label>
              <input className="hiw-input" type="text" value={location}
                onChange={(e) => setLocation(e.target.value)} />
            </div>

            <div className="hiw-field-row">
              <div className="hiw-field hiw-field--half">
                <label className="hiw-field-label">Trip Starts</label>
                <input className="hiw-input" type="text" value={tripStart}
                  onChange={(e) => setTripStart(e.target.value)} />
              </div>
              <div className="hiw-field hiw-field--half">
                <label className="hiw-field-label">Trip Ends</label>
                <input className="hiw-input" type="text" value={tripEnd}
                  onChange={(e) => setTripEnd(e.target.value)} />
              </div>
            </div>

            <label className="hiw-checkbox-label">
              <input type="checkbox" checked={delivery}
                onChange={(e) => setDelivery(e.target.checked)} className="hiw-checkbox" />
              Delivery &amp; Pick-up, from anywhere
            </label>

            <button className="hiw-search-btn">SEARCH</button>
          </div>

          {/* cars overlap */}
          <div className="hiw-booking-cars">
            <img src="/images/contact us car1.png" alt="Car 1"
              className="hiw-booking-car-img hiw-booking-car-1" />
            <img src="/images/contact us car2.png" alt="Car 2"
              className="hiw-booking-car-img hiw-booking-car-2" />
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

      {/* ══ SECTION 3: TOP CATEGORIES ════════════════════════
          Expected layout (from design):
          Left: "Top Categories" text — plain, no card/box
          Grid:
            col1(2fr): Delivery(row1) + TopRated(row2) stacked
            col2(1fr): Budget — full height
            col3(1fr): SUV — full height
      ═══════════════════════════════════════════════════════ */}
      <section className="hiw-categories-section">
        <div className="hiw-categories-inner">

          {/* Plain text heading — no card, no bg image box */}
          <div className="hiw-categories-heading">
            <h2 className="hiw-categories-title">Top<br />Categories</h2>
          </div>

          <div className="hiw-categories-grid">
            {categories.map((cat, index) => {
              // Define grid positions based on index to match the expected layout
              const gridClasses = [
                'hiw-cat-area-delivery',  // index 0: Delivery, col1 row1
                'hiw-cat-area-budget',    // index 1: Budget, col2 full height
                'hiw-cat-area-suv',       // index 2: SUV, col3 full height  
                'hiw-cat-area-toprated'   // index 3: Top Rated, col1 row2
              ];
              
              return (
                <div key={cat.label} className={`hiw-cat-card ${gridClasses[index]}`}>
                  <img src={cat.img} alt={cat.label} className="hiw-cat-img" />
                  <div className="hiw-cat-overlay">
                    <span className="hiw-cat-label">{cat.label}</span>
                    <span className="hiw-cat-arrow">↗</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorksPage;