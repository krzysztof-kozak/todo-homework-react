import { createSlice } from '@reduxjs/toolkit';

const defaultTodo = {
  id: null,
  title: '',
  description: '',
  completed: false,
  editing: false,
};

const todoEditorSlice = createSlice({
  name: 'todo',
  initialState: defaultTodo,
  reducers: {
    changed: (_, action) => {
      return action.payload;
    },
    selected: (_, action) => {
      return action.payload;
    },
    unselected: (_, action) => {
      return defaultTodo;
    },
    submitted: (_, action) => {
      return defaultTodo;
    },
  },
});

export const { changed, selected, unselected, submitted } = todoEditorSlice.actions;
export const todoEditorReducer = todoEditorSlice.reducer;
export const selectTodoEditor = (state) => state.todoEditor;
