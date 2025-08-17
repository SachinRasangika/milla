import React, { useState } from "react";
import "./Tours.css";

const allTours = [
  {
    id: 1,
    title: "Wildlife Safari Expedition",
    duration: "7 Days",
    price: "$1,299",
    description: "Explore the untouched wilderness with expert guides. Spot rare species and camp under the stars in this once-in-a-lifetime adventure.",
    tags: ["Best Seller", "Family Friendly", "Adventure"],
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Mountain Trekking Adventure",
    duration: "5 Days",
    price: "$899",
    description: "Conquer breathtaking peaks with our professional mountaineering team. Suitable for intermediate hikers.",
    tags: ["Hiking", "Extreme"],
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Cultural Heritage Tour",
    duration: "3 Days",
    price: "$599",
    description: "Discover ancient civilizations and traditions with local historians. Includes 5 UNESCO World Heritage sites.",
    tags: ["History", "Guided"],
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Beach Paradise Getaway",
    duration: "4 Days",
    price: "$749",
    description: "Relax on pristine beaches with luxury accommodations. Includes snorkeling and sunset cruises.",
    tags: ["Relaxation", "Luxury"],
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Northern Lights Experience",
    duration: "6 Days",
    price: "$1,099",
    description: "Witness the aurora borealis in prime locations with expert photographers to capture your memories.",
    tags: ["Winter", "Photography"],
    image: "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Wine Country Tour",
    duration: "3 Days",
    price: "$649",
    description: "Sample world-class wines with vineyard tours and gourmet meals in picturesque settings.",
    tags: ["Gourmet", "Luxury"],
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Tours() {
  const [selectedTour, setSelectedTour] = useState(allTours[0]);
  const [visibleCount, setVisibleCount] = useState(3); // Show 3 tours initially
  const toursToShow = allTours.slice(0, visibleCount);
  const hasMoreTours = visibleCount < allTours.length;

  const loadMoreTours = () => {
    setVisibleCount(prev => prev + 3); // Load 3 more tours
  };

  return (
    <section className="tours-section">
      <h2 className="section-heading">Tours</h2>
      
      <div className="tours-container">
        {/* Left Side - Featured Tour */}
        <div className="featured-tour">
          <div className="tour-image-container">
            <img 
              src={selectedTour.image} 
              alt={selectedTour.title} 
              className="featured-image"
            />
          </div>
          
          <div className="tags-container">
            {selectedTour.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          
          <div className="tour-details">
            <div className="price-duration">
              <span className="price">{selectedTour.price}</span>
              <span className="duration">{selectedTour.duration}</span>
            </div>
            <h3>{selectedTour.title}</h3>
            <p className="description">{selectedTour.description}</p>
            <button className="cta-button">
              Book Now <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Right Side - Tour List */}
        <div className="tour-list-container">
          <div className="tour-list">
            {toursToShow.map((tour) => (
              <div 
                key={tour.id} 
                className={`tour-item ${selectedTour.id === tour.id ? 'active' : ''}`}
                onClick={() => setSelectedTour(tour)}
              >
                <img src={tour.image} alt={tour.title} className="list-image" />
                <div className="tour-info">
                  <h4>{tour.title}</h4>
                  <div className="meta">
                    <span className="price">{tour.price}</span>
                    <span className="duration">{tour.duration}</span>
                  </div>
                  <div className="item-tags">
                    {tour.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {hasMoreTours && (
            <button className="see-more-button" onClick={loadMoreTours}>
              See More Tours
            </button>
          )}
        </div>
      </div>
    </section>
  );
}