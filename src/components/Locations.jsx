import React from 'react';
import './Locations.css';


const LocationPage = () => {
  const locations = [
    { name: "Kothrud", desc: "Near Kothrud Depot" },
    { name: "Swargate", desc: "Swargate Bus Stand Area" },
    { name: "Shivajinagar", desc: "Shivajinagar Station Road" },
    { name: "All Over Pune", desc: "Home Delivery Available" }
  ];


  return (
    <div className="location-page">
      <header className="location-header">
        <h1 className="header-title">Our Pickup <span className="blue-text">Locations</span></h1>
        <p className="header-subtitle">
          Pick up your car from any of our convenient locations across Pune, or we <br />
          can deliver to your location
        </p>
      </header>


      <div className="main-content-grid">
        <div className="location-list">
          {locations.map((loc, index) => (
            <div key={index} className="location-item-card">
              <h3>{loc.name}</h3>
              <p>{loc.desc}</p>
            </div>
          ))}
        </div>


        <div className="map-container">
          <iframe
            title="Pune Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04712330887!2d73.78044704381534!3d18.5248701977112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43105d951336!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0, borderRadius: '24px' }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </div>


      <section className="cta-section">
        <div className="cta-blue-box">
          <h2 className="cta-title">Don't see your location?</h2>
          <p className="cta-subtitle">
            We offer home delivery across Pune. Call us or visit any of our main locations for <br />
            more information.
          </p>
          <button className="cta-call-btn">Call Us Today</button>
        </div>
      </section>
    </div>
  );
};


export default LocationPage;

