import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Carspage.css';

const CarsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="cars-page">
      {/* Top Bar */}
      <div className="cars-topbar">
        <div className="cars-topbar__left">
          <button 
            className="cars-topbar__hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link to="/" className="cars-topbar__logo-wrap">
            <img src="/images/logo.png" alt="Logo" className="cars-topbar__logo" />
          </Link>
        </div>

        <div className="cars-topbar__center">
          <span className="cars-topbar__loc-pin">📍</span>
          <span className="cars-topbar__loc-text">New York, NY</span>
          <div className="cars-topbar__dates">
            <div className="cars-topbar__date-block">
              <div className="cars-topbar__date-d">15</div>
              <div className="cars-topbar__date-t">Dec</div>
            </div>
            <div className="cars-topbar__date-line"></div>
            <div className="cars-topbar__date-block">
              <div className="cars-topbar__date-d">20</div>
              <div className="cars-topbar__date-t">Dec</div>
            </div>
          </div>
        </div>

        <div className="cars-topbar__right">
          <div className="cars-topbar__avatar">
            <img src="/avatar-placeholder.png" alt="User" />
          </div>
          <button className="cars-topbar__become">Become a Host</button>
          <button className="cars-topbar__login">Log in</button>
        </div>
      </div>

      {/* Layout: Sidebar + Main */}
      <div className="cars-layout">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="cars-sidebar">
            <h3 className="cars-sidebar__title">Filters</h3>
            
            {/* Price Range */}
            <div className="fsec">
              <button className="fsec__hdr">
                <span className="fsec__title">Price Range</span>
                <span className="fsec__arrow">▼</span>
              </button>
              <div className="fsec__body">
                <div className="dual-range-outer">
                  <div className="price-bubbles-row">
                    <span className="price-bubble">$50</span>
                    <span className="price-bubble">$500</span>
                  </div>
                  <div className="dual-range-track">
                    <input type="range" className="crange crange--ol" min="50" max="500" defaultValue="50" />
                    <input type="range" className="crange crange--ol" min="50" max="500" defaultValue="500" />
                  </div>
                  <div className="range-lbls">
                    <span>Min</span>
                    <span>Max</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Car Type */}
            <div className="fsec">
              <button className="fsec__hdr">
                <span className="fsec__title">Car Type</span>
                <span className="fsec__arrow">▼</span>
              </button>
              <div className="fsec__body">
                <label className="fchk">
                  <input type="checkbox" />
                  <span>Sedan</span>
                </label>
                <label className="fchk">
                  <input type="checkbox" />
                  <span>SUV</span>
                </label>
                <label className="fchk">
                  <input type="checkbox" />
                  <span>Sports Car</span>
                </label>
                <label className="fchk">
                  <input type="checkbox" />
                  <span>Luxury</span>
                </label>
              </div>
            </div>

            {/* Transmission */}
            <div className="fsec">
              <button className="fsec__hdr">
                <span className="fsec__title">Transmission</span>
                <span className="fsec__arrow">▼</span>
              </button>
              <div className="fsec__body">
                <label className="fradio">
                  <input type="radio" name="transmission" />
                  <span>Automatic</span>
                </label>
                <label className="fradio">
                  <input type="radio" name="transmission" />
                  <span>Manual</span>
                </label>
              </div>
            </div>

            {/* Seats */}
            <div className="fsec">
              <button className="fsec__hdr">
                <span className="fsec__title">Seats</span>
                <span className="fsec__arrow">▼</span>
              </button>
              <div className="fsec__body">
                <label className="fchk">
                  <input type="checkbox" />
                  <span>2 Seats</span>
                </label>
                <label className="fchk">
                  <input type="checkbox" />
                  <span>4 Seats</span>
                </label>
                <label className="fchk">
                  <input type="checkbox" />
                  <span>5 Seats</span>
                </label>
                <label className="fchk">
                  <input type="checkbox" />
                  <span>7+ Seats</span>
                </label>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="cars-main">
          {/* Search and Sort */}
          <div className="cars-search-row">
            <div className="cars-search-box">
              <input 
                type="text" 
                className="cars-search-input" 
                placeholder="Search cars..." 
              />
              <span className="cars-search-ico">🔍</span>
            </div>
            <div className="cars-sort-box">
              <select className="cars-sort-sel">
                <option>Sort by: Price</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Newest</option>
              </select>
              <span className="cars-sort-arrow">▼</span>
            </div>
          </div>

          {/* Quick Filter Chips */}
          <div className="cars-chips">
            <button className="cars-chip cars-chip--on">
              <span className="cars-chip-icon">⚡</span>
              <span>All</span>
            </button>
            <button className="cars-chip">
              <span>Economy</span>
            </button>
            <button className="cars-chip">
              <span>Luxury</span>
            </button>
            <button className="cars-chip">
              <span>SUV</span>
            </button>
            <button className="cars-chip">
              <span>Sports</span>
            </button>
          </div>

          <div className="cars-count">Showing 24 cars available</div>

          {/* Car Grid */}
          <div className="cars-grid">
            {/* Sample Car Cards */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((car) => (
              <div key={car} className="ccard">
                <div className="ccard__img-area">
                  <img 
                    src={`/car-${car}.jpg`} 
                    alt={`Car ${car}`} 
                    className="ccard__img"
                    onError={(e) => {
                      e.target.src = '/hero-car.png';
                    }}
                  />
                  <button className="ccard__heart">♡</button>
                  <div className="ccard__pro-tag">
                    <span>⭐</span>
                    <span>Professional Host</span>
                  </div>
                  <div className="ccard__dots">
                    <span className="ccard__dot ccard__dot--active"></span>
                    <span className="ccard__dot"></span>
                    <span className="ccard__dot"></span>
                  </div>
                  <div className="ccard__overlay">
                    <div className="ccard__overlay-left">
                      <div className="ccard__car-name">Mercedes-Benz S-Class</div>
                      <div className="ccard__car-specs">5 Seats • Automatic • Hybrid</div>
                    </div>
                    <div className="ccard__overlay-right">
                      <div className="ccard__price">$250<span className="ccard__price-unit">/day</span></div>
                    </div>
                  </div>
                </div>
                <div className="ccard__info">
                  <div className="ccard__rating">
                    <span>⭐ 4.8</span>
                    <span className="ccard__reviews">(120 reviews)</span>
                  </div>
                  <div className="ccard__location">📍 New York, NY</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CarsPage;
