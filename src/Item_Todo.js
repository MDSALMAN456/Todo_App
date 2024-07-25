import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleComplete, deleteTodo, editTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        borderTop: "1px solid grey",
      }}
    >
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            onBlur={handleEditSubmit}
            style={{ margin: "10px 10px", height: "30px" }}
          />
        </form>
      ) : (
        <>
          <div className="todoCheckbox">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                style={{ margin: "10px 10px", height: "30px", width: "30px" }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onDoubleClick={handleEdit}
              >
                {todo.text}
              </span>
            </div>
            <div>
              <button className="btnDelete" onClick={() => deleteTodo(todo.id)}>
                X
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
