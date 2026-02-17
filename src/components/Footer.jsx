import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-section company-info">
          <div className="logo-section">
            <img src="/logo.png" alt="UGoCar Logo" className="footer-logo" />
          </div>
          <p className="company-description">
            Premium car rental service delivering luxury, comfort, and reliability since 2010.
          </p>
        </div>

        {/* Quick Links */}
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

        {/* Vehicle Types */}
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

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <p className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:ugocars@cars.com" className="contact-link">ugocars@cars.com</a>
            </p>
            <p className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href="tel:+917684958637" className="contact-link">+91-7684958637</a>
            </p>
            <p className="contact-item">
              <span className="contact-label">Address:</span>
              <span className="contact-text">123, Shivajinagar, Pune</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright"> 2026 UGoCars. All Rights Reserved.</p>
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