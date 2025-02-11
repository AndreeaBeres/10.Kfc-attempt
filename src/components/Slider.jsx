import React, { useState, useEffect } from 'react';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'images/doubledown.jpg',
    'images/freshness.png',
    'images/snack.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const moveToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img key={index} src={process.env.PUBLIC_URL + '/' + slide} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => moveToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;