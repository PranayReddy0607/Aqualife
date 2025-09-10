import React from "react";
import "./ImageModal.css";

const ImageModal = ({ isOpen, image, name, description, price, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={name} className="modal-image" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="modal-price">{price}</div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
