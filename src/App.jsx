import { useState } from 'react';
import { Header, TodoEditor, TodoItem, TodoLayout } from './components';

export default function App() {
  const defaultTodos = [
    {
      id: crypto.randomUUID(),
      title: 'Trash',
      description: 'I need to take out the trash today',
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Vet',
      description: 'I need to take my dog to the vet tomorrow',
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(defaultTodos);

  function handleTodoAdd(nextTodo) {
    setTodos([...todos, nextTodo]);
  }

  function handleTodoCompleteToggle(id) {
    const nextTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(nextTodos);
  }

  return (
    <div className="bg-slate-800">
      <div className="container mx-auto p-5 text-lg">
        <Header title="Todo App" />
        <TodoEditor onTodoAdd={handleTodoAdd} />

        <TodoLayout>
          {todos.map((props) => {
            return <TodoItem key={props.id} onTodoCompleteToggle={handleTodoCompleteToggle} {...props} />;
          })}
        </TodoLayout>
      </div>
    </div>
  );
}
