// src/components/UseReducerExample.js
import React, { useReducer } from 'react';
import './ComponentStyles.css';  // Ensure the path is correct based on your project structure

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="hook-example">
      <h3>useReducer Example</h3>
      Count: {state.count}
      <div className="use-reducer-buttons">
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
    </div>
  );
}

export default UseReducerExample;
