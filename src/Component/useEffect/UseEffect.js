import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    console.log("UseEffect");
  }, [count]);

  return (
    <div>
      {console.log("Render")}
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setLogin(!Login);
        }}
      >
        isLogin
      </button>
    </div>
  );
};

export default UseEffect;
