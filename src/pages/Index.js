import React, { useCallback, useState } from "react";
import Message from "../components/Message";

const Index = () => {
  console.log("index rander");

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const messageCountNumber = useCallback(() => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }, []);

  return (
    <div>
      <h3>{toggle ? "On" : "Of"}</h3>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <Message
        numberOfMessage={count}
        onMessageCountNumber={messageCountNumber}
      />
    </div>
  );
};

export default Index;
