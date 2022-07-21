export function todoEditorReducer(_, action) {
  switch (action.type) {
    case 'todo_changed': {
      return action.nextTodo;
    }

    case 'todo_selected': {
      return action.nextTodo;
    }

    case 'todo_unselected': {
      return {
        id: null,
        title: '',
        description: '',
        completed: false,
        editing: false,
      };
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
