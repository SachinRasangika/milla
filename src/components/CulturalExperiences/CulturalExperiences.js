import React from 'react';
import Slider from 'react-slick';
import './CulturalExperiences.css';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const fallback = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80';

const events = [
  {
    id: 'esala-perahera',
    title: 'Esala Perahera – Kandy',
    date: 'July 2025',
    tagline: 'Where Elephants Dance & Drums Beat!',
    desc: 'Watch majestic elephants, glittering costumes, and the city light up in celebration.',
    cta: 'Plan Your Trip',
    image: 'https://images.unsplash.com/photo-1544551763-7ef420be2a37?auto=format&fit=crop&w=1200&q=80',
    location: 'Kandy'
  },
  {
    id: 'vesak-lanterns',
    title: 'Vesak Lantern Festival',
    date: 'May 2025',
    tagline: 'Illuminate Your Soul',
    desc: 'Marvel at thousands of lanterns glowing across the night sky and streets.',
    cta: 'Experience Now',
    image: 'https://images.unsplash.com/photo-1499540633125-484965b60031?auto=format&fit=crop&w=1200&q=80',
    location: 'Nationwide'
  },
  {
    id: 'new-year',
    title: 'Sinhala & Tamil New Year',
    date: 'April 2025',
    tagline: 'A Festival of Joy & Family Fun',
    desc: 'Traditional games, fireworks, and sweet treats to start the year right.',
    cta: 'Celebrate With Us',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
    location: 'Island-wide'
  },
  {
    id: 'village-cooking',
    title: 'Village Cooking Experience',
    date: 'Year-round',
    tagline: 'Cook, Taste, Connect',
    desc: 'Hands-on cooking with local families. Learn authentic recipes and share a meal.',
    cta: 'Join the Experience',
    image: 'https://images.unsplash.com/photo-1526312426976-593c3d39ebb3?auto=format&fit=crop&w=1200&q=80',
    location: 'Rural Villages'
  },
  {
    id: 'beach-harvest',
    title: 'Beach & Harvest Festival',
    date: 'Seasonal',
    tagline: 'Ride the Waves, Taste the Fields',
    desc: 'Local music, seafood feasts, and coastal harvest celebrations.',
    cta: 'Discover More',
    image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=1200&q=80',
    location: 'South & East Coast'
  }
];

export default function CulturalExperiences() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section id="experiences" className="culture-section">
      <div className="culture-bg" aria-hidden="true">
        <span className="lantern l1"></span>
        <span className="lantern l2"></span>
        <span className="lantern l3"></span>
      </div>
      <div className="container">
        <header className="culture-header">
          <h2 className="culture-title">Celebrate Like a Local</h2>
          <p className="culture-subtitle">Step off the tourist trail and dive into Sri Lanka’s festivals, traditions, and vibrant local life.</p>
        </header>

        <div className="culture-carousel">
          <Slider {...settings}>
            {events.map(ev => (
              <div key={ev.id} className="culture-slide">
                <article className="culture-card">
                  <div className="image-wrap">
                    <img src={ev.image} alt={ev.title} onError={(e) => { e.currentTarget.src = fallback; }} />
                    <div className="date-badge"><FaCalendarAlt /> {ev.date}</div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{ev.title}</h3>
                    <div className="card-meta"><FaMapMarkerAlt className="meta-icon" /> {ev.location}</div>
                    <p className="card-tagline">{ev.tagline}</p>
                    <p className="card-desc">{ev.desc}</p>
                    <button className="card-cta" onClick={() => navigate('/packages')}>
                      {ev.cta} <FaArrowRight />
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>

        <div className="culture-bottom-cta">
          <p className="bottom-text">Don’t just see Sri Lanka — live it. Explore festivals, traditions, and unforgettable local experiences.</p>
          <button className="bottom-btn" onClick={() => navigate('/packages')}>See All Cultural Experiences →</button>
        </div>
      </div>
    </section>
  );
}
