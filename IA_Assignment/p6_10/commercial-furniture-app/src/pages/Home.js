// src/pages/Home.js
import React from 'react';
import './PageStyles.css';

function Home() {
  return (
    <div className="container home-container">
      <h1>Welcome to Our Furniture Store</h1>
      <p>Explore our wide range of luxury furniture. Enhance your home with our stylish and high-quality pieces.</p>
      <div className="grid features">
        <div className="feature">
          <h2>High Quality</h2>
          <p>Each piece is crafted with the finest materials to offer you a lasting investment.</p>
        </div>
        <div className="feature">
          <h2>Eco-Friendly</h2>
          <p>We use sustainable practices in every step of our production to protect our environment.</p>
        </div>
        <div className="feature">
          <h2>Custom Designs</h2>
          <p>Customize furniture to perfectly match your home's design and color scheme.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
