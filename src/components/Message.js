import React, { memo } from "react";

const Message = () => {
  console.log("Message Rander");
  return (
    <div>
      <h2>Message 0 Found</h2>
    </div>
  );
};

export default memo(Message);
