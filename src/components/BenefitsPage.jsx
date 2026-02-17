import React from "react";
import "./BenefitsPage.css";
import Footer from "./Footer";

/* ── Quotation Mark Icon ── */
const QuoteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <text x="0" y="45" fontSize="60" fontWeight="bold" fill="#5B5BD6" fontFamily="Georgia, serif">"</text>
  </svg>
);

const BenefitsPage = () => {
  return (
    <div className="benefits-container">
      {/* Header Section */}
      <section className="header">
        <h1>Why Choose Us?</h1>
        <h2>We compare car rental prices, you save!</h2>
        <p>Find the perfect rental car for your trip</p>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <ul>
          <li>✔ No Hidden Fees</li>
          <li>✔ 24/7 Multilingual Customer Service</li>
          <li>✔ Free Cancellation</li>
          <li>✔ Information You Can Trust</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h3>Why are our prices lower?</h3>
        <p>
          Since we negotiate prices for many rental cars at a time directly with
          the car rental companies, we are able to secure lower prices for our
          customers.
        </p>
        <h3>Flexible Booking Options</h3>
        <ul>
          <li>Modify or cancel bookings easily</li>
          <li>Short-term & long-term rentals available</li>
          <li>No penalties on eligible cancellations</li>
        </ul>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <h2>Reviews from our customers</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-quote-icon"><QuoteIcon /></div>
            <p className="review-text">
              Booking a rental car has never been this easy. I found the best
              price within minutes and had zero hidden charges at checkout.
            </p>
            <div className="review-footer">
              <img src="/customer1.png" alt="Amit Sharma" className="review-avatar" />
              <div className="review-info">
                <span className="review-company">Kuphal LLC</span>
                <span className="review-name">Amit Sharma</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-quote-icon"><QuoteIcon /></div>
            <p className="review-text">
              The comparison feature saved me a lot of money. Customer support was
              quick and very helpful when I needed to change my booking.
            </p>
            <div className="review-footer">
              <img src="/customer2.png" alt="River Graves" className="review-avatar" />
              <div className="review-info">
                <span className="review-company">Glover - Orn</span>
                <span className="review-name">River Graves</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-quote-icon"><QuoteIcon /></div>
            <p className="review-text">
              I loved how transparent the pricing was. What I saw online is
              exactly what I paid at the rental desk.
            </p>
            <div className="review-footer">
              <img src="/customer4.png" alt="Ryder Malone" className="review-avatar" />
              <div className="review-info">
                <span className="review-company">Haag LLC</span>
                <span className="review-name">Ryder Malone</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-quote-icon"><QuoteIcon /></div>
            <p className="review-text">
              Great experience overall! Wide range of cars and super simple
              booking process. Highly recommended.
            </p>
            <div className="review-footer">
              <img src="/customer4.png" alt="Ryder Malone" className="review-avatar" />
              <div className="review-info">
                <span className="review-company">Haag LLC</span>
                <span className="review-name">Ryder Malone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-download">
        <div className="app-download-content">
          <div className="app-image">
            <img src="/iPhone 14 Pro - Silver - Portrait.png" alt="iPhone 14 Pro showing UGo Car Rentals app" />
          </div>
          <div className="app-text">
            <span className="app-label">DOWNLOAD OUR APP</span>
            <h2>Download our app</h2>
            <p>
              Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
              semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate.
              Nulla nam eget urna fusce vulputate at risus
            </p>
            <div className="store-buttons">
              <button className="app-store">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.71L13 21v-7h-2v-2h2v-1.5c0-1.93 1.57-3.5 3.5-3.5.81 0 1.6.27 2.26.78l-1.6 1.2c-.4-.3-.89-.48-1.46-.48-1.38 0-2.5 1.12-2.5 2.5v1.5h2.5v2h-2.5v7l5.71-1.29z"/></svg>
                Download on the App Store
              </button>
              <button className="google-play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.91V2.724c0-.415.221-.799.609-.91zm16.959 10.062L4.499 2.074c-.604-.332-1.331.082-1.331.788v18.276c0 .706.727 1.12 1.331.788l16.069-9.802c.604-.368.604-1.208 0-1.576z"/></svg>
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BenefitsPage;