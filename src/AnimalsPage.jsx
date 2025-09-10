// src/AnimalsPage.jsx

import React, { useState, useRef } from "react";
import { animalData } from "./data.js";
import ImageModal from "./components/ImageModal.jsx";
import "./AnimalsPage.css";

function AnimalsPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRefs = useRef({});

  const handleScroll = (categoryId, direction) => {
    const scrollRow = scrollRefs.current[categoryId];
    if (scrollRow) {
      const scrollAmount = 300; // Adjust for card width
      scrollRow.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="animals-page-container">
      {animalData.map((data) => (
        <section key={data.id} id={data.id} className="animal-section">
          <h2 className="animal-title">{data.category}</h2>
          <div className="animal-scroll-row-wrapper" style={{ position: "relative" }}>
            {data.id === "freshwater-fish" && (
              <>
                <button
                  className="scroll-arrow left"
                  onClick={() => handleScroll(data.id, "left")}
                  aria-label="Scroll left"
                >
                  &#8592;
                </button>
                <button
                  className="scroll-arrow right"
                  onClick={() => handleScroll(data.id, "right")}
                  aria-label="Scroll right"
                >
                  &#8594;
                </button>
              </>
            )}
            <div
              className="animal-scroll-row"
              ref={el => (scrollRefs.current[data.id] = el)}
              style={{
                scrollBehavior: "smooth",
                overflowX: "auto",
                display: "flex",
                gap: "24px",
                paddingBottom: "16px",
                maxWidth: "900px"
              }}
            >
              {data.items.map((item) => (
                <div
                  key={item.id || item.name}
                  className="animal-card"
                  onClick={() => setSelectedItem(item)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.image} alt={item.name} className="animal-image" />
                  <h3 className="animal-name">{item.name}</h3>
                  <p className="animal-description">{item.description}</p>
                  <div className="animal-price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ImageModal
        isOpen={!!selectedItem}
        image={selectedItem?.image}
        name={selectedItem?.name}
        description={selectedItem?.description}
        price={selectedItem?.price}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default AnimalsPage;