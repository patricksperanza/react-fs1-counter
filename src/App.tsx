import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count === 0) return;

    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="app">
      <header>
        <h1>Counter App</h1>
        <h4>React Fundamentals #1</h4>
      </header>
      <main>
        <h2 className="count">{count}</h2>
        <div className="buttons">
          <button className="button" onClick={decrement}>
            -
          </button>
          <button className="button" onClick={increment}>
            +
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
