export function todoEditorReducer(todo, action) {
  switch (action.type) {
    case 'todo_selected': {
      return action.todo;
    }

    case 'new_todo_submitted': {
      return {};
    }

    case 'existing_todo_edited': {
      return {};
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
