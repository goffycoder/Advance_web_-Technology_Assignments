import React from 'react';
import './App.css';
import BookList from './BookList';
import FormWithTimer from './FormWithTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookList />
        <FormWithTimer />
      </header>
    </div>
  );
}

export default App;
