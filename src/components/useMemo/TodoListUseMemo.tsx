import React, { useState } from "react";
import { createTasks,TabType } from "./utils";
import TodoList from "./TodoList";

const todos = createTasks();

const TodoListUseMemo:React.FC  = () => {

    const [tab, setTab] = useState<TabType>('all');
    const [isDark, setIsDark] = useState(false);

    return <>
        <button onClick={() => setTab('all')}>All</button>
        <button onClick={() => setTab('active')}>Active</button>
        <button onClick={() => setTab('completed')}>Completed</button>
        <label>
            <input
                type="checkbox"
                checked={isDark}
                onChange={e => setIsDark(e.target.checked)}
                />
                Dark Mode
        </label>
        <hr/>
        <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'}/>
    </>;
}

export default TodoListUseMemo;
