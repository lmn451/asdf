import React, { useState, useCallback } from "react";
import "./App.css";

// const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const fruitsList = ["apple", "pineapple", "watermelon", "pear", "grape"];

function App() {
  const [count, setCount] = useState(1);

  const incrementHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const MAP_LABELS = {
    1: "one",
    2: "two",
    3: "three",
  };

  return (
    <div className="app">
      <div className="header">
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
          <span>Interview</span>
        </div>
      </div>
      <div className="content">
        <p>
          Count: {count} ( {MAP_LABELS[count]} )
        </p>
        <button onClick={incrementHandler}>Increment</button>
        <ComponentOne onClick={() => setCount(1)} />
      </div>
      <div className="content">
        {someStaticArray.map((e) => (
          <React.Fragment>{e} </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ComponentOne({ onClick }) {
  return (
    <React.Fragment>
      <button onClick={onClick}>Reset</button>
      {/* Some more JSX */}
    </React.Fragment>
  );
}

export default App;
