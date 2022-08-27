import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [isLoding, setIsLoging] = useState(false);

  useEffect(() => {
    //useEffect defend on count useState
    console.log("useEffect");
  }, [count]);

  return (
    <div>
      {console.log("Rendring")}
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
          setIsLoging(!isLoding);
        }}
      >
        IsLoding
      </button>
    </div>
  );
};

export default UseEffect;
