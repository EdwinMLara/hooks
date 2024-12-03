export interface Task {
    id: number,
    text: string,
    completed: boolean
}

export type TabType = "all" | "completed" | "active";

export const createTasks = () : Task[]  => {
    const todos = [];
    for(let i = 0; i < 50 ; i++ ){
        todos.push({
            id: i,
            text: `Todo ${i}`,
            completed: Math.random() > 0.5
        })
    }

    return todos;
}

export const filterTasks = (todos: Task[],tab : TabType) : Task[] => {
    console.log("Relentizado artificial del filtro");
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
    }

    return todos.filter(todo => {
        if (tab === 'all') {
          return true;
        } else if (tab === 'active') {
          return !todo.completed;
        } else if (tab === 'completed') {
          return todo.completed;
        }
      });
}