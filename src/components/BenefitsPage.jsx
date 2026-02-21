import React from "react";
import "./BenefitsPage.css";

const testimonials = [
  {
    quote:
      "Booking a rental car has never been this easy. I found the best price within minutes and had zero hidden charges at checkout.",
    name: "Amit Sharma",
    role: "Product Lead, LLC",
    avatar: "/images/customer1.png",
  },
  {
    quote:
      "The comparison feature saved me a lot of money. Customer support was very helpful when I needed to change my booking.",
    name: "River Graves",
    role: "Growth Lead, Corp",
    avatar: "/images/customer2.png",
  },
  {
    quote:
      "I loved how transparent the pricing was. What I saw online is exactly what I paid at the rental desk.",
    name: "Ryder Malone",
    role: "Travel Manager, Inc.",
    avatar: "/images/customer4.png",
  },
  {
    quote:
      "Great experience overall. Wide range of cars and super simple booking process. Highly recommended.",
    name: "Jordan Lee",
    role: "Fleet Lead, LLC",
    avatar: "/images/customer2.png",
  },
];


const BenefitsPage = () => {
  return (
    <div className="benefits-page">
      <section className="benefits">
      <div className="benefits__container">
        {/* Top: Why Choose Us */}
        <header className="benefits__header">
          <h2 className="benefits__title">
            Why Choose <span>Us?</span>
          </h2>
          <p className="benefits__subtitle">
            We compare car rental prices, you save!
          </p>
        </header>


        {/* Four benefit cards */}
        <div className="benefits__grid">
          <article className="benefits-card benefit-card-1">
            <h3 className="benefits-card__title">
              Find the perfect rental car for your trip
            </h3>
            <p className="benefits-card__text">
              Browse dozens of cars in leading national and local locations.
              Compare real-time prices, car features and availability so you can
              choose what fits best for your trip.
            </p>
            <p className="benefits-card__text">
              Many other websites hide extra costs until the final step. We
              show you the full price upfront, including all mandatory fees, so
              you can book with confidence.
            </p>
          </article>


          <article className="benefits-card benefit-card-2">
            <h3 className="benefits-card__label">Why should you book with us?</h3>
            <ul className="benefits-list">
              <li>
                <img
                  src="/images/no-hidden-fees.png"
                  alt="No hidden fees icon"
                  className="benefits-list__icon"
                />
                <span>No Hidden Fees</span>
              </li>
              <li>
                <img
                  src="/images/customer-support.png"
                  alt="Customer support icon"
                  className="benefits-list__icon"
                />
                <span>24/7 Multilingual Customer Service</span>
              </li>
              <li>
                <img
                  src="/images/Free%20cancellation.png"
                  alt="Free cancellation icon"
                  className="benefits-list__icon"
                />
                <span>Free Cancellation</span>
              </li>
              <li>
                <img
                  src="/images/Trusted%20service.png"
                  alt="Trusted information icon"
                  className="benefits-list__icon"
                />
                <span>Information You Can Trust</span>
              </li>
            </ul>
          </article>


          <article className="benefits-card benefits-card--highlight benefit-card-3">
            <h3 className="benefits-card__label">Why are our prices lower?</h3>
            <p className="benefits-card__text">
              Since we negotiate rates directly with partners, we can offer
              prices that are often significantly lower than booking at the
              counter.
            </p>
            <p className="benefits-card__text">
              Our smart engine continuously scans and compares prices from
              trusted suppliers to secure the best offers for our customers.
            </p>
            <div className="benefits-card__icon-circle">
              <img src="/images/best-price.png" alt="Best price badge" />
            </div>
          </article>


          <article className="benefits-card benefit-card-4">
            <h3 className="benefits-card__label">Flexible Booking Options</h3>
            <ul className="benefits-list">
              <li>
                <img
                  src="/images/wide-network.png"
                  alt="Wide rental network icon"
                  className="benefits-list__icon"
                />
                <span>Book now, pay later with select partners</span>
              </li>
              <li>
                <img
                  src="/images/wide-network.png"
                  alt="Flexible booking icon"
                  className="benefits-list__icon"
                />
                <span>Modify or cancel with simple steps</span>
              </li>
              <li>
                <img
                  src="/images/wide-network.png"
                  alt="Short and long term rentals icon"
                  className="benefits-list__icon"
                />
                <span>Short-term and monthly rentals available</span>
              </li>
              <li>
                <img
                  src="/images/wide-network.png"
                  alt="Payment options icon"
                  className="benefits-list__icon"
                />
                <span>Prepaid and on-location payment options</span>
              </li>
            </ul>
          </article>
        </div>


        {/* Reviews section */}
        <section className="reviews">
          <h3 className="reviews__title">Reviews from our customers</h3>
          <div className="reviews__grid">
            {testimonials.map((item) => (
              <article className="review-card" key={item.name}>
                <img
                  src="/images/quoted.png"
                  alt="Quote mark"
                  className="review-card__quote"
                />
                <p className="review-card__text">{item.quote}</p>
                <div className="review-card__footer">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="review-card__avatar"
                  />
                  <div>
                    <div className="review-card__name">{item.name}</div>
                    <div className="review-card__role">{item.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* App download CTA */}
        <section className="app-cta">
          <div
            className="app-cta__inner"
            style={{
              backgroundImage: 'url("/images/wide-network.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              backgroundSize: "60%",
            }}
          >
            <div className="app-cta__phone">
              <div className="app-cta__phone-frame">
                <img
                  src="/images/iphone-mockup.png"
                  alt="UGO car rentals app"
                  className="app-cta__phone-img"
                />
                <div className="app-cta__phone-logo">
                  <img src="/images/logo.png" alt="UGO car rentals logo" />
                </div>
              </div>
            </div>
            <div className="app-cta__content">
              <p className="app-cta__eyebrow">Download our app</p>
              <h3 className="app-cta__title">Download our app</h3>
              <p className="app-cta__text">
                Track your bookings, unlock special app-only deals, and manage
                your rentals on the go. Stay updated with live notifications and
                seamless support wherever you are.
              </p>
              <div className="app-cta__stores">
                <button className="store-btn">
                  <img
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                  />
                </button>
                <button className="store-btn">
                  <img src="/images/playstore.png" alt="Get it on Google Play" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    </div>
  );
};


export default BenefitsPage;