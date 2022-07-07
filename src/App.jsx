import { Header, TodoEditor, TodoItem, TodoLayout } from './components';

export default function App() {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto p-5 text-lg">
        <Header title="Todo App" />
        <TodoEditor />

        <TodoLayout>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoLayout>
      </div>
    </div>
  );
}
