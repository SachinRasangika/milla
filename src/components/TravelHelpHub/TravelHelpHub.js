import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TravelHelpHub.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {
  FaStar, FaCamera, FaUtensils, FaClock, FaRoute, FaShoePrints, FaTshirt, FaPrayingHands, FaSmile, FaLightbulb, FaDrum, FaMoneyBillWave, FaWifi, FaAmbulance, FaCloudSun, FaMugHot, FaPaw, FaWater, FaShip, FaVolumeUp, FaComments, FaWhatsapp, FaEnvelope, FaArrowRight, FaMonument, FaStoreAlt, FaRecycle, FaBan
} from 'react-icons/fa';

const speak = (text, lang = 'si-LK') => {
  try {
    if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      window.speechSynthesis.speak(utter);
    }
  } catch (_) {}
};

const spots = [
  {
    id: 'colombo',
    name: 'Colombo',
    x: 22,
    y: 62,
    details: {
      sights: 'Galle Face Green, National Museum, Pettah Market',
      food: 'Kottu Roti, Hoppers, Crab Curry',
      bestTime: 'Dec – Mar',
      transport: '1h from CMB Airport, trains and expressways'
    }
  },
  {
    id: 'galle',
    name: 'Galle',
    x: 12,
    y: 78,
    details: {
      sights: 'Galle Fort, Unawatuna Beach, Jungle Beach',
      food: 'Seafood platters, Curd & Treacle',
      bestTime: 'Dec – Apr',
      transport: '2–2.5h via Southern Expressway from Colombo'
    }
  },
  {
    id: 'kandy',
    name: 'Kandy',
    x: 45,
    y: 52,
    details: {
      sights: 'Temple of the Tooth, Botanical Gardens',
      food: 'Milk Toffee, Traditional Rice & Curry',
      bestTime: 'Jan – Apr, Jul – Sep',
      transport: '3h by road or scenic train from Colombo'
    }
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    x: 48,
    y: 38,
    details: {
      sights: 'Sigiriya Rock Fortress, Pidurangala',
      food: 'King Coconut, Tropical fruits',
      bestTime: 'Jan – Apr',
      transport: '3.5h by road from Colombo / Kandy transfers'
    }
  }
];

