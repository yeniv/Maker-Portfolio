import React, { useState, useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex || 0);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev(); 
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Disable scrolling when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Re-enable scrolling when lightbox is closed
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, onClose]); // eslint-disable-line react-hooks/exhaustive-deps

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Prevent click events on image from closing the lightbox
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container">
        <button className="lightbox-close" onClick={onClose}>×</button>

        <div className="lightbox-content" onClick={onClose}>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>
            &lt;
          </button>

          <div className="lightbox-image-container" onClick={handleImageClick}>
            <img
              src={images[currentIndex]}
              alt={`Portrait ${currentIndex + 1} of ${images.length}`}
              className="lightbox-image"
            />
          </div>

          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
            &gt;
          </button>
        </div>

        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;