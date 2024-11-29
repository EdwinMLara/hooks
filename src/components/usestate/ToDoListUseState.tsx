import React, { useState } from "react";

const ToDoListUseState: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo : string) => {
        setTodos([...todos,todo]);
    }
  return( 
  <div>
    <h2>Use State using a array as parameter</h2>
    <h1>To do List</h1>
    
    <ul>
        {
            todos.map((todo,index) => {
                return <li key={index}>{todo}</li>
            })
        }
    </ul>
    <button onClick={() => {addTodo("New Task")}}>Add todo</button>
  </div>
  );
}

export default ToDoListUseState;
