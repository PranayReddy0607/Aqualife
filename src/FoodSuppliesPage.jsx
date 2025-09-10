// src/FoodSuppliesPage.jsx
import React, { useState } from "react";
import { foodData } from "./data";  
import ImageModal from "./components/ImageModal";
import "./FoodSuppliesPage.css";

const FoodSuppliesPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  if (!foodData || foodData.length === 0) {
    return <div style={{ color: "white" }}>No food supplies found.</div>;
  }

  return (
    <div className="food-page-container">
      {foodData.map((categoryObj) => (
        <div
          key={categoryObj.id}
          id={categoryObj.id} // ✅ Add id here for anchor links
          className="category-section">
          <h2 className="category-title">{categoryObj.category}</h2>
          <div className="item-scroll-row">
            {categoryObj.items.map((item, index) => (
              <div
                key={item.id || index}
                className="item-card"
                onClick={() => setSelectedItem(item)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.image} alt={item.name} className="item-image" />
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
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
};

export default FoodSuppliesPage;