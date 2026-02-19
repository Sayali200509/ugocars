import React, { useState } from "react";
import "./Contact us.css";

/* ── SVG Icons for contact info row ── */
const PinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 2C9.58 2 6 5.58 6 10c0 6.75 8 16 8 16s8-9.25 8-16c0-4.42-3.58-8-8-8z" stroke="#fff" strokeWidth="1.8" fill="none"/>
    <circle cx="14" cy="10" r="2.8" stroke="#fff" strokeWidth="1.8"/>
  </svg>
);
const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="7" width="22" height="14" rx="2" stroke="#fff" strokeWidth="1.8"/>
    <path d="M3 9l11 8 11-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M6 4h5l2 5-2.5 1.5c1 2 3 4 5 5L17 13l5 2v5c0 1.1-.9 2-2 2C8.9 22 4 11.1 4 6c0-1.1.9-2 2-2z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke="#fff" strokeWidth="1.8"/>
    <path d="M14 8v6l4 2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── FAQ data ── */
const faqs = [
  {
    q: "How does it works?",
    a: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla.",
  },
  { q: "Can I rent a car without a credit card?", a: "" },
  { q: "What are the requirements for renting a car?", a: "" },
  { q: "Does Car Rental offer coverage products for purchase with my rental?", a: "" },
];

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 1 — CONTACT FORM + CARS IMAGE
          Background: Rectangle 20 → #6799FE @ 44%
          Full width, height ~700px
      ══════════════════════════════════════════════ */}
      <section className="cu-hero">

        {/* White form card
            Background frame: W 914px H 458px, Top 122px, Left 109px, Radius 24px, fill #FFFFFF
            Form inner: W 890px H 313.78px, Top 120px, Left 12px */}
        <div className="cu-form-card">

          {/* "Contact Us" heading
              Poppins SemiBold 600, 27px, lh 100%, #000000, center */}
          <h2 className="cu-form-title">Contact Us</h2>

          {/* Subtitle text
              Poppins Medium 500, 15px, lh 19px, #2C295F, center
              W 635px, Top 72px, Left 137px */}
          <p className="cu-form-subtitle">
            Have questions about your car rental booking or need help finding the best deal?<br/>
            Get in touch with us anytime — we're happy to assist you!
          </p>

          {/* Form fields */}
          <div className="cu-form-grid">
            <div className="cu-field-group">
              <label className="cu-label">First Name*</label>
              <input className="cu-input" type="text" placeholder="First Name"/>
            </div>
            <div className="cu-field-group">
              <label className="cu-label">Last Name*</label>
              <input className="cu-input" type="text" placeholder="Last Name"/>
            </div>
            <div className="cu-field-group">
              <label className="cu-label">Email id*</label>
              <input className="cu-input" type="email" placeholder="Email"/>
            </div>
            <div className="cu-field-group cu-phone-group">
              <label className="cu-label">Phone Number*</label>
              <div className="cu-phone-wrap">
                <span className="cu-phone-code">+ &nbsp;+91</span>
                <input className="cu-input cu-phone-input" type="tel" placeholder=""/>
              </div>
            </div>
          </div>

          {/* Message textarea
              Border: W 867px, H 43px, Radius 50px, border 1px #D3D3D3 */}
          <div className="cu-field-group cu-full">
            <label className="cu-label">Message*</label>
            <div className="cu-message-wrap">
              {/* placeholder text: Roboto Bold 700, 12px, #2C295F, letter-spacing 0.12px */}
              <textarea className="cu-textarea" placeholder="Type your response here" rows={2}/>
            </div>
          </div>

          {/* Submit button
              Poppins Regular 400, 16px, lh 20px, #FFFFFF, center */}
          <button className="cu-submit-btn">Submit</button>
        </div>

        {/* Car images on the right — Group 43
            W 868px, H 492px, Top 115px, Left 1038px */}
        <div className="cu-cars-img">
          {/* Two overlapping car PNGs */}
          <img
            className="cu-car cu-car-back"
            src="/images/contact us car1.png"
            alt="Car 1"
            onError={e => { e.target.style.display='none'; }}
          />
          <img
            className="cu-car cu-car-front"
            src="/images/contact us car2.png"
            alt="Car 2"
            onError={e => { e.target.style.display='none'; }}
          />
        </div>

      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — FAQ "How can we help you today?"
          "How can we help you today?"
          SansSerif Bold 700, 46.3px, lh 48px, #282C34, center
          W 741px, Top 758px, Left 609px
      ══════════════════════════════════════════════ */}
      <section className="cu-faq-section">
        <h2 className="cu-faq-heading">How can we help you today?</h2>

        <div className="cu-faq-list">
          {faqs.map((faq, i) => (
            <div
              className={`cu-faq-item ${openFaq === i ? "cu-faq-open" : ""}`}
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            >
              <div className="cu-faq-row">
                <span className="cu-faq-q">{faq.q}</span>
                <span className="cu-faq-chevron">{openFaq === i ? "^" : "^"}</span>
              </div>
              {openFaq === i && faq.a && (
                <p className="cu-faq-answer">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — CONTACT INFO ROW
          4 circles with icons: Address, Email, Phone, Opening hours
          Circles: ~90px, fill #6799FE (periwinkle blue)
      ══════════════════════════════════════════════ */}
      <section className="cu-info-row">
        <div className="cu-info-item">
          <div className="cu-info-circle"><PinIcon /></div>
          <div className="cu-info-text">
            <span className="cu-info-label">Address</span>
            <span className="cu-info-val">FC Road, Pune-411004</span>
          </div>
        </div>
        <div className="cu-info-item">
          <div className="cu-info-circle"><MailIcon /></div>
          <div className="cu-info-text">
            <span className="cu-info-label">Email</span>
            <span className="cu-info-val">ugocars@gmail.com</span>
          </div>
        </div>
        <div className="cu-info-item">
          <div className="cu-info-circle"><PhoneIcon /></div>
          <div className="cu-info-text">
            <span className="cu-info-label">Phone</span>
            <span className="cu-info-val">+91 8795879505</span>
          </div>
        </div>
        <div className="cu-info-item">
          <div className="cu-info-circle"><ClockIcon /></div>
          <div className="cu-info-text">
            <span className="cu-info-label">Opening hours</span>
            <span className="cu-info-val">Sun-Mon: 10am – 10pm</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — EMAIL SUBSCRIBE BANNER
          Background: light periwinkle blue, rounded card
          Left: illustration | Right: text + email input
      ══════════════════════════════════════════════ */}
      <section className="cu-subscribe-section">
        <div className="cu-subscribe-card">
          {/* Left illustration with animated elements */}
          <div className="cu-subscribe-illustration">
            <div className="cu-subscribe-animation-container">
              {/* Floating Email Icons */}
              <svg className="cu-float-icon cu-email-1" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5 10h30v20H5z" stroke="#8E7FD6" strokeWidth="2" fill="none" rx="2"/>
                <path d="M5 10l15 12 15-12" stroke="#8E7FD6" strokeWidth="2" fill="none"/>
              </svg>
              <svg className="cu-float-icon cu-email-2" width="32" height="32" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#5B5BD6" strokeWidth="2" fill="none"/>
                <path d="M20 12v16M26 20H14" stroke="#5B5BD6" strokeWidth="2"/>
              </svg>
              <svg className="cu-float-icon cu-email-3" width="35" height="35" viewBox="0 0 40 40" fill="none">
                <rect x="6" y="8" width="28" height="24" rx="2" stroke="#9B94E8" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="2" fill="#9B94E8"/>
                <circle cx="22" cy="12" r="2" fill="#9B94E8"/>
              </svg>
              <svg className="cu-float-icon cu-email-4" width="38" height="38" viewBox="0 0 40 40" fill="none">
                <path d="M8 20C8 13.37 13.37 8 20 8s12 5.37 12 12" stroke="#7B75D6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M20 14v10l7 0" stroke="#7B75D6" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <img src="/images/email-illustration.png" alt="Subscribe illustration"
              onError={e => { e.target.style.display='none'; }}/>
          </div>
          {/* Right content */}
          <div className="cu-subscribe-content">
            <p className="cu-subscribe-label">Would you like to receive</p>
            <h3 className="cu-subscribe-heading">special offers by your email?</h3>
            <div className="cu-subscribe-input-wrap">
              <span className="cu-subscribe-mail-icon">✉</span>
              <input className="cu-subscribe-input" type="email" placeholder="Enter your mail"/>
              <button className="cu-subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}