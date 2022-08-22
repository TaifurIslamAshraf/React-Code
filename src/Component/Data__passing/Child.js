import React from "react";

function Child(props) {
  const fromChild = "Hi I am from child component";
  props.onChildData(fromChild);
  return (
    <div>
      <h1>{props.fromParent}</h1>
    </div>
  );
}

export default Child;
