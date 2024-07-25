import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoFilters = () => {
  const { filter, setFilter } = useContext(TodoContext);
  const { todos, clearCompleted } = useContext(TodoContext);

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div style={{display:"flex", marginTop:"15px",justifyContent:"space-evenly"}}>
     <span>{completedCount}/{todos.length} completed</span>
      <button
        onClick={() => setFilter('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal',marginRight:"10px",marginLeft:"10px",border:"none" }}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        style={{ fontWeight: filter === 'active' ? 'bold' : 'normal',marginRight:"10px",border:"none"  }}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal',marginRight:"10px",border:"none"  }}
      >
        Completed
      </button>
      <button style={{border:"none"}} onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};

export default TodoFilters;
