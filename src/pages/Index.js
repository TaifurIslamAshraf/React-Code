import React, { useState } from "react";
import Message from "../components/Message";

const Index = () => {
  console.log("index rander");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <Message />
    </div>
  );
};

export default Index;
