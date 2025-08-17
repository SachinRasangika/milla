import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-grid">
          {/* Column 1 - About */}
          <div className="footer-column">
            <h3 className="footer-heading">Wanderlust Adventures</h3>
            <p className="footer-about">
              Crafting unforgettable travel experiences since 2010. We specialize in personalized journeys that connect you with the world's most breathtaking destinations.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-column">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Special Offers</a></li>
              <li><a href="#">Tour Packages</a></li>
              <li><a href="#">Custom Trips</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="footer-column">
            <h4 className="footer-subheading">Contact Us</h4>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt"></i> 123 Travel St, Adventure City</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> hello@wanderlust.com</li>
              <li><i className="fas fa-clock"></i> Mon-Fri: 9AM - 6PM</li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="footer-column">
            <h4 className="footer-subheading">Newsletter</h4>
            <p className="footer-newsletter-text">
              Subscribe for travel inspiration and exclusive deals
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Wanderlust Adventures. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;