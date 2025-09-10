// src/Carousel.jsx

import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ category, items, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define how many images to show per slide
  const imagesPerPage = 3;

  const nextSlide = () => {
    // Check if there are enough items left to create a new page
    if (currentIndex + imagesPerPage < items.length) {
      setCurrentIndex((prev) => prev + imagesPerPage);
    } else {
      // Loop back to the start if at the end
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    // Go to the previous page, but don't go below 0
    if (currentIndex - imagesPerPage >= 0) {
      setCurrentIndex((prev) => prev - imagesPerPage);
    } else {
      // Loop to the last page
      setCurrentIndex(Math.floor((items.length - 1) / imagesPerPage) * imagesPerPage);
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{category}</h2>
      <div className="carousel-wrapper">
        <div
          className="carousel-inner"
          // Calculate the offset to show the correct page of images
          style={{ transform: `translateX(-${(currentIndex / items.length) * 100}%)` }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={item.id || index}>
              <img
                src={item.image}
                alt={item.name}
                className="item-image"
                onClick={() => onImageClick && onImageClick(item)}
                style={{ cursor: "pointer" }}
              />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="price-tag">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="control-btn" onClick={prevSlide}>
          &lt;
        </button>
        <button className="control-btn" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;