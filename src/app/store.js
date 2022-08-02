import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from '../components/todoItem/todosSlice';
import { todoEditorReducer } from '../components/todoEditor/todoEditorSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    todoEditor: todoEditorReducer,
  },
});
