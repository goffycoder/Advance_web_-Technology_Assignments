// src/components/UseContextExample.js
import React, { useContext, createContext } from 'react';
import './ComponentStyles.css';

const CountContext = createContext();

function Counter() {
  const count = useContext(CountContext);
  return <p>Count: {count}</p>;
}

function UseContextExample() {
  return (
    <div className="hook-example use-context-display">
      <h3>useContext Example</h3>
      <CountContext.Provider value={5}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}

export default UseContextExample;
