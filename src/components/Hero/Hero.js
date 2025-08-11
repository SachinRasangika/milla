import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar"; // Adjust the import path as needed

export default function Hero() {
  return (
    <section className="hero">
      <Navbar /> {/* Add the Navbar here */}
      <div className="hero-content">
        <p className="sub-text">DISCOVER THE PEARL OF INDIAN OCEAN</p>
        <h1 className="hero-title">
          Explore Sri Lanka,
          <br />
          Your Way
        </h1>
        <p className="description">
          Private, luxury tours crafted for unforgettable journeys
        </p>
        <div className="btn-group">
          <Button text="See our solutions" variant="primary" />
          <Button text="Get in touch" variant="secondary" />
        </div>
      </div>
      <div className="scroll-info">
        <span>↓ Scroll to Explore</span>
      </div>
    </section>
  );
}