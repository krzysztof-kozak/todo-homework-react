export function todoEditorReducer(todo, action) {
  switch (action.type) {
    case 'todo_changed': {
      return action.nextTodo;
    }

    case 'todo_selected': {
      return action.nextTodo;
    }

    case 'new_todo_submitted': {
      return {};
    }

    case 'existing_todo_submitted': {
      return {};
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
