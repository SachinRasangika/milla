import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Flow transformed my energy use. Efficient, green tech, outstanding service!",
      name: "Jenny Wilson",
      service: "Solar energy service",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9d5b74b?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      quote: "Flow redefined my energy game – green, efficient, and top-notch service!",
      name: "Dianne Russell",
      service: "EV service",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      quote: "Thanks to Flow, my energy is now solar-powered – sustainable, efficient, and exceptional service.",
      name: "Cody Fisher",
      service: "Solar energy service",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      quote: "Flow transformed my energy use. Efficient, green tech, outstanding service!",
      name: "Jenny Wilson",
      service: "Solar energy service",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="subtitle-wrapper">
            <div className="subtitle-dot"></div>
            <span className="subtitle-text">Testimonials</span>
            
          </div>
          <h2 className="testimonials-title">What our customers say</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              style={{'--proof-image': `url(${testimonial.proofImage})`}}
            >
              <div className="testimonial-content">
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>

                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-image"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=112&h=112&q=80'; }}
                  />
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-service">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="progress-bar">
          <div className="progress-background"></div>
          <div className="progress-loading"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
