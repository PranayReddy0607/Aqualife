// src/App.jsx
import React, { useState } from 'react';
import AnimalsPage from './AnimalsPage.jsx';
import FoodSuppliesPage from './FoodSuppliesPage.jsx';
import { animalData } from './data.js';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = (page, sectionId) => {
    setCurrentPage(page);
    setTimeout(() => {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="aqualife-home-container">
      <video autoPlay loop muted id="bg-video">
        <source src="/path/to/your/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className="aqualife-header">
        <div className="aqualife-logo">
          <h1>Aqualife</h1>
        </div>
        <nav className="aqualife-nav">
          <ul>
            <li><a href="#" onClick={() => setCurrentPage('home')}>Home</a></li>
            <li className="dropdown">
              <a href="#" onClick={() => setCurrentPage('animals')}>Animals <span className="arrow-down"></span></a>
              <div className="dropdown-content">
                {animalData.map(data => (
                  <a key={data.id} href={`#${data.id}`} onClick={() => handleNavClick('animals', data.id)}>
                    {data.category}
                  </a>
                ))}
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => setCurrentPage('food')}>Food & Supplies <span className="arrow-down"></span></a>
              <div className="dropdown-content">
                <a href="#fish-food" onClick={() => handleNavClick('food', 'fish-food')}>Fish Food</a>
                <a href="#turtle-food" onClick={() => handleNavClick('food', 'turtle-food')}>Turtle Food</a>
                <a href="#water-treatments" onClick={() => handleNavClick('food', 'water-treatments')}>Water Treatments</a>
                <a href="#filtration" onClick={() => handleNavClick('food', 'filtration')}>Filtration</a>
                <a href="#decor" onClick={() => handleNavClick('food', 'decor')}>Decor</a>
              </div>
            </li>
            <li><a href="#" onClick={() => setCurrentPage('about')}>About Us</a></li>
            <li><a href="#" onClick={() => setCurrentPage('contact')}>Contact Us</a></li>
          </ul>
        </nav>
        <div className="aqualife-user-actions">
          <button className="sign-in-btn">Sign In</button>
          <button className="cart-btn">🛒 Cart</button>
        </div>
      </header>

      {currentPage === 'home' ? (
        <>
          <section className="hero-section">
            <div className="hero-content">
              <h1>Aqualife: Your World of Aquatic Wonders Begins Here.</h1>
              <p>Discover Healthy Fish, Exotic Turtles, Vibrant Aqua Animals, and Premium Foods.</p>
              <button className="shop-now-btn">Shop Now</button>
            </div>
            <div className="threejs-placeholder">
              <p>🐠🐟🐢 Dive into a 3D aquatic experience 🌿🐡</p>
            </div>
          </section>
          <section className="featured-products">
            <h2>Featured Aquatics & Foods</h2>
            <div className="product-grid">
              <div className="product-card">Placeholder Fish 1</div>
              <div className="product-card">Placeholder Turtle 1</div>
              <div className="product-card">Placeholder Food 1</div>
            </div>
          </section>
        </>
      ) : currentPage === 'animals' ? (
        <AnimalsPage />
      ) : currentPage === 'food' ? (
        <FoodSuppliesPage />
      ) : currentPage === 'about' ? (
        <div><h2>About Us Page</h2></div>
      ) : currentPage === 'contact' ? (
        <div><h2>Contact Us Page</h2></div>
      ) : null}

      <footer className="aqualife-footer">
        <p>&copy; {new Date().getFullYear()} Aqualife. All rights reserved. | Location: Hyderabad, India</p>
      </footer>
    </div>
  );
}

export default App;