export default function TravelHelpHub() {
  const [active, setActive] = useState(spots[0]);

  return (
    <div className="help-hub-page">
      <Navbar />

      <section className="help-hero">
        <div className="container">
          <p className="help-eyebrow"><FaStar className="icon" /> Your Travel Companion in Sri Lanka</p>
          <h1 className="help-title">Your Digital Travel Buddy</h1>
          <p className="help-subtext">
            Planning a trip can feel overwhelming — but not here. From maps to money tips, culture to cuisine,
            we’ve packed everything you need into one easy page.
          </p>
          <div className="help-cta-group">
            <a className="btn" href="#help-map">Start Exploring <FaArrowRight /></a>
          </div>
        </div>
      </section>

      <section id="help-map" className="help-map-section">
        <div className="container">
          <div className="help-map-header">
            <h2>Explore Sri Lanka Like a Local</h2>
            <p>
              Click on the map to uncover hidden beaches, tea-covered hills, ancient temples, and buzzing cities.
              Every destination includes:
            </p>
            <ul className="help-map-list">
              <li><FaCamera className="icon" /> Stunning sights</li>
              <li><FaUtensils className="icon" /> Must-try food</li>
              <li><FaClock className="icon" /> Best time to visit</li>
              <li><FaRoute className="icon" /> How to get there</li>
            </ul>
          </div>

          <div className="local-explore-layout">
            <section className="local-explore-details">
              <div className="details-header">
                <h3 className="details-title">{active.name}</h3>
                <div className="details-chips">
                  <span className="chip"><FaCamera className="icon" /> Sights</span>
                  <span className="chip"><FaUtensils className="icon" /> Food</span>
                  <span className="chip"><FaClock className="icon" /> {active.details.bestTime}</span>
                  <span className="chip"><FaRoute className="icon" /> Routes</span>
                </div>
              </div>

              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Stunning sights</span>
                  <p className="detail-text">{active.details.sights}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Must-try food</span>
                  <p className="detail-text">{active.details.food}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Best time to visit</span>
                  <p className="detail-text">{active.details.bestTime}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">How to get there</span>
                  <p className="detail-text">{active.details.transport}</p>
                </div>
              </div>

              <div className="details-cta-row">
                <Link to="/plan-trip" className="btn btn-outline details-cta">Plan Your Route</Link>
              </div>
            </section>

            <aside className="local-explore-cards" role="tablist" aria-label="Destinations">
              {spots.map((s) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={active.id === s.id}
                  className={`location-card ${active.id === s.id ? 'active' : ''}`}
                  onClick={() => setActive(s)}
                >
                  <div className="card-header">
                    <h4 className="card-title">{s.name}</h4>
                    {active.id === s.id && <span className="active-dot" aria-hidden="true" />}
                  </div>
                  <ul className="card-highlights">
                    <li><FaCamera className="icon" /> {s.details.sights.split(',')[0]}</li>
                    <li><FaUtensils className="icon" /> {s.details.food.split(',')[0]}</li>
                    <li><FaClock className="icon" /> {s.details.bestTime}</li>
                  </ul>
                  <div className="card-footer">
                    <span className="quick-route"><FaRoute className="icon" /> Easy access</span>
                  </div>
                </button>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* 4. Cultural Etiquette Tips */}
      <section className="help-section etiquette-section">
        <div className="container">
          <div className="section-header">
            <h2>Travel with Respect</h2>
            <p className="section-subtext">Sri Lanka is warm, welcoming, and deeply cultural. Follow these quick tips to blend in like a local:</p>
          </div>
          <div className="etiquette-grid">
            <div className="etiquette-card"><FaShoePrints className="icon" /> Always remove shoes before entering temples.</div>
            <div className="etiquette-card"><FaTshirt className="icon" /> Dress modestly at religious sites.</div>
            <div className="etiquette-card"><FaPrayingHands className="icon" /> Greet with “Ayubowan” (hands together).</div>
            <div className="etiquette-card"><FaSmile className="icon" /> A smile can take you anywhere here!</div>
          </div>
        </div>
      </section>

      {/* 5. Festival & Event Calendar */}
      <section className="help-section festival-section">
        <div className="container">
          <div className="section-header">
            <h2>Celebrate Like a Local</h2>
            <p className="section-subtext">Time your trip with a festival, and your holiday becomes unforgettable:</p>
          </div>
          <div className="festival-grid">
            <div className="festival-item"><FaStar className="icon" /> <strong>April</strong> – Sinhala & Tamil New Year (fireworks, food & fun!)</div>
            <div className="festival-item"><FaLightbulb className="icon" /> <strong>May</strong> – Vesak (lanterns light up every street)</div>
            <div className="festival-item"><FaMonument className="icon" /> <strong>July/Aug</strong> – Esala Perahera, Kandy (majestic cultural parade)</div>
            <div className="festival-item"><FaDrum className="icon" /> <strong>November</strong> – Deepavali (festival of lights & colors)</div>
          </div>
        </div>
      </section>

      {/* 6. Travel Resources (Accordion) */}
      <TravelResources />

      {/* 7. Local Experiences */}
      <section className="help-section experiences-section">
        <div className="container">
          <div className="section-header">
            <h2>Go Beyond Sightseeing</h2>
            <p className="section-subtext">Sri Lanka is more than places — it’s experiences:</p>
          </div>
          <div className="experiences-grid">
            <div className="experience-card">
              <h3><FaUtensils className="icon" /> Cook with a Village Family</h3>
              <p>Learn to cook a Sri Lankan curry with a village family.</p>
              <Link to="/plan-trip" className="btn btn-outline">Add to My Tour</Link>
            </div>
            <div className="experience-card">
              <h3><FaMugHot className="icon" /> Tea Tasting in Nuwara Eliya</h3>
              <p>Taste tea at a misty plantation in Nuwara Eliya.</p>
              <Link to="/plan-trip" className="btn btn-outline">Add to My Tour</Link>
            </div>
            <div className="experience-card">
              <h3><FaPaw className="icon" /> Yala National Park Safari</h3>
              <p>Spot leopards and elephants on a guided safari.</p>
              <Link to="/plan-trip" className="btn btn-outline">Add to My Tour</Link>
            </div>
            <div className="experience-card">
              <h3><FaWater className="icon" /> Surf Arugam Bay</h3>
              <p>Ride world-class waves at Sri Lanka’s surf capital.</p>
              <Link to="/plan-trip" className="btn btn-outline">Add to My Tour</Link>
            </div>
            <div className="experience-card">
              <h3><FaShip className="icon" /> Mangrove Boat Ride</h3>
              <p>Drift through serene mangrove forests at golden hour.</p>
              <Link to="/plan-trip" className="btn btn-outline">Add to My Tour</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Language Helper */}
      <section className="help-section language-section">
        <div className="container">
          <div className="section-header">
            <h2>Speak Like a Local</h2>
            <p className="section-subtext">A few words go a long way. Tap to hear pronunciations.</p>
          </div>
          <div className="language-grid">
            <PhraseCard label="Hello" phrase="Ayubowan" onSpeak={() => speak('Ayubowan')} />
            <PhraseCard label="Thank you" phrase="Bohoma Istuti" onSpeak={() => speak('Bohoma Istuti')} />
            <PhraseCard label="How much?" phrase="Meeka Keeyada?" onSpeak={() => speak('Meeka Keeyada?')} />
            <PhraseCard label="Where is the station?" phrase="Station koheda?" onSpeak={() => speak('Station koheda?')} />
          </div>
          <p className="section-note">Travelers love when you try — and locals love it even more.</p>
        </div>
      </section>

      {/* 9. Travel Stories */}
      <section className="help-section stories-section">
        <div className="container">
          <div className="section-header">
            <h2>Memories from Fellow Travelers</h2>
            <p className="section-subtext">See Sri Lanka through the eyes of those who’ve been here before:</p>
          </div>
          <div className="stories-grid">
            <StoryCard text="Surfing in Arugam Bay was the highlight of my trip." author="Sophie, UK" />
            <StoryCard text="Seeing elephants up close at Minneriya was magical." author="Daniel, Australia" />
            <StoryCard text="Sri Lankan food is fire! Cooking class was my favorite." author="Akira, Japan" />
          </div>
          <a href="mailto:hello@wanderlust.com?subject=Share%20My%20Sri%20Lanka%20Story" className="btn stories-cta">Share Your Story</a>
        </div>
      </section>

      {/* 10. Eco & Responsible Travel */}
      <section className="help-section eco-section">
        <div className="container">
          <div className="section-header">
            <h2>Travel Kindly</h2>
            <p className="section-subtext">Your choices matter. Here’s how to keep Sri Lanka beautiful:</p>
          </div>
          <ul className="eco-list">
            <li><FaRecycle className="icon" /> Carry a reusable water bottle.</li>
            <li><FaStoreAlt className="icon" /> Support local businesses & crafts.</li>
            <li><FaPaw className="icon" /> Respect wildlife (no feeding elephants).</li>
            <li><FaBan className="icon" /> Avoid single-use plastic.</li>
          </ul>
          <p className="section-note">Together, we keep the island as magical as it is today.</p>
        </div>
      </section>

      {/* 11. Need Help Fast */}
      <section className="help-section helpfast-section">
        <div className="container">
          <div className="section-header">
            <h2>Talk to Us Anytime</h2>
            <p className="section-subtext">Stuck, confused, or just need advice? Our team is one tap away.</p>
          </div>
          <div className="helpfast-grid">
            <Link className="contact-card" to="/plan-trip">
              <div className="contact-title"><FaComments className="icon" /> Live Chat</div>
              <div className="contact-desc">Instant support while you plan</div>
            </Link>
            <button className="contact-card" onClick={() => window.open('https://wa.me/?text=Hi%20I%20need%20travel%20help%20in%20Sri%20Lanka','_blank') }>
              <div className="contact-title"><FaWhatsapp className="icon" /> WhatsApp Help</div>
              <div className="contact-desc">Open a chat in WhatsApp</div>
            </button>
            <a className="contact-card" href="mailto:hello@wanderlust.com">
              <div className="contact-title"><FaEnvelope className="icon" /> Email Us</div>
              <div className="contact-desc">We reply within 24 hours</div>
            </a>
          </div>
          <div className="helpfast-cta-wrap">
            <Link to="/plan-trip" className="btn"><FaComments /> Chat Now</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TravelResources() {
  const items = [
    { icon: <FaMoneyBillWave className="icon" />, title: 'Money Matters', content: 'Use LKR; ATMs everywhere; carry small notes for tuk-tuks.' },
    { icon: <FaWifi className="icon" />, title: 'Internet & SIMs', content: 'Dialog & Mobitel SIMs at the airport, 4G everywhere.' },
    { icon: <FaRoute className="icon" />, title: 'Transport', content: 'Tuk-tuks for short rides, trains for scenic trips, private cars for comfort.' },
    { icon: <FaAmbulance className="icon" />, title: 'Emergency', content: 'Police: 119 | Ambulance: 110 | Tourist Hotline: 1912' },
    { icon: <FaCloudSun className="icon" />, title: 'Weather', content: 'West/South: best Nov–Apr | East/North: best May–Sep.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="help-section resources-section">
      <div className="container">
        <div className="section-header">
          <h2>Essentials at Your Fingertips</h2>
          <p className="section-subtext">Quick answers to what travelers ask most.</p>
        </div>
        <div className="accordion">
          {items.map((it, i) => (
            <div key={it.title} className={`accordion-item ${open === i ? 'open' : ''}`}>
              <button className="accordion-trigger" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="trigger-left">{it.icon}<span>{it.title}</span></span>
                <span className="acc-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="accordion-content">
                  <p>{it.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhraseCard({ label, phrase, onSpeak }) {
  return (
    <div className="phrase-card">
      <div className="phrase-header">
        <span className="phrase-label">{label}</span>
        <button className="speak-btn" onClick={onSpeak} aria-label={`Hear ${phrase}`}><FaVolumeUp className="icon" /> Tap to hear</button>
      </div>
      <div className="phrase-text">{phrase}</div>
    </div>
  );
}

function StoryCard({ text, author }) {
  return (
    <div className="story-card">
      <p className="story-text">“{text}”</p>
      <div className="story-author">— {author}</div>
    </div>
  );
}
