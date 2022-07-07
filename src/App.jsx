import { useState } from 'react';
import { Header, TodoEditor, TodoItem, TodoLayout } from './components';

export default function App() {
  const defaultTodos = [
    {
      id: crypto.randomUUID(),
      title: 'Trash',
      description: 'I need to take out the trash today',
      completed: false,
      editing: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'Vet',
      description: 'I need to take my dog to the vet tomorrow',
      completed: false,
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
        return { ...todo, editing: true };
      }
      return todo;
    });

    setTodo({ ...nextTodo, editing: true });
    setTodos(nextTodos);
    setSelectedTodoId(id);
  }

  function handleTodoCompleteToggle(id) {
    const selectedTodo = todos.find((todo) => todo.id === id);
    if (selectedTodo.editing) {
      debugger;
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
      <div className="container mx-auto p-5 text-lg">
        <Header title="Todo App" />
        <TodoEditor todo={todo} onTodoAdd={handleTodoAdd} onTodoChange={handleTodoChange} />

        <TodoLayout>
          {todos.map((props) => {
            return (
              <TodoItem
                key={props.id}
                onTodoCompleteToggle={handleTodoCompleteToggle}
                onTodoSelect={handleTodoSelect}
                {...props}
              />
            );
          })}
        </TodoLayout>
      </div>
    </div>
  );
}
