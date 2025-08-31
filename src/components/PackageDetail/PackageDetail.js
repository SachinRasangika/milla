import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaUsers, FaHotel, FaStar, FaWhatsapp, FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import './PackageDetail.css';
import { CATEGORIES, scenicFallback } from '../../data/packages';

export default function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pkg = useMemo(() => {
    for (const cat of CATEGORIES) {
      const match = cat.packages.find(p => p.id === id);
      if (match) return match;
    }
    return null;
  }, [id]);

  if (!pkg) {
    return (
      <section className="package-detail">
        <div className="container">
          <p className="not-found">Package not found.</p>
          <button className="back-btn" onClick={() => navigate('/packages')}>Back to Packages</button>
        </div>
      </section>
    );
  }

  const details = pkg.details || {};
  const pricingOptions = details.pricingOptions || [
    { name: 'Standard Package', price: pkg.price?.replace('Starting ', '') || 'TBD', note: '' }
  ];
  const tagline = details.tagline || (pkg.highlights?.length ? pkg.highlights.slice(0, 3).join(' • ') : 'Tailored Sri Lanka experience');

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Hi! I want help with: ' + pkg.title)}`;

  return (
    <section className="package-detail">
      <div className="container">
        <button className="back-link" onClick={() => navigate(-1)}>← Back</button>

        {/* Hero */}
        <header className="detail-hero-block">
          <div className="detail-hero-media">
            <img src={pkg.image} alt={pkg.title} onError={(e) => { e.currentTarget.src = scenicFallback; }} />
          </div>
          <div className="detail-hero-text">
            <h1 className="detail-title">{pkg.title}</h1>
            <p className="detail-tagline">{tagline}</p>
          </div>
        </header>

        {/* Quick Info Cards */}
        <section className="quick-info">
          <div className="info-card"><FaMapMarkerAlt className="icon" /> <div><span className="label">Destinations Covered</span><span className="value">{pkg.destinations}</span></div></div>
          <div className="info-card"><FaClock className="icon" /> <div><span className="label">Duration</span><span className="value">{details.duration || 'Flexible'}</span></div></div>
          <div className="info-card"><FaDollarSign className="icon" /> <div><span className="label">Price</span><span className="value">{pricingOptions[0]?.price || pkg.price}</span></div></div>
          <div className="info-card"><FaUsers className="icon" /> <div><span className="label">Best For</span><span className="value">{details.bestFor || 'All travelers'}</span></div></div>
          <div className="info-card"><FaHotel className="icon" /> <div><span className="label">Accommodation</span><span className="value">{details.accommodation || '3★ / 4★'}</span></div></div>
        </section>

        {/* Overview */}
        <section className="detail-section">
          <h2>Package Overview</h2>
          <p className="overview-text">{details.overview || 'Enjoy a curated journey through Sri Lanka with culture, nature, and coastline blended into one itinerary.'}</p>
        </section>

        {/* Itinerary */}
        {Array.isArray(details.itinerary) && details.itinerary.length > 0 && (
          <section className="detail-section">
            <h2>Day-by-Day Itinerary</h2>
            <ol className="itinerary">
              {details.itinerary.map((i) => (
                <li key={i.day} className="itinerary-item">
                  <h3 className="itinerary-day">{i.day}</h3>
                  <p className="itinerary-text">{i.text}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Includes / Excludes */}
        {(details.includes || details.excludes) && (
          <section className="detail-section two-col">
            {Array.isArray(details.includes) && (
              <div>
                <h2>What’s Included</h2>
                <ul className="list included">
                  {details.includes.map((it) => (
                    <li key={it} className="list-item"><FaCheck className="li-icon" /> {it}</li>
                  ))}
                </ul>
              </div>
            )}
            {Array.isArray(details.excludes) && (
              <div>
                <h2>What’s Not Included</h2>
                <ul className="list excluded">
                  {details.excludes.map((it) => (
                    <li key={it} className="list-item"><FaTimes className="li-icon" /> {it}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Gallery */}
        {Array.isArray(details.gallery) && details.gallery.length > 0 && (
          <section className="detail-section">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {details.gallery.map((src) => (
                <img key={src} src={src} alt={pkg.title} loading="lazy" onError={(e) => { e.currentTarget.src = scenicFallback; }} />
              ))}
            </div>
          </section>
        )}

        {/* Reviews */}
        {Array.isArray(details.reviews) && details.reviews.length > 0 && (
          <section className="detail-section">
            <h2>Reviews & Testimonials</h2>
            <div className="reviews">
              {details.reviews.map((r) => (
                <div key={r.name} className="review-card">
                  <div className="stars">{Array.from({ length: r.rating || 5 }).map((_, i) => <FaStar key={i} />)}</div>
                  <p className="review-text">“{r.text}”</p>
                  <div className="review-author">— {r.name}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pricing & Booking */}
        <section className="detail-section">
          <h2>Pricing & Booking Options</h2>
          <div className="pricing-grid">
            {pricingOptions.map((opt) => (
              <div key={opt.name} className="price-card">
                <div className="price-name">{opt.name}</div>
                <div className="price-main">{opt.price}</div>
                {opt.note && <div className="price-note">{opt.note}</div>}
                <button className="primary-cta" onClick={() => navigate('/plan-trip')}>Book Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Tips */}
        {Array.isArray(details.tips) && details.tips.length > 0 && (
          <section className="detail-section">
            <h2>Travel Tips</h2>
            <ul className="list tips">
              {details.tips.map((t) => (
                <li key={t} className="list-item"><FaInfoCircle className="li-icon" /> {t}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Sticky Bar */}
      <div className="sticky-bar">
        <div className="sticky-inner container">
          <button className="sticky-btn outline" onClick={() => window.open(whatsappUrl, '_blank')} aria-label="Chat on WhatsApp"><FaWhatsapp /> WhatsApp us</button>
          <button className="sticky-btn outline" onClick={() => navigate('/plan-trip')}>Reserve dates</button>
          <button className="sticky-btn primary" onClick={() => navigate('/plan-trip')}>Book Package →</button>
        </div>
      </div>
    </section>
  );
}
