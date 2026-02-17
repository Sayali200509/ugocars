import React from "react";
import "./Desktop2.css";

/* ── CAR ICON — SUV side-view, matching image 3 ── */
const CarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 27h32" stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M7 27l4-10h18l4 10" stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 17l3-6h12l3 6" stroke="#4B44FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13" cy="28.5" r="3" stroke="#4B44FF" strokeWidth="2.2"/>
    <circle cx="27" cy="28.5" r="3" stroke="#4B44FF" strokeWidth="2.2"/>
  </svg>
);

/* ── CALENDAR ICON — matching image 4 ── */
const CalendarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="8" width="30" height="26" rx="4" stroke="#4B44FF" strokeWidth="2.2"/>
    <path d="M5 16h30" stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M14 4v8M26 4v8" stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M12 23h6M22 23h6M12 29h6" stroke="#4B44FF" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ── KEY ICON — circle + shaft + notches, matching image 5 ── */
const KeyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="16" r="8" stroke="#4B44FF" strokeWidth="2.2"/>
    <path d="M20 22L34 36" stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M29 31l3.5 3.5" stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M26 34l3.5 3.5" stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

/* ── REFRESH ICON — arc with arrow tip, matching image 6 ── */
const RefreshIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 20a12 12 0 1 1-2.2-6.9"
      stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round"
    />
    <path
      d="M32 9v6H26"
      stroke="#4B44FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

/* ── ARROW DOWN ── */
const ArrowDown = () => (
  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1v22" stroke="#4B44FF" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M2 16l6 7 6-7" stroke="#4B44FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const steps = [
  {
    num: "1",
    icon: <CarIcon />,
    title: "Choose Your Car",
    desc: "Browse our diverse fleet of well-maintained vehicles and select the perfect one for your journey",
    tag: "Sedans, SUVs, and more available",
  },
  {
    num: "2",
    icon: <CalendarIcon />,
    title: "Pick a Plan",
    desc: "Choose from flexible daily, weekly, or monthly rental plans that fit your budget",
    tag: "Best prices guaranteed",
  },
  {
    num: "3",
    icon: <KeyIcon />,
    title: "Drive & Enjoy",
    desc: "Pick up your car from any one of our convenient locations and hit the road with confidence",
    tag: "24/7 roadside support",
  },
  {
    num: "4",
    icon: <RefreshIcon />,
    title: "Easy Return",
    desc: "Return the car at the same location with a simple, hassle-free handover process",
    tag: "No hidden charges",
  },
];

export default function Desktop2() {
  return (
    <section className="d2-section">

      {/* HEADING — "Renting is Super Easy" */}
      <div className="d2-heading-wrap">
        <h2 className="d2-heading">
          Renting is <span className="d2-accent">Super Easy</span>
        </h2>
      </div>

      {/* SUBTITLE */}
      <p className="d2-subtitle">
        Just follow these four steps and start your adventure with UGo
      </p>

      {/* CARDS ROW */}
      <div className="d2-cards-row">
        {steps.map((step, i) => (
          <div className="d2-card-group" key={i}>
            {/* Badge circle */}
            <div className="d2-badge">
              <span className="d2-badge-num">{step.num}</span>
            </div>
            {/* Card */}
            <div className="d2-card">
              <div className="d2-icon-box">
                {step.icon}
              </div>
              <h3 className="d2-card-title">{step.title}</h3>
              <p className="d2-card-desc">{step.desc}</p>
              <div className="d2-divider" />
              <p className="d2-card-tag">{step.tag}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS ROW — one arrow directly below each card */}
      <div className="d2-arrows-row">
        {steps.map((_, i) => (
          <div className="d2-arrow-cell" key={i}>
            <ArrowDown />
          </div>
        ))}
      </div>

      {/* CTA TEXT */}
      <p className="d2-cta-text">
        Ready to start your journey? The process takes less than 5 minutes!
      </p>

      {/* CTA BUTTON */}
      <div className="d2-cta-wrap">
        <button className="d2-cta-btn">
          Get Started Now &nbsp;→
        </button>
      </div>

    </section>
  );
}