import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
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
    </nav>
  );
}
