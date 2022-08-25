import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const allTodo = [];
export default function Home() {
  const [todos, setTodos] = useState(allTodo);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <NewTodo onNewTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}
