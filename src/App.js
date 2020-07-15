import React from "react";
import {
  createHtmlPortalNode,
  InPortal,
  OutPortal
} from "react-reverse-portal";
import "./styles.css";

const pNode = createHtmlPortalNode();

export default function App() {
  const [showCounter, setShowCounter] = React.useState(true);
  return (
    <div className="App">
      <h1>Demo</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        Click to toggle counter
      </button>
      <InPortal node={pNode}>
        <Counter />
      </InPortal>
      {showCounter && <OutPortal node={pNode} />}
    </div>
  );
}

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </div>
  );
};
