import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaUser, FaGlobe } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
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
        <div className="logo">
          <div className="logo-circle">✱</div>
          Milla
        </div>

        <ul className="nav-links">
          <li>Destinations</li>
          <li>Tour Packages</li>
          <li>Experiences</li>
        </ul>

        <div className="nav-actions">
          <button className="lang-btn">English</button>
          <button className="plan-btn">Plan My Trip</button>
        </div>
      </div>
    </nav>
  );
}
