import React from 'react';
import './TourPlans.css';

const TourPlans = () => {
  return (
    <section className="tour-plans">
      <div className="container">
        <div className="tour-plans__header">
          <h2 className="tour-plans__title">Sri Lanka Travel Insights</h2>
          <button className="tour-plans__see-all-btn">
            <span>See all articles</span>
            <svg className="tour-plans__arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="tour-plans__content">
          <div className="tour-plans__main-post">
            <img 
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&h=460&fit=crop&auto=format" 
              alt="Temple & Beach Private Tour" 
              className="tour-plans__main-image"
            />
            <div className="tour-plans__main-content">
              <div className="tour-plans__tags">
                <span className="tour-plans__tag">🛕 Temple & Beach</span>
                <span className="tour-plans__tag">Luxury Experience</span>
              </div>
              <div className="tour-plans__text-wrapper">
                <h3 className="tour-plans__main-title">
                  Temple & Beach Private Tour (5 Days)
                </h3>
                <p className="tour-plans__main-description">
                  Ancient Polonnaruwa + Maldives-style beaches. Experience the perfect blend of Sri Lanka's rich cultural heritage and pristine coastal beauty with our exclusive 5-day luxury tour.
                </p>
              </div>
              <div className="tour-plans__info-wrapper">
                <div className="tour-plans__author">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b9d5b74b?w=40&h=40&fit=crop&auto=format&q=80" 
                    alt="Tour Designer" 
                    className="tour-plans__author-image"
                  />
                  <span className="tour-plans__author-name">Luxury Travel Designers</span>
                </div>
                <div className="tour-plans__divider"></div>
                <span className="tour-plans__read-time">15 min read • From $1,200/person</span>
              </div>
            </div>
          </div>

          <div className="tour-plans__articles">
            <article className="tour-plans__post">
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=177&h=177&fit=crop&auto=format" 
                alt="Sigiriya Lion Rock" 
                className="tour-plans__post-image"
              />
              <div className="tour-plans__post-content">
                <h4 className="tour-plans__post-title">
                  🏰 Sigiriya Lion Rock: Full-Day Heritage Tour
                </h4>
                <div className="tour-plans__post-info">
                  <div className="tour-plans__author">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&auto=format&q=80" 
                      alt="Expert Guide" 
                      className="tour-plans__author-image tour-plans__author-image--small"
                    />
                    <span className="tour-plans__author-name">Expert Guides</span>
                  </div>
                  <div className="tour-plans__divider"></div>
                  <span className="tour-plans__read-time">5 min read • From $75/person</span>
                </div>
              </div>
            </article>

            <article className="tour-plans__post">
              <img 
                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=177&h=177&fit=crop&auto=format" 
                alt="Yala Safari" 
                className="tour-plans__post-image"
              />
              <div className="tour-plans__post-content">
                <h4 className="tour-plans__post-title">
                  🐘 Yala Safari: 2-Day Wildlife Adventure
                </h4>
                <div className="tour-plans__post-info">
                  <div className="tour-plans__author">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&auto=format&q=80" 
                      alt="Wildlife Expert" 
                      className="tour-plans__author-image tour-plans__author-image--small"
                    />
                    <span className="tour-plans__author-name">Wildlife Rangers</span>
                  </div>
                  <div className="tour-plans__divider"></div>
                  <span className="tour-plans__read-time">12 min read • From $220/person</span>
                </div>
              </div>
            </article>

            <article className="tour-plans__post">
              <img 
                src="https://images.unsplash.com/photo-1544967882-6abec37be2b3?w=177&h=177&fit=crop&auto=format" 
                alt="Kandy to Ella Train" 
                className="tour-plans__post-image"
              />
              <div className="tour-plans__post-content">
                <h4 className="tour-plans__post-title">
                  ☕ Kandy to Ella: Scenic Train Journey
                </h4>
                <div className="tour-plans__post-info">
                  <div className="tour-plans__author">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&auto=format&q=80" 
                      alt="Travel Planner" 
                      className="tour-plans__author-image tour-plans__author-image--small"
                    />
                    <span className="tour-plans__author-name">Travel Planners</span>
                  </div>
                  <div className="tour-plans__divider"></div>
                  <span className="tour-plans__read-time">7 min read • From $50/person</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPlans;
