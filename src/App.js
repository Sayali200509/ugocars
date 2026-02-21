import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home";
import CarsPage from "./components/Carspage";
import BenefitsPage from "./components/BenefitsPage";
import ContactUs from "./components/Contact us";
import Locations from "./components/Locations";
import HowItWorksPage from "./components/HowItWorksPage";
import Footer from "./components/Footer";
import "./App.css";

// ── FIXED: PageWrapper no longer wraps children in extra elements ──
function PageWrapper({ children, defaultSection }) {
  const [activeSection, setActiveSection] = useState(defaultSection);
  const location = useLocation();

  useEffect(() => {
    const pathToSection = {
      "/": "Home",
      "/cars": "Cars",
      "/benefits": "Benefits",
      "/contact": "Contact",
      "/locations": "Locations",
      "/how-it-works": "How it works?"
    };
    const currentSection = pathToSection[location.pathname] || defaultSection;
    setActiveSection(currentSection);
  }, [location.pathname, defaultSection]);

  // Pass activeSection/setActiveSection via context instead of cloneElement
  // This avoids wrapping children in extra divs that break full-width layout
  return (
    <>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { activeSection, setActiveSection })
          : child
      )}
    </>
  );
}

/* ── Home Page ── */
function HomePage() {
  return (
    <PageWrapper defaultSection="Home">
      <Navbar />
      <HeroSection />
    </PageWrapper>
  );
}

/* ── Benefits Page ── */
function BenefitsPageLayout() {
  return (
    <PageWrapper defaultSection="Benefits">
      <Navbar />
      <BenefitsPage />
      <Footer />
    </PageWrapper>
  );
}

/* ── Contact Page ── */
function ContactPageLayout() {
  return (
    <PageWrapper defaultSection="Contact">
      <Navbar />
      <ContactUs />
      <Footer />
    </PageWrapper>
  );
}

/* ── Locations Page ── */
function LocationsPageLayout() {
  return (
    <PageWrapper defaultSection="Locations">
      <Navbar />
      <Locations />
      <Footer />
    </PageWrapper>
  );
}

/* ── How It Works Page ── */
function HowItWorksPageLayout() {
  return (
    <PageWrapper defaultSection="How it works?">
      <Navbar />
      <HowItWorksPage />
      <Footer />
    </PageWrapper>
  );
}

/* ── Cars Page ── */
function CarsPageLayout() {
  return (
    <PageWrapper defaultSection="Cars">
      <Navbar />
      <CarsPage />
      <Footer />
    </PageWrapper>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPageLayout />} />
          <Route path="/benefits" element={<BenefitsPageLayout />} />
          <Route path="/contact" element={<ContactPageLayout />} />
          <Route path="/locations" element={<LocationsPageLayout />} />
          <Route path="/how-it-works" element={<HowItWorksPageLayout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}