import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaUser, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePlanTripClick = () => {
    navigate('/plan-trip');
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const hasHero = !!document.querySelector('.hero');

    const onScroll = () => {
      if (!hasHero) {
        setSolid(true);
      } else {
        setSolid(window.scrollY > 10);
      }
    };

    const updateBodyPadding = () => {
      if (!navRef.current) return;
      if (!hasHero) {
        document.body.style.paddingTop = `${navRef.current.offsetHeight}px`;
      } else {
        document.body.style.paddingTop = '';
      }
    };

    onScroll();
    updateBodyPadding();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateBodyPadding);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateBodyPadding);
    };
  }, [location.pathname]);

  return (
    <nav ref={navRef} className={`navbar ${solid ? 'navbar--solid' : 'navbar--transparent'}`}>
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
          <li><Link to="/#destinations" className="nav-link">Destinations</Link></li>
          <li><Link to="/#tour-packages" className="nav-link">Tour Packages</Link></li>
          <li><Link to="/#experiences" className="nav-link">Experiences</Link></li>
          <li><Link to="/help-hub" className="nav-link">Travel Help Hub</Link></li>
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
            <li><Link to="/#destinations" onClick={toggleMobileMenu}>Destinations</Link></li>
            <li><Link to="/#tour-packages" onClick={toggleMobileMenu}>Tour Packages</Link></li>
            <li><Link to="/#experiences" onClick={toggleMobileMenu}>Experiences</Link></li>
            <li onClick={() => { toggleMobileMenu(); navigate('/help-hub'); }}>Travel Help Hub</li>
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
