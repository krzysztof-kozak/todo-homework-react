import { Header, TodoEditor, TodoList } from './components';
import { TodosProvider } from './context';

export default function App() {
  // function handleTodoAdd(e) {
  //   e.preventDefault();

  //   if (!selectedTodoId) {
  //     setTodos([...todos, { ...todo, id: crypto.randomUUID() }]);
  //     setTodo(defaultTodo);
  //     return;
  //   }

  //   const nextTodos = todos.map((previusTodo) => {
  //     if (previusTodo.id === selectedTodoId) {
  //       return { ...todo, id: selectedTodoId, editing: false };
  //     }
  //     return previusTodo;
  //   });

  //   setTodos(nextTodos);
  //   setTodo(defaultTodo);
  //   setSelectedTodoId(null);
  // }

  // function handleTodoChange(e) {
  //   const key = e.target.name;
  //   const value = e.target.value;

  //   const nextTodo = { ...todo, [key]: value };
  //   setTodo(nextTodo);
  // }

  // function handleTodoSelect(id) {
  //   const nextTodo = todos.find((t) => t.id === id);
  //   if (nextTodo.completed) {
  //     return;
  //   }

  //   const nextTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, editing: true };
  //     }
  //     return todo;
  //   });

  //   setTodo({ ...nextTodo, editing: true });
  //   setTodos(nextTodos);
  //   setSelectedTodoId(id);
  // }

  // function handleTodoCompleteToggle(id) {
  //   const selectedTodo = todos.find((todo) => todo.id === id);
  //   if (selectedTodo.editing) {
  //     return;
  //   }

  //   const nextTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, completed: !todo.completed };
  //     }
  //     return todo;
  //   });

  //   setTodos(nextTodos);
  // }

  return (
    <div className="bg-slate-800">
      <div className="container mx-auto min-h-screen p-5 text-lg">
        <Header title="Todo App" />

        <TodosProvider>
          <TodoEditor />
          <TodoList />
        </TodosProvider>
      </div>
    </div>
  );
}
