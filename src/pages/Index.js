import React, { useCallback, useMemo, useState } from "react";
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

  const loopNumber = useMemo(() => {
    let number = 0;
    for (let i = 0; i < 500000000; i++) {
      number++;
    }
    return number;
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
      <h1> loop with useMemo = {loopNumber}</h1>
      <Message
        numberOfMessage={count}
        onMessageCountNumber={messageCountNumber}
      />
    </div>
  );
};

export default Index;
