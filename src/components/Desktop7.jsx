import React from "react";
import "./Desktop7.css";

/* ─── Data ─────────────────────────────────────────────────── */
const reviews = [
  {
    id: 1,
    badge: "Verified",
    quote:
      "Great service! The car was clean and well-maintained. Booking process was super easy. Highly recommended for anyone looking for self-drive rentals in Pune.",
    name: "Rahul Dhole",
    location: "Pune",
    initial: "R",
  },
  {
    id: 2,
    badge: "Regular Customer",
    quote:
      "UGo made my weekend trip so convenient. Affordable pricing and no hidden charges. The pickup from Kothrud was hassle-free. Will definitely use again!",
    name: "Priya Patil",
    location: "Pune",
    initial: "P",
  },
  {
    id: 3,
    badge: "Monthly Plan",
    quote:
      "Excellent experience with UGo! The monthly plan is perfect for my needs. Customer service is responsive and helpful. Best car rental service in Pune!",
    name: "Amit Deshmukh",
    location: "Pune",
    initial: "A",
  },
];

const stats = [
  { value: "4.9", label: "Average Rating", showStars: true },
  { value: "1000+", label: "Happy Customers", showStars: false },
  { value: "100%", label: "Satisfied Users", showStars: false },
];

/* ─── Sub-components ────────────────────────────────────────── */

/**
 * StarIcon — uses /public/img/star-icon.png if you add it there,
 * otherwise falls back to the inline SVG gold star below.
 * Just drop a `star-icon.png` (or .svg) in public/img/ and update the src.
 */
const StarIcon = () => (
  <img
    src="/images/star-icon.png"
    alt="★"
    className="d7-star-img"
    onError={(e) => {
      /* fallback to inline SVG if image is missing */
      e.currentTarget.style.display = "none";
      e.currentTarget.parentElement.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F5A623" class="d7-star-svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }}
  />
);

const Stars = ({ size = "md" }) => (
  <div className={`d7-stars d7-stars--${size}`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

/**
 * QuoteIcon — uses /public/img/quote-icon.png if you add it there,
 * otherwise falls back to the large decorative " glyph.
 */
const QuoteIcon = () => (
  <div className="d7-quote-icon">
    <img
      src="/images/quote-icon.png"
      alt="quote"
      className="d7-quote-img"
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.parentElement.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b0c8e8" class="d7-quote-svg"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.372 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.557-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/></svg>';
      }}
    />
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="d7-review-card">
    <div className="d7-review-top">
      <span className="d7-review-badge">{review.badge}</span>
    </div>

    <Stars size="sm" />
    <QuoteIcon />

    <p className="d7-review-text">"{review.quote}"</p>

    <div className="d7-reviewer">
      <div className="d7-avatar" aria-label={review.name}>
        {review.initial}
      </div>
      <div className="d7-reviewer-info">
        <strong>{review.name}</strong>
        <span className="d7-reviewer-location">
          <span className="d7-location-pin">📍</span>
          {review.location}
        </span>
      </div>
    </div>
  </div>
);

const StatCard = ({ stat }) => (
  <div className="d7-stat-card">
    <div className="d7-stat-value">{stat.value}</div>
    <div className="d7-stat-label">{stat.label}</div>
    {stat.showStars && <Stars size="xs" />}
  </div>
);

/* ─── Main Component ────────────────────────────────────────── */
const Desktop7 = () => {
  return (
    <div className="d7-page">
      {/* ── REVIEWS SECTION ── */}
      <section className="d7-reviews-section">
        {/* Badge pill */}
        <div className="d7-badge-pill">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4A90D9"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
          Customer Reviews
        </div>

        <h1 className="d7-title">
          What Our <span>Customers Say</span>
        </h1>
        <p className="d7-subtitle">
          Join 1000+ satisfied customers who trust UGo for their car rental needs
        </p>

        {/* Review Cards */}
        <div className="d7-review-grid">
          {reviews.map((r) => (
            <ReviewCard review={r} key={r.id} />
          ))}
        </div>

        {/* Stat Cards */}
        <div className="d7-stats-grid">
          {stats.map((s) => (
            <StatCard stat={s} key={s.label} />
          ))}
        </div>

        <p className="d7-cta-text">
          Share your experience with us and become part of our community!
        </p>
        <button className="d7-feedback-btn">Share Your Feedback</button>
      </section>

      {/* ── BANNER SECTION ── */}
      <section className="d7-banner-section">
        <div className="d7-banner">
          <div className="d7-banner-left">
            <h2 className="d7-banner-title">Looking for a car?</h2>
            <p className="d7-banner-phone">+91 87748 69345</p>
            <p className="d7-banner-tagline">
              Comfortable rides at affordable prices — book your perfect car today!
            </p>
            <button className="d7-book-btn">Book now</button>
          </div>
          <div className="d7-banner-right">
            <img
              src="/images/contact us car1.png"
              alt="UGo rental car"
              className="d7-banner-car"
            />
          </div>
        </div>
      </section>

      {/* Footer is rendered by a separate Footer component — do NOT add inline footer here */}
    </div>
  );
};

export default Desktop7;