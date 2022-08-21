import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  const handleClickIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Coutn: {count}</h1>
      <button onClick={handleClickIncrement}>Increment</button>
    </div>
  );
}
