import { createContext, useContext, useReducer } from 'react';
import { todosReducer } from './todosReducer';

const TodoContext = createContext(null);
const TodoDispatchContext = createContext(null);

export default function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

export function useTodosDispatch() {
  return useContext(TodoDispatchContext);
}

const initialTodos = [
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
];
