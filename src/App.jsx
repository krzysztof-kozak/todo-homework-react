import { Header, TodoEditor, TodoList } from './components';

export default function App() {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto min-h-screen p-5 text-lg">
        <Header title="Todo App" />

        <TodoEditor />
        <TodoList />
      </div>
    </div>
  );
}
