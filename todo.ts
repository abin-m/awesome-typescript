interface Todo {
    id: number;
    title: string;
    completed: boolean;
    dueDate: Date;
  }
  
  let todoList: Todo[] = [];
  
function addTodoItem(todo: Todo): void {
    todoList.push(todo);
    console.log("Created the task,",todo.title)
  }
  
  function markTodoAsCompleted(id: number): void {
    todoList.forEach(todo => {
      if (todo.id === id) {
        todo.completed = true;
          console.log(todo.title," Marked as completed")
      }
    });
  }
  
  
  const newTodo: Todo = {
    id: 1,
    title: "Learn TypeScript",
    completed: false,
    dueDate: new Date("2024-12-31"),
  };
  
  addTodoItem(newTodo);
  markTodoAsCompleted(1);
  console.log(todoList);
  
export {}