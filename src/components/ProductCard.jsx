import React, { useState } from 'react';
import ImageModal from './ImageModal';

const ProductCard = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Image clicked!"); // Debugging line
    setModalOpen(true);
  };

  return (
    <div className="product-card">
      <div 
        className="image-container" 
        style={{ cursor: 'pointer' }}
        onClick={handleImageClick}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '150px', height: 'auto' }}
        />
      </div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <ImageModal
        src={item.image}
        alt={item.name}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ProductCard;