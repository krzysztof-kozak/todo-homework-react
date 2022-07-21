export function todoEditorReducer(todo, action) {
  switch (action.type) {
    case 'todo_changed': {
      return action.nextTodo;
    }

    case 'todo_selected': {
      return action.nextTodo;
    }

    case 'todo_submitted': {
      return {
        id: null,
        title: '',
        description: '',
        completed: false,
        editing: false,
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
