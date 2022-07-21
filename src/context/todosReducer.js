export function todosReducer(todos, action) {
  switch (action.type) {
    case 'todo_completed': {
      const selectedTodo = todos.find((todo) => todo.id === action.id);
      if (selectedTodo.editing) {
        return;
      }

      const nextTodos = todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return nextTodos;
    }

    case 'todo_selected': {
      const nextTodo = todos.find((t) => t.id === action.id);
      if (nextTodo.completed) {
        return;
      }

      const nextTodos = todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, editing: true };
        }
        return todo;
      });

      return nextTodos;
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
