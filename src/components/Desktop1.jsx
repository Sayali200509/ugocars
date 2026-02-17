import React from "react";
import "./Desktop1.css";

/* ── charm:circle-tick  20×20 ── */
const CircleTick = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9" stroke="#5B5BD6" strokeWidth="1.5" />
    <path
      d="M6 10.5l3 3 5-5"
      stroke="#5B5BD6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── hugeicons:smile  34×34 ── */
const SmileIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="17" cy="17" r="14" stroke="#5B5BD6" strokeWidth="1.5" />
    <circle cx="12" cy="14" r="1.5" fill="#5B5BD6" />
    <circle cx="22" cy="14" r="1.5" fill="#5B5BD6" />
    <path
      d="M11 20c1.5 2.5 4 3.5 6 3.5s4.5-1 6-3.5"
      stroke="#5B5BD6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ── stat cards ── */
const STATS = [
  {
    icon: <CircleTick />,
    title: "100+ Vehicles",
    subtitle: "Well-maintained fleet",
  },
  {
    icon: <SmileIcon />,
    title: "Happy Customers",
    subtitle: "1000+ happy customers",
  },
  {
    icon: <CircleTick />,
    title: "Best Prices",
    subtitle: "Competitive rates daily",
  },
];

export default function Desktop1() {
  return (
    <section className="desktop1" id="about">
      {/* ── TOP SECTION: Content + Image ── */}
      <div className="desktop1__inner">

        {/* ── LEFT — Text Content ── */}
        <div className="desktop1__left">

          {/* Heading — Poppins 700  55px / 110px */}
          <h2 className="desktop1__heading">
            Your Journey,{" "}
            <span className="desktop1__heading--blue">Your Freedom</span>
          </h2>

          {/* Body — Poppins 500  20px / 35px  #615959 */}
          <p className="desktop1__body">
            At UGo Selfdrive Car Rentals, we believe in giving you the freedom
            to explore Pune and beyond on your own terms. Whether it's a
            weekend getaway, a business trip, or daily commute needs, we've got
            you covered.
          </p>
          <p className="desktop1__body">
            ✓ With flexible rental plans, well-maintained vehicles, and
            convenient pickup locations across Pune, we make self-drive car
            rentals simple, affordable, and hassle-free.
          </p>
          <p className="desktop1__body">
            ✓ Our commitment is to provide reliable, clean, and comfortable
            cars that make every journey memorable.
          </p>
          <p className="desktop1__body desktop1__body--last">
            ✓ No hidden charges, no insurance hassles—just pure driving joy
            with 24/7 customer support.
          </p>
        </div>

        {/* ── RIGHT — image
            w:677  h:452  radius:20
            shadow: x4 y4 blur10 #000 25% ── */}
        <div className="desktop1__right">
          <img
            src="/dekstop1.png"
            alt="Happy driver enjoying self-drive rental"
            className="desktop1__img"
          />
        </div>

      </div>

      {/* ── BOTTOM SECTION: Stat Cards Row ── */}
      <div className="desktop1__stats-wrapper">
        <div className="desktop1__stats">
          {STATS.map((s) => (
            <div key={s.title} className="desktop1__stat-card">
              <div className="desktop1__stat-icon">{s.icon}</div>
              <div className="desktop1__stat-text">
                <span className="desktop1__stat-title">{s.title}</span>
                <span className="desktop1__stat-sub">{s.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}