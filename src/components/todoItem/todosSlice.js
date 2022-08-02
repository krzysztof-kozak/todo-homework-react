import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: crypto.randomUUID(),
      title: 'Trash',
      description: 'I need to take out the trash today',
      completed: true,
      editing: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Vet',
      description: 'I need to take my dog to the vet tomorrow',
      completed: false,
      editing: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Exam',
      description: 'I need to study for the history exam tomorrow',
      completed: true,
      editing: false,
    },
  ],
  reducers: {
    toggleCompleted: (todos, payload) => {
      const selectedTodo = todos.find((todo) => todo.id === payload.id);

      if (selectedTodo.editing) {
        return;
      }

      selectedTodo.completed = !selectedTodo.completed;
    },
    selected: () => null,
    submittedNew: () => null,
    submittedExisting: () => null,
  },
});

export const { toggleCompleted } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
export const selectTodos = (state) => state.todos;
