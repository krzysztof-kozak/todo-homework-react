import { useState } from 'react';
import { Header, TodoEditor, TodoItem, TodoLayout } from './components';

export default function App() {
  const defaultTodos = [
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
  const defaultTodo = { title: '', description: '' };

  const [todos, setTodos] = useState(defaultTodos);
  const [todo, setTodo] = useState(defaultTodo);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  function handleTodoAdd(e) {
    e.preventDefault();

    if (!selectedTodoId) {
      setTodos([...todos, { ...todo, id: crypto.randomUUID() }]);
      setTodo(defaultTodo);
      return;
    }

    const nextTodos = todos.map((previusTodo) => {
      if (previusTodo.id === selectedTodoId) {
        return { ...todo, id: selectedTodoId, editing: false };
      }
      return previusTodo;
    });

    setTodos(nextTodos);
    setTodo(defaultTodo);
    setSelectedTodoId(null);
  }

  function handleTodoChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    const nextTodo = { ...todo, [key]: value };
    setTodo(nextTodo);
  }

  function handleTodoSelect(id) {
    const nextTodo = todos.find((t) => t.id === id);
    if (nextTodo.completed) {
      return;
    }

    const nextTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: !todo.editing };
      }
      return { ...todo, editing: false };
    });

    if (nextTodo.editing) {
      setTodo(defaultTodo);
    } else {
      setTodo({ ...nextTodo, editing: true });
    }

    setTodos(nextTodos);
    setSelectedTodoId(id);
  }

  function handleTodoCompleteToggle(id) {
    const selectedTodo = todos.find((todo) => todo.id === id);
    if (selectedTodo.editing) {
      return;
    }

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
      <div className="container mx-auto min-h-screen p-5 text-lg">
        <Header title="Todo App" />
        <TodoEditor
          todo={todo}
          onTodoAdd={handleTodoAdd}
          onTodoChange={handleTodoChange}
        />

        <TodoLayout>
          {todos.map((todo, index) => {
            /*
            this feels really bad to write,  but it seems like something is broken
            with tailwindcss & react when it comes to animation delay...

            for example, the following doesn't work:
            let animationDelay = `[animation-delay:${index * 500}ms]`
            */
            let animationDelay = '';
            if (index === 0) {
              animationDelay = '[animation-delay:0ms]';
            }

            if (index === 1) {
              animationDelay = '[animation-delay:200ms]';
            }

            if (index === 2) {
              animationDelay = '[animation-delay:300ms]';
            }

            return (
              <TodoItem
                key={todo.id}
                onTodoCompleteToggle={handleTodoCompleteToggle}
                onTodoSelect={handleTodoSelect}
                animationDelay={animationDelay}
                {...todo}
              />
            );
          })}
        </TodoLayout>
      </div>
    </div>
  );
}
