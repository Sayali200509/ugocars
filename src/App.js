import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Desktop1 from "./components/Desktop1";
import Desktop2 from "./components/Desktop2";
import BenefitsPage from "./components/BenefitsPage";
import ContactUs from "./components/Contact us";
import "./App.css";

/* ── Home Page Component ── */
function HomePage() {
  return (
    <>
      <Home />      {/* hero section with car image */}
      <Navbar />    {/* navbar below hero */}
      <Desktop1 />  {/* "Your Journey, Your Freedom" section */}
      <Navbar />    {/* navbar at bottom */}
      <Desktop2 />  {/* "Renting is Super Easy" section */}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}