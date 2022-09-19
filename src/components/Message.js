import React, { memo } from "react";

const Message = ({ numberOfMessage, onMessageCountNumber }) => {
  console.log("Message Rander");
  return (
    <div>
      <h2>Message {numberOfMessage} Found</h2>
      <button onClick={onMessageCountNumber}>Message Incremetn</button>
    </div>
  );
};

export default memo(Message);
