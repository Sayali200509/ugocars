import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Col 1: Logo + Brand name + Description */}
        <div className="footer-section company-info">
          <div className="logo-section">
            {/* Logo: 104×82px, outer ring with light blue border */}
            <div className="footer-logo-outer">
              <div className="footer-logo-inner">
                <span className="footer-logo-ugo">UGO</span>
                <span className="footer-logo-car">CAR RENTALS</span>
              </div>
            </div>
            {/* Brand name: Inter, 700, 22px */}
            <span className="footer-brand-name">UGoCar</span>
          </div>
          {/* Description: Inter, 500 (Medium), opacity 70% */}
          <p className="company-description">
            Premium car rental service delivering luxury, comfort, and reliabilty since 2010.
          </p>
        </div>

        {/* Col 2: Quick Links — heading Inter 500 20px, links Inter 500 opacity 70% */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#fleet">Our Fleet</a></li>
            <li><a href="#locations">Locations</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        {/* Col 3: Vehicle Types */}
        <div className="footer-section">
          <h3 className="footer-heading">Vehicle Types</h3>
          <ul className="footer-links">
            <li><a href="#luxury">Luxury Sedans</a></li>
            <li><a href="#sports">Sports Cars</a></li>
            <li><a href="#suvs">SUVs</a></li>
            <li><a href="#convertibles">Convertibles</a></li>
            <li><a href="#electric">Electric Vehicles</a></li>
            <li><a href="#vans">Vans</a></li>
          </ul>
        </div>

        {/* Col 4: Contact Us — no labels, just plain text lines */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <p className="contact-item">
              <a href="mailto:ugocars@cars.com" className="contact-link">ugocars@cars.com</a>
            </p>
            <p className="contact-item">
              <a href="tel:+917684958637" className="contact-link">+91-7684958637</a>
            </p>
            <p className="contact-item">
              <span className="contact-text">123, Shivajinagar, Pune</span>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom bar: copyright left, legal links right — border-top is the divider */}
      <div className="footer-bottom">
        {/* Copyright: Inter 500 18px, opacity 70% */}
        <p className="copyright">2026 UGoCars. All Rights Reserved.</p>
        {/* Legal links */}
        <div className="footer-legal">
          <a href="#privacy" className="legal-link">Privacy Policy</a>
          <a href="#terms" className="legal-link">Terms of Service</a>
          <a href="#cookies" className="legal-link">Cookies</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;