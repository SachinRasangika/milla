import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaUser, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePlanTripClick = () => {
    navigate('/plan-trip');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Top bar */}
      <div className="top-bar">
        {/* Social icons */}
        <div className="top-left">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>

        {/* Buttons */}
        <div className="top-right">
          <button><FaUser /> Login</button>
          <button><FaGlobe /> EN ▼</button>
          <button>$ USD ▼</button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="main-nav">
        <Link to="/" className="logo">
          <div className="logo-circle">✱</div>
          Milla
        </Link>

        <ul className="nav-links">
          <li>Destinations</li>
          <li>Tour Packages</li>
          <li>Experiences</li>
        </ul>

        <div className="nav-actions">
          <button className="lang-btn hidden-mobile">English</button>
          <button className="plan-btn hidden-mobile" onClick={handlePlanTripClick}>Plan My Trip</button>
          <button className="mobile-menu-toggle hidden-desktop" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li onClick={toggleMobileMenu}>Destinations</li>
            <li onClick={toggleMobileMenu}>Tour Packages</li>
            <li onClick={toggleMobileMenu}>Experiences</li>
          </ul>
          <div className="mobile-nav-actions">
            <button className="mobile-lang-btn" onClick={toggleMobileMenu}>English</button>
            <button className="mobile-plan-btn" onClick={handlePlanTripClick}>Plan My Trip</button>
          </div>
          <div className="mobile-social-links">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </nav>
  );
}
