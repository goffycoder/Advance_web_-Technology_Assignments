// src/pages/Products.js
import React, { useState } from 'react';
import './PageStyles.css';
import elegantSofa from '../images/elegant_sofa.jpg';
import classicWoodenChair from '../images/classic_wooden_chair.png';
import modernCoffeeTable from '../images/modern_coffee_table.png';
import luxuryBed from '../images/luxury_bed.png';
import genericChair from '../images/generic_chair.jpg';

const products = [
  {
    id: 1,
    name: "Elegant Sofa",
    price: 499.99,
    color: "Gray",
    manufacturer: "Comfy Home",
    imageUrl: elegantSofa
  },
  {
    id: 2,
    name: "Classic Wooden Chair",
    price: 249.99,
    color: "Brown",
    manufacturer: "Wood Crafters",
    imageUrl: classicWoodenChair
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    price: 299.99,
    color: "Black",
    manufacturer: "Table Trends",
    imageUrl: modernCoffeeTable
  },
  {
    id: 4,
    name: "Luxury Bed",
    price: 899.99,
    color: "White",  // Suppose we want to demonstrate a missing color and manufacturer
    imageUrl: luxuryBed
  },
  {
    id: 5,
    name: "Generic Chair",
    price: 99.99,  
    imageUrl: genericChair
  }
];

function ProductCard({ product }) {
    const [likes, setLikes] = useState(0);
  
    return (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price || 'Price not available'}</p>
        <p>Color: {product.color || 'Color not specified'}</p>
        <p>Manufacturer: {product.manufacturer || 'Manufacturer unknown'}</p>
        <button onClick={() => setLikes(likes + 1)} className="like-button">Like</button>
        <p>{likes} Likes</p>
      </div>
    );
  }
  


function Products() {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
