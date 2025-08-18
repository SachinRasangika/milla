import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      alt: 'Sigiriya Rock Fortress',
      title: 'Sigiriya Rock Fortress',
      category: 'Heritage Sites'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      alt: 'Tea Plantations Ella',
      title: 'Tea Plantations in Ella',
      category: 'Nature'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      alt: 'Temple of the Sacred Tooth',
      title: 'Temple of the Sacred Tooth',
      category: 'Culture'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      alt: 'Galle Fort',
      title: 'Historic Galle Fort',
      category: 'Heritage Sites'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      alt: 'Yala National Park',
      title: 'Wildlife Safari',
      category: 'Wildlife'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      alt: 'Mirissa Beach',
      title: 'Golden Beaches',
      category: 'Beaches'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      alt: 'Adam\'s Peak',
      title: 'Sacred Adam\'s Peak',
      category: 'Nature'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      alt: 'Colombo City',
      title: 'Modern Colombo',
      category: 'City Life'
    }
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">
            Discover Sri Lanka's Beauty
          </h2>
          <p className="gallery-description">
            Immerse yourself in the stunning landscapes, rich culture, and vibrant heritage that make Sri Lanka a truly magical destination.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <h3 className="image-title">{image.title}</h3>
                  <span className="image-category">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <span>{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
