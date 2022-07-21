import { createContext, useContext, useReducer } from 'react';
import { todoEditorReducer } from './todoEditorReducer';

const TodoEditorContext = createContext(null);
const TodoEditorDispatchContext = createContext(null);

export default function TodoEditorProvider({ children }) {
  const [selectedTodo, dispatch] = useReducer(todoEditorReducer, initialTodo);

  return (
    <TodoEditorContext.Provider value={selectedTodo}>
      <TodoEditorDispatchContext.Provider value={dispatch}>
        {children}
      </TodoEditorDispatchContext.Provider>
    </TodoEditorContext.Provider>
  );
}

export function useTodoEditor() {
  return useContext(TodoEditorContext);
}

export function useTodoEditorDispatch() {
  return useContext(TodoEditorDispatchContext);
}

const initialTodo = {
  id: null,
  title: '',
  description: '',
  completed: false,
  editing: false,
};
