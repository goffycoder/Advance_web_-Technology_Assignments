// src/components/UseMemoExample.js
import React, { useState, useMemo } from 'react';
import './ComponentStyles.css';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(10);

  const multiplier = useMemo(() => {
    console.log('Calculating multiplier...');
    return count * items;
  }, [count, items]);

  return (
    <div className="hook-example">
      <h3>useMemo Example</h3>
      <p>Multiplier: {multiplier}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setItems(items + 1)}>Increment Items</button>
    </div>
  );
}

export default UseMemoExample;
