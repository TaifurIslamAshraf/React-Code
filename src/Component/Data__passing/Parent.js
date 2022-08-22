import React from "react";

import Child from "./Child";

export default function Parent(props) {
  const Data = (childData) => {
    alert(childData);
  };

  return (
    <div>
      <Child fromParent={"Data from Parent"} onChildData={Data} />
    </div>
  );
}
