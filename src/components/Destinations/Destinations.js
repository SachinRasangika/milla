import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: 'Solar Farms',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Wind Parks',
      image: 'https://images.unsplash.com/photo-1497215721261-1b252f4e6b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Hydro Plants',
      image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Research Centers',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Geothermal Sites',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      title: 'Biomass Facilities',
      image: 'https://images.unsplash.com/photo-1605559421013-3b379d5d7a3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 7,
      title: 'Tidal Energy',
      image: 'https://images.unsplash.com/photo-1566837945151-f8b8a0b72c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 8,
      title: 'Energy Storage',
      image: 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="destinations-container">
      <div className="destinations-header">
        <h1>Our Global Energy Network</h1>
        <div className="header-content">
          <p>
            At Flow, we're committed to a sustainable future. As a pioneering force in the green energy sector, 
            we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple 
            yet profound: to create a world where energy is not only abundant but also environmentally responsible. 
            We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
          </p>
          <button className="explore-btn">Explore Our Facilities</button>
        </div>
      </div>

      <div className="destinations-scroller">
        <div className="destinations-slider">
          {destinations.map((destination) => (
            <div key={destination.id} className="slide-item">
              <img 
                src={destination.image} 
                alt={destination.title}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                }}
              />
              <div className="slide-title">{destination.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;