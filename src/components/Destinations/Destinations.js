import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: 'Wildlife Park',
      description: 'Experience breathtaking wildlife encounters in their natural habitat with guided safari tours.',
      toursCount: 12,
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Mountain Reserve',
      description: 'Discover pristine mountain landscapes and rare alpine wildlife on challenging hiking expeditions.',
      toursCount: 8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Ocean Sanctuary',
      description: 'Dive into crystal clear waters to explore vibrant coral reefs and marine life.',
      toursCount: 15,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Rainforest Adventure',
      description: 'Journey through ancient rainforests and discover exotic birds and wildlife.',
      toursCount: 10,
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Desert Expedition',
      description: 'Explore vast desert landscapes and encounter unique desert wildlife and flora.',
      toursCount: 6,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      title: 'Arctic Wilderness',
      description: 'Witness polar bears and arctic foxes in their frozen natural environment.',
      toursCount: 4,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 7,
      title: 'Wetland Discovery',
      description: 'Explore diverse wetland ecosystems and spot migratory birds and aquatic life.',
      toursCount: 9,
      image: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 8,
      title: 'Grassland Safari',
      description: 'Experience the African savanna with incredible big game viewing opportunities.',
      toursCount: 14,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="destinations-container">
      <div className="destinations-header">
        <h1>About us</h1>
        <div className="header-content">
          <p>
            At Flow, we're committed to a sustainable future. As a pioneering force in the green energy sector,
            we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple
            yet profound: to create a world where energy is not only abundant but also environmentally responsible.
            We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
          </p>
          <button className="explore-btn">Read more</button>
        </div>
      </div>

      <div className="destinations-scroller">
        <div className="destinations-slider">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <img
                src={destination.image}
                alt={destination.title}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                }}
              />
              <div className="card-content">
                <div className="card-title">{destination.title}</div>
                <div className="card-overlay">
                  <div className="overlay-content">
                    <div className="overlay-left">
                      <div className="card-description">{destination.description}</div>
                    </div>
                    <div className="learn-more-container">
                      <div className="tours-available">{destination.toursCount} tours available</div>
                      <button className="learn-more-btn">
                        Learn more
                        <svg className="arrow-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 4.33331L12.6667 7.99998L9 11.6666" />
                          <path d="M12.6663 8H3.33301" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
