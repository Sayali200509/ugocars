import React from "react";
import "./Home.css";
import CarListingSection from "./Desktop 3";
import HowItWorks from "./Desktop4";

export default function HeroSection() {
  return (
    <>
      <section className="hero" style={{backgroundImage: `url('/hero-car.png')`}}>
        <div className="hero__overlay" />

        <div className="hero__content">
          <p className="hero__label">PREMIUM CAR RENTAL</p>

          <h1 className="hero__title">
            Drive Your<br />
            <span className="hero__title--blue">Dreams</span> Today
          </h1>

          <p className="hero__subtitle">
            Choose from our wide range of comfortable sedans, compact hatchbacks,
            spacious MUVs, powerful SUVs, and reliable 7-seaters - perfect for every
            trip and occasion.
          </p>

          <div className="search-box">
            <div className="search-box__fields">
              <div className="search-field">
                <span className="search-field__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#6799FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <div className="search-field__label">Pick-up Location</div>
                  <div className="search-field__placeholder">Enter city or airport</div>
                </div>
              </div>

              <div className="search-field">
                <span className="search-field__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#6799FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </span>
                <div>
                  <div className="search-field__label">Pick-up Date</div>
                  <div className="search-field__placeholder">dd-mm-yyyy</div>
                </div>
              </div>

              <div className="search-field">
                <span className="search-field__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#6799FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </span>
                <div>
                  <div className="search-field__label">Return Date</div>
                  <div className="search-field__placeholder">dd-mm-yyyy</div>
                </div>
              </div>
            </div>

            <button className="search-box__btn">
              <strong>Search Available Cars</strong>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Car Listing Section */}
      <CarListingSection />
      
      {/* How It Works Section */}
      <HowItWorks />
    </>
  );
}
