import React from "react";
import "./Hero.css";
import carImage from "../images/car.jpg";

/* ── icon SVGs inlined to avoid any dependency ── */
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
      a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
      1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.79-19.79 0 0 1-8.63-3.07
      17.5 17.5 0 0 1-6-6
      19.79-19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
      c.127.96.361 1.903.7 2.81
      a2 2 0 0 1-.45 2.11L8.09 9.91
      a16 16 0 0 0 6 6l1.27-1.27
      a2 2 0 0 1 2.11-.45
      c.907.339 1.85.573 2.81.7
      A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#22C55E" />
    <path d="M8 14l4 4 8-8" stroke="#fff" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DollarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#6366F1" />
    <text x="14" y="19" textAnchor="middle"
      fontSize="14" fontWeight="700" fill="#fff" fontFamily="sans-serif">$</text>
  </svg>
);

const Support247Icon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" fill="none" stroke="#6366F1" strokeWidth="2" />
    <text x="14" y="18" textAnchor="middle"
      fontSize="8" fontWeight="700" fill="#6366F1" fontFamily="sans-serif">24/7</text>
  </svg>
);

/* ── feature pill badges ── */
const features = [
  "✓ Daily • Weekly • Monthly Plans",
  "✓ Well-Maintained Fleet",
  "✓ Hassle-Free Process",
];

/* ── trust badges ── */
const trustBadges = [
  { icon: <CheckCircleIcon />, label: "100% Trusted" },
  { icon: <DollarIcon />,    label: "Best Prices"  },
  { icon: <Support247Icon />, label: "24/7 Support" },
];

export default function HeroSection() {
  return (
    <section className="hero" style={{
      backgroundImage: `url(${carImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* dark overlay over the bg image */}
      <div className="hero__overlay" />

      <div className="hero__inner">

        {/* ── top pill badge ── */}
        <div className="hero__pill">Over 1000+ Happy Customers</div>

        {/* ── headline ── */}
        <h1 className="hero__headline">
          Drive Your Own Way with
          <br />
          <span className="hero__headline--brand">UGo Selfdrive</span>
        </h1>

        {/* ── sub-headline ── */}
        <p className="hero__sub">
          Affordable, convenient, and insurance-free car rentals in Pune.
        </p>

        {/* ── feature pills ── */}
        <div className="hero__features">
          {features.map((f) => (
            <span key={f} className="hero__feature-pill">{f}</span>
          ))}
        </div>

        {/* ── CTA buttons ── */}
        <div className="hero__ctas">
          <button className="hero__btn hero__btn--primary">
            <CalendarIcon />
            Book a Car Now
          </button>
          <button className="hero__btn hero__btn--ghost">
            <HeartIcon />
            Learn More
          </button>
          <button className="hero__btn hero__btn--ghost">
            <PhoneIcon />
            Call Now
          </button>
        </div>

        {/* ── trust strip ── */}
        <div className="hero__trust">
          {trustBadges.map(({ icon, label }) => (
            <div key={label} className="hero__trust-item">
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}