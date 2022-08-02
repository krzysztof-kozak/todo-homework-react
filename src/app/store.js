import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from '../components/todoItem/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
