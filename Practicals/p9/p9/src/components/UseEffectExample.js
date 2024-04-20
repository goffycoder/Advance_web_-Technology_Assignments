// src/components/UseEffectExample.js
import React, { useState, useEffect } from 'react';
import './ComponentStyles.css';

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="hook-example use-effect-notification">
      <h3>useEffect Example</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UseEffectExample;
