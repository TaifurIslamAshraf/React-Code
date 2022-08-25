import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function NewTodo(props) {
  const [todo, setTodo] = useState("");

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  const todoSubmitHandle = (e) => {
    props.onNewTodo(todo);
    e.preventDefault();
    setTodo("");
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Todos App</Card.Title>
          <Card.Text>
            <form action="" onSubmit={todoSubmitHandle}>
              <div>
                <label htmlFor="addTodo">Add Todo:</label>
                <br />
                <input
                  onChange={todoChangeHandler}
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Enter Your Todo"
                  required
                  value={todo}
                />
                <Button type="submit" variant="primary">
                  Add
                </Button>{" "}
              </div>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
