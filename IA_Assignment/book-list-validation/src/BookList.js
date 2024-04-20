import React, { useState } from 'react';
import './BookList.css'; // Importing the CSS for styling

const booksData = [
  { id: 'book1', title: 'Zero to One -- Peter Thiel' },
  { id: 'book2', title: 'Monk Who Sold His Ferrari -- Robin Sharma' },
  { id: 'book3', title: 'Wings of Fire -- A.P.J. Abdul Kalam' }
];

const BookList = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [isError, setIsError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleBookSelect = (bookId) => {
    const newSelectedBooks = selectedBooks.includes(bookId)
      ? selectedBooks.filter(id => id !== bookId)
      : [...selectedBooks, bookId];

    setSelectedBooks(newSelectedBooks);
    // Whenever the user selects a book, we assume they're still interacting with the form,
    // so we should hide the submission message if it's visible.
    if (submitted) {
      setSubmitted(false);
    }
    setIsError(false); // Reset error if the user has selected a book
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBooks.length === 0) {
      setIsError(true);
    } else {
      console.log('Selected Books:', selectedBooks);
      setSelectedBooks([]); // Reset the selected books
      setIsError(false); // Reset any error messages
      setSubmitted(true); // Show the thank you message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-list-form">
      <h3>Choose from a wide variety of books available in our store</h3>

      {isError && <div className="error-message">Please choose at least one book to continue</div>}
      {submitted && <div className="success-message">Thanks for your submission!</div>}

      {booksData.map(book => (
        <label key={book.id} className="book-option">
          <input
            type="checkbox"
            value={book.id}
            checked={selectedBooks.includes(book.id)}
            onChange={() => handleBookSelect(book.id)}
          />
          {book.title}
        </label>
      ))}

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default BookList;