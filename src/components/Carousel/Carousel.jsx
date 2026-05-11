import React, { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg",
    title: "Fresh & Delicious",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    title: "Fast Delivery",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/4021952/pexels-photo-4021952.jpeg",
    title: "Best Offers",
  },
];

// Clone first slide
const extendedSlides = [...slides, slides[0]];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    // When reaching cloned slide
    if (currentIndex === slides.length) {
      setTransition(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!transition) {
      setTimeout(() => {
        setTransition(true);
      }, 50);
    }
  }, [transition]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transition
            ? "transform 0.6s ease-in-out"
            : "none",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={slide.title} />

            <div className="content">
              <h2>{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;