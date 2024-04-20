// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import CustomerReview from './pages/CustomerReview';
import UncontrolledForm from './pages/UncontrolledForm';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/customer-review">Customer Review</Link></li>
          <li><Link to="/Uncontrolled_form">Uncontrolled Review</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customer-review" element={<CustomerReview />} />
        <Route path="/Uncontrolled_form" element={<UncontrolledForm />} />
      </Routes>
    </Router>
  );
}

export default App;
