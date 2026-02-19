import React from "react";
import { Link } from "react-router-dom";
import "./Navbar_call_now.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "#cars" },
  { label: "How it works?", href: "/how-it-works" },
  { label: "Benefits", href: "/benefits" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarCallNow() {
  return (
    <header className="navbar-call-now" role="banner">
      <div className="navbar-call-now__inner">
        <Link to="/" className="navbar-call-now__logo" aria-label="UGO Home">
          <img src="/images/logo.png" alt="UGO Car Rentals" />
        </Link>

        <nav className="navbar-call-now__links" aria-label="Locations navigation">
          {NAV_LINKS.map(({ label, href }) =>
            href.startsWith("/") ? (
              <Link
                key={label}
                to={href}
                className={
                  "navbar-call-now__link" +
                  (label === "Locations" ? " navbar-call-now__link--active" : "")
                }
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                className="navbar-call-now__link"
              >
                {label}
              </a>
            )
          )}
        </nav>

        <a href="tel:+91" className="navbar-call-now__cta" aria-label="Call Now">
          Call Now
        </a>
      </div>
    </header>
  );
}
