import React from "react";
import "./Desktop3.css";

const cars = [
  {
    id: 1,
    category: "Luxury Sedan",
    image: "/images/cars/audi-a3.jpg",
    name: "Audi A3",
    seats: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    price: 180,
  },
  {
    id: 2,
     category: "Luxury Sedan",
    image: "./images/cars/audi-a3.jpg",
    name: "Audi A3",
    seats: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    price: 250,
  },
  {
    id: 3,
    category: "Luxury Sedan",
    image: "./images/cars/audi-a3.jpg",
    name: "Audi A3",
    seats: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    price: 180,
  },
];

export default function CarListingSection() {
  return (
    <section className="listing">
      {/* Section Header */}
      <p className="listing__label">PREMIUM CAR RENTAL</p>
      <h2 className="listing__title">
        Choose Your <span className="listing__title--blue">Perfect</span> Ride
      </h2>
      <p className="listing__subtitle">
        From executive sedans to thrilling sports cars, our diverse fleet caters
        to every taste and occasion.
      </p>

      {/* Cards Grid */}
      <div className="listing__grid">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            {/* Image area */}
            <div className="car-card__img-wrap">
              <span className="car-card__badge">{car.category}</span>
              <img
                className="car-card__img"
                src={car.image}
                alt={car.name}
              />
            </div>

            {/* Info area */}
            <div className="car-card__info">
              <h3 className="car-card__name">{car.name}</h3>
              <div className="car-card__specs">
                {/* Seats */}
                <span className="car-card__spec">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  {car.seats}
                </span>
                {/* Fuel */}
                <span className="car-card__spec">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 22V7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15"/>
                    <path d="M14 9h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L19 6"/>
                    <line x1="3" y1="22" x2="14" y2="22"/>
                  </svg>
                  {car.fuel}
                </span>
                {/* Transmission */}
                <span className="car-card__spec">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5" cy="6" r="2"/>
                    <circle cx="12" cy="6" r="2"/>
                    <circle cx="19" cy="6" r="2"/>
                    <circle cx="5" cy="18" r="2"/>
                    <circle cx="12" cy="18" r="2"/>
                    <line x1="5" y1="8" x2="5" y2="16"/>
                    <line x1="12" y1="8" x2="12" y2="16"/>
                    <line x1="19" y1="8" x2="19" y2="18"/>
                  </svg>
                  {car.transmission}
                </span>
              </div>

              <div className="car-card__footer">
                <span className="car-card__price">
                  <strong>${car.price}</strong>
                  <span className="car-card__per">/day</span>
                </span>
                <button className="car-card__btn">Rent Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}