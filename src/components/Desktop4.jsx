import React from 'react';
import './Desktop4.css';

const cars = [
  { id: 1, name: 'Audi A3', category: 'Luxury Sedan', seats: 5, fuel: 'Hybrid', transmission: 'Automatic', price: 180 },
  { id: 2, name: 'Audi A3', category: 'Luxury Sedan', seats: 5, fuel: 'Hybrid', transmission: 'Automatic', price: 250 },
  { id: 3, name: 'Audi A3', category: 'Luxury Sedan', seats: 5, fuel: 'Hybrid', transmission: 'Automatic', price: 180 },
];

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="9" cy="7" r="4" stroke="#6B7280" strokeWidth="2"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FuelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M3 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M3 11h12" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
    <rect x="15" y="6" width="6" height="5" rx="1" stroke="#6B7280" strokeWidth="2"/>
  </svg>
);

const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="#6B7280" strokeWidth="2"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CarCard = ({ car }) => (
  <div className="car-card">
    <div className="car-image-wrapper">
      <span className="car-badge">{car.category}</span>
      <img
        src="https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800&q=80"
        alt={car.name}
        className="car-image"
      />
    </div>
    <div className="car-info">
      <h3 className="car-name">{car.name}</h3>
      <div className="car-specs">
        <span className="spec-item"><UsersIcon /> {car.seats}</span>
        <span className="spec-item"><FuelIcon /> {car.fuel}</span>
        <span className="spec-item"><GearIcon /> {car.transmission}</span>
      </div>
      <div className="car-footer">
        <div className="car-price">
          <span className="price-amount">${car.price}</span>
          <span className="price-unit">/day</span>
        </div>
        <button className="rent-btn">Rent Now</button>
      </div>
    </div>
  </div>
);

const Desktop4 = () => {
  return (
    <div className="desktop4-wrapper">
      {/* Ellipse 5: top -14px, left -10px */}
      <div className="bg-ellipse bg-ellipse--tl" />
      {/* Ellipse 7: top -9px, left 1315px */}
      <div className="bg-ellipse bg-ellipse--tr" />

      <section className="fleet-section">
        <div className="fleet-container">

          <div className="fleet-header">
            <p className="fleet-label">PREMIUM CAR RENTAL</p>
            <h1 className="fleet-title">
              Choose Your <span className="title-highlight">Perfect</span> Ride
            </h1>
            <p className="fleet-subtitle">
              From executive sedans to thrilling sports cars, our diverse fleet caters to every taste and occasion.
            </p>
          </div>

          <div className="cars-grid">
            {cars.map(car => <CarCard key={car.id} car={car} />)}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Desktop4;