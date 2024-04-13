import React, { useState } from 'react';
import './2-counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h2 className="count">Count: {count}</h2>
      <div className="btn-container">
        <button className="counter-btn" onClick={decrement}>
          Decrement
        </button>
        <button className="counter-btn" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
