import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>React Counter Component</h2>
      <p>Current count: <strong>{count}</strong></p>
      <div className="button-group">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
