import React from "react";
import { TodoProvider } from "./TodoContext";
import TodoForm from "./TodoForm";
import "./App.css"

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
