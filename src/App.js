import React from "react";
import "./styles.css";

export default function App() {
  const [showCounter, setShowCounter] = React.useState(true);
  return (
    <div className="App">
      <h1>Demo</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        Click to toggle counter
      </button>
      {showCounter && <Counter />}
    </div>
  );
}

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="counter">
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
    </div>
  );
};
