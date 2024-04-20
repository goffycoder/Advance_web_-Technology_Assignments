// src/components/UseCallbackExample.js
import React, { useState, useCallback } from 'react';
import './ComponentStyles.css';

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);

  return (
    <div className="hook-example">
      <h3>useCallback Example</h3>
      Count: {count}
      <button onClick={increment} className="use-callback-button">Increment</button>
    </div>
  );
}

export default UseCallbackExample;
