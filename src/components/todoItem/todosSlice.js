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
    toggleCompleted: (todos, action) => {
      const selectedTodo = todos.find((todo) => todo.id === action.payload);

      if (selectedTodo.editing) {
        return;
      }

      selectedTodo.completed = !selectedTodo.completed;
    },
    toggleSelected: (todos, action) => {
      const selectedTodo = todos.find((todo) => todo.id === action.payload);

      if (selectedTodo.completed) {
        return;
      }

      const restOfTodos = todos.filter((todo) => todo.id !== action.payload);
      selectedTodo.editing = !selectedTodo.editing;

      restOfTodos.forEach((todo) => {
        if (todo.editing) {
          todo.editing = false;
        }
      });
    },
    submittedNew: (todos, action) => {
      todos.push(action.payload);
    },
    submittedExisting: (todos, action) => {
      let editedTodoIndex = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[editedTodoIndex] = action.payload;
    },
  },
});

export const { toggleCompleted, toggleSelected, submittedNew, submittedExisting } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
export const selectTodos = (state) => state.todos;
