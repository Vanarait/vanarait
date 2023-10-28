import React, { useEffect, useState } from 'react';
import '../css/Marquee.css';

const images = [
  'clients/acc.png',
  'clients/cog.png',
  'clients/dbs.png',
  'clients/ibm.png',
  'clients/hcl.png',
  'clients/lt.png',
  'clients/ss.png',
  'clients/techm.png',
  'clients/ss.png',
  'clients/wipro.png',
  'clients/deloite.png',
  'clients/techsystem.jpg'
  // Add more image URLs here
];

const Marquee = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Failed to load images:', error);
          setIsLoading(false);
        });
    };

    preloadImages();
  }, []);

  return (
    <div className="marquee-container col-md-12">
      {!isLoading &&
        images.map((image, index) => (
          <img key={index} src={image} alt={`Client Logo ${index}`} className="marquee-image" />
        ))}
    </div>
  );
};

export default Marquee;
