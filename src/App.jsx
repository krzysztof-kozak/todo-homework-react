import { useState, useEffect } from 'react';
import { Header, Loader, TodoEditor, TodoItem, TodoLayout } from './components';
import { useJsonServer } from './hooks';

export default function App() {
  const [todos, error, loading, post, put] = useJsonServer(URL);

  const defaultTodo = { title: '', description: '' };
  const [todo, setTodo] = useState(defaultTodo);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  useEffect(() => {
    if (todos) {
      const currentlyEditedTodo = todos.find((todo) => todo.editing);
      setSelectedTodoId(currentlyEditedTodo?.id || null);
      setTodo(currentlyEditedTodo || defaultTodo);
    }
  }, [todos]);

  function handleTodoAdd(e) {
    e.preventDefault();
    setTodo(defaultTodo);

    if (!selectedTodoId) {
      post(todo);
      return;
    }

    put({ ...todo, editing: false });
  }

  function handleTodoEditingToggle(id) {
    const nextTodo = { ...todos.find((t) => t.id === id), editing: true };
    if (nextTodo.completed) {
      return;
    }
    put(nextTodo);
  }

  function handleTodoChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    const nextTodo = { ...todo, [key]: value };
    setTodo(nextTodo);
  }

  function handleTodoCompleteToggle(id) {
    const nextTodo = {
      ...todos.find((t) => t.id === id),
    };
    nextTodo.completed = !nextTodo.completed;

    if (nextTodo.editing) {
      return;
    }

    put(nextTodo);
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
          {loading && <Loader />}
          {todos &&
            todos.map((todo, index) => {
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
                  onEditToggle={handleTodoEditingToggle}
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
