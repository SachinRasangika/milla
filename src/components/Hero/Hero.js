import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { FaGlobe, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();

  const handleSeeOurSolutions = () => {
    navigate('/plan-trip');
  };

  return (
    <section className="hero">
      <Navbar />

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
          <button
            className="btn btn-primary"
            onClick={handleSeeOurSolutions}
          >
            <FaGlobe /> See our solutions
          </button>
          <Button
            text={
              <>
                <FaEnvelope /> Get in touch
              </>
            }
            variant="secondary"
          />
        </div>
      </div>

      <div className="scroll-info">
        <span>↓ Scroll to Explore</span>
      </div>
    </section>
  );
}
