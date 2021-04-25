import React, { useCallback, useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const a = 1;

  const handleClick = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);
  return (
    <div className="App-wrapper">
      <div onClick={handleClick} className="App">
        {counter}
      </div>
    </div>
  );
};

export default App;
