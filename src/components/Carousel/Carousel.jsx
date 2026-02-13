import React, { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1200/600?random=1",
    title: "Fresh & Delicious",
    description: "Enjoy the best quality food delivered to your door."
  },
  {
    id: 2,
    image: "https://picsum.photos/1200/600?random=2",
    title: "Fast Delivery",
    description: "Get your favorite meals in less than 30 minutes."
  },
  {
    id: 3,
    image: "https://picsum.photos/1200/600?random=3",
    title: "Best Offers",
    description: "Exciting discounts and deals every day."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button>Order Now</button>
            </div>
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
