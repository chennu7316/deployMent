import React, { useState } from 'react';

const BannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    '/banner.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          className="slide"
          key={index}
          style={{
            transform: `translateX(${index - currentSlide}00%)`,
          }}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}

      <div className="slider-nav">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>

      <style jsx>{`
        .slider {
          width: 100%;
          height: 300px;
          overflow: hidden;
          position: relative;
          display: flex;
          transition: transform 0.5s ease;
        }

        .slide {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }

        .slider-nav {
          text-align: center;
          margin-top: 20px;
        }

        .slider-nav button {
          background: #333;
          color: #fff;
          border: none;
          padding: 10px 20px;
          margin: 0 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;