import React, { useState } from "react";
import "./Navbar.css";

/* ── Exact nav links from Figma layer panel ── */
const NAV_LINKS = [
  { label: "About",        href: "#about"      },
  { label: "How it works?",href: "#how-it-works"},
  { label: "Benefits",     href: "#benefits"   },
  { label: "Locations",    href: "#locations"  },
  { label: "Contact",      href: "#contact"    },
];

/* ── Phone icon (inline SVG — no dep needed) ── */
const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4
             1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1
             1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1
             1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
);

/* ── Hamburger icon ── */
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round">
    <line x1="18" y1="6"  x2="6"  y2="18" />
    <line x1="6"  y1="6"  x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* ── Logo ── */}
        <a href="#home" className="navbar__logo" aria-label="UGO Car Rentals Home">
          <img src="/logo.png" alt="UGO Car Rentals" />
        </a>

        {/* ── Desktop nav links ── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="navbar__link">
              {label}
            </a>
          ))}
        </nav>

        {/* ── Call Now CTA  (Group 1 — w:251 h:46 top:27 left:1232) ── */}
        <a href="tel:+91" className="navbar__cta" aria-label="Call Now">
          <PhoneIcon />
          Call Now
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a href="tel:+91" className="navbar__cta navbar__cta--mobile">
          <PhoneIcon />
          Call Now
        </a>
      </div>
    </header>
  );
}