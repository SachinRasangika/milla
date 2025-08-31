import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "From Colombo to Galle, everything was seamless. Sunrise at Sigiriya was unforgettable!",
      name: "Amara Perera",
      service: "7-Day Sri Lanka Highlights",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1544551763-7ef420be2a37?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      quote: "The scenic train to Ella and Nine Arches Bridge were pure magic. Hotel picks were perfect.",
      name: "Liam Carter",
      service: "Hill Country & Tea Trails",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1544967882-6abec37be2b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      quote: "We spotted elephants and a leopard in Yala, then unwound in Mirissa—perfect mix of adventure and beach.",
      name: "Nadeesha Fernando",
      service: "Wildlife & Beach Escape",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      quote: "Kandy’s Temple of the Tooth and the Perahera were deeply moving. Guides were kind and knowledgeable.",
      name: "Hiro Tanaka",
      service: "Culture & Heritage",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      quote: "Whale watching in Mirissa and learning to surf at Weligama made our honeymoon unforgettable.",
      name: "Sofia & Mateo",
      service: "Honeymoon Island Escape",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9d5b74b?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      quote: "Kalpitiya dolphins, Jaffna cuisine, and Trinco’s calm bays—loved the authentic local tips.",
      name: "Aisha Rahman",
      service: "Custom North & East",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=112&h=112&q=80",
      proofImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
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
