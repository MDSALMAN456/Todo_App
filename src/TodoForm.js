import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoItem from "./Item_Todo";
import TodoFilters from "./TodoFilter";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { todos, addTodo, filter } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      });
      setText("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="headingTodo">
          <h1>Todo App</h1>
        </div>
        <div className="form_container">
          <form onSubmit={handleSubmit}>
            <input
            className="form_input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What Needs to be done?"
            />
          </form>
        </div>

        <div
          style={{
            width: "100%",
            borderBottom: "1px solid grey",
            fontSize: "20px",
          }}
        >
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>

        <TodoFilters />
      </div>
    </div>
  );
};

export default TodoForm;
