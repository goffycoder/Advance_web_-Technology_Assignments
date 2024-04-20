import React, { useRef } from 'react';


function UncontrolledForm() {
  const nameRef = useRef(null);
  const divisionRef = useRef(null);
  const messageRef = useRef(null);
  const reviewsRef = useRef([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      name: nameRef.current.value,
      division: divisionRef.current.value,
      message: messageRef.current.value
    };

    // Update reviews display without state management
    reviewsRef.current.push(newReview);
    displayReviews();
    
    // Optionally, reset form fields here if needed
    event.target.reset();
  };

  const displayReviews = () => {
    const reviewsContainer = document.querySelector('.uncontrolled-reviews-display');
    reviewsContainer.innerHTML = ''; // Clear previous content
    reviewsRef.current.forEach(review => {
      const reviewDiv = document.createElement('div');
      reviewDiv.className = 'review-card';
      reviewDiv.innerHTML = `
        <h3>${review.name} - Division: ${review.division}</h3>
        <p>${review.message}</p>
      `;
      reviewsContainer.appendChild(reviewDiv);
    });
  };

  return (
    <div className="container review-container">
      <h1>Form Using useRef Hook</h1>
      <form className="review-form" onSubmit={handleSubmit}>
        <label htmlFor="un_name">Name</label>
        <input id="un_name" ref={nameRef} type="text" placeholder="Enter your name" />
        
        <label htmlFor="un_division">Division</label>
        <select id="un_division" ref={divisionRef}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Development">Development</option>
          <option value="Human Resources">Human Resources</option>
        </select>

        <label htmlFor="un_message">Message</label>
        <textarea id="un_message" ref={messageRef} placeholder="Your message" />

        <button type="submit">Submit Review</button>
      </form>
      <div className="uncontrolled-reviews-display"></div>
    </div>
  );
}

export default UncontrolledForm;
