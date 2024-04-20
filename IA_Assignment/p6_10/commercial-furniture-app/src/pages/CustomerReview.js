// src/pages/CustomerReview.js
import React, { useState } from 'react';
import './PageStyles.css';

function CustomerReview() {
  const [review, setReview] = useState({
    name: '',
    rating: '5',
    willBuyAgain: false,
    message: ''
  });

  const [reviews, setReviews] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setReview({
      ...review,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the review to the reviews array
    setReviews([...reviews, review]);
    // Reset the form
    setReview({
      name: '',
      rating: '5',
      willBuyAgain: false,
      message: ''
    });
  };

  return (
    <div className="container review-container">
      <h1>Customer Reviews</h1>
      <form className="review-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={review.name}
          onChange={handleInputChange}
        />
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          name="rating"
          value={review.rating}
          onChange={handleInputChange}
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <label>
          Interested in buying again?
          <input
            name="willBuyAgain"
            type="checkbox"
            checked={review.willBuyAgain}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Describe your experience"
          maxLength="25"
          value={review.message}
          onChange={handleInputChange}
        />
        <button type="submit">Submit Review</button>
      </form>
      <div className="reviews-display">
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <h3>{item.name} - Rating: {item.rating}</h3>
            <p>{item.message}</p>
            <p>{item.willBuyAgain ? 'Will buy again' : 'Not sure about buying again'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReview;
