import React,{useMemo} from "react";
import {Task, TabType, filterTasks} from "./utils"


export type ThemeType = 'dark' | 'light';

type TodoListPropsType = {
  todos:Task[],
  theme:ThemeType,
  tab:TabType
}

const TodoList:React.FC<TodoListPropsType> = ({todos,theme,tab}) => {

  const visibleTodos = useMemo(() => filterTasks(todos,tab),[todos,tab]);
  
  return (
    <div style={{ padding: "20px", backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
      <ul>
          {
            visibleTodos.map(todo => (
              <li key={todo.id}>
                {
                  todo.completed ?
                    <s>{todo.text}</s> :
                    todo.text
                }
              </li>
            ))
          }
      </ul>
    </div>
  );
}

export default TodoList;
  