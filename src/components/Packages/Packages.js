import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TourPlans/TourPlans.css';
import './Packages.css';
import { FaMapMarkerAlt, FaClock, FaDollarSign } from 'react-icons/fa';
import { CATEGORIES, scenicFallback } from '../../data/packages';

export default function Packages() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const activeCategory = useMemo(
    () => CATEGORIES.find(c => c.id === active) || CATEGORIES[0],
    [active]
  );
  const navigate = useNavigate();

  return (
    <section className="packages-section">
      <div className="packages-container">
        <header className="packages-header">
          <h2 className="packages-title">Browse Tour Packages</h2>
          <p className="packages-subtext">
            Pick a category, compare packages, and view full details before booking.
          </p>
        </header>

        {/* Category Tabs */}
        <nav className="packages-tabs" aria-label="Tour categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`packages-tab ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
              aria-pressed={active === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Horizontal Scroll Section */}
        <div className="packages-grid packages-grid--slider">
          {activeCategory.packages.map((pkg) => (
            <article key={pkg.id} className="package-card">
              <div
                className="package-image-wrap"
                onClick={() => navigate(`/packages/${pkg.id}`)}
              >
                <img
                  className="package-image"
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = scenicFallback; }}
                />
              </div>

              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>

                <div className="package-meta">
                  <span className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" /> {pkg.destinations}
                  </span>
                  <span className="meta-item">
                    <FaClock className="meta-icon" /> {(pkg.details && pkg.details.duration) || 'Flexible'}
                  </span>
                  <span className="meta-item">
                    <FaDollarSign className="meta-icon" /> {pkg.price.replace('Starting ', '')}
                  </span>
                </div>

                <ul className="package-highlights">
                  {pkg.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="package-footer">
                  <span className="package-price">{pkg.price}</span>
                  <button
                    className="package-cta"
                    onClick={() => navigate(`/packages/${pkg.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
