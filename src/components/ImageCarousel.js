import React, { useState, useEffect } from 'react';
import '../css/ImageCarousel.css';

function ImageCarousel({ images, autoScrollInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoScrollInterval);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide, autoScrollInterval]);

  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
  ];

  // This effect handles the initial loading of the images.
  useEffect(() => {
    const preloadImages = (imageUrls) => {
      for (const imageUrl of imageUrls) {
        const img = new Image();
        img.src = imageUrl;
      }
    };

    preloadImages(images);
  }, [images]);

  return (
    <div className="image-carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="image-viewport">
        <div className="image-container">
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel Slide ${index}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default ImageCarousel;
