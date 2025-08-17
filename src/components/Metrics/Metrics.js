import React, { useState, useEffect, useRef } from 'react';
import './Metrics.css';

export default function Metrics() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    travelers: 0,
    reviews: 0,
    years: 0,
    satisfaction: 0
  });
  
  const metricsRef = useRef(null);

  const finalNumbers = {
    travelers: 50000,
    reviews: 1000,
    years: 15,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const stepTime = 16; // ~60fps
      const steps = duration / stepTime;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setAnimatedNumbers({
          travelers: Math.floor(finalNumbers.travelers * easeOutQuart),
          reviews: Math.floor(finalNumbers.reviews * easeOutQuart),
          years: Math.floor(finalNumbers.years * easeOutQuart),
          satisfaction: Math.floor(finalNumbers.satisfaction * easeOutQuart)
        });

        if (currentStep >= steps) {
          setAnimatedNumbers(finalNumbers);
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toLocaleString();
  };

  return (
    <section className="metrics-section" ref={metricsRef}>
      <div className="metrics-container">
        <div className="metrics-grid">
          <div className={`metric-item ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="metric-number">
              {isVisible ? `${formatNumber(animatedNumbers.travelers)}` : '0'}
            </div>
            <div className="metric-label">Happy Travelers Served</div>
          </div>
          
          <div className={`metric-item ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="metric-number">
              {isVisible ? `${formatNumber(animatedNumbers.reviews)}+` : '0'}
            </div>
            <div className="metric-label">5-Star Reviews from Global Tourists</div>
          </div>
          
          <div className={`metric-item ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="metric-number">
              {isVisible ? `${animatedNumbers.years}+` : '0'}
            </div>
            <div className="metric-label">Years Of Trusted Local Expertise</div>
          </div>
          
          <div className={`metric-item ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="metric-number">
              {isVisible ? `${animatedNumbers.satisfaction}%` : '0%'}
            </div>
            <div className="metric-label">Trip Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
