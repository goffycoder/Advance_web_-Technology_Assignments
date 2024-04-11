import { useReducer } from 'react';
import React from 'react';
import './App.css';
// import Counter from './usememo';

function count(state, action) {
  if (action.type === 'increment') {
    return { num: state.num + 1 };
  }
  throw new Error('Unknown action');
}

export default function Counter() {
  const [state, dispatch] = useReducer(count, { num: 1 });
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>
        Press
      </button>
      <p>Hello! You are {state.num}</p>
    </>
  );
}
