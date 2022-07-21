import { Header, TodoEditor, TodoList } from './components';
import { TodosProvider, TodoEditorProvider } from './context';

export default function App() {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto min-h-screen p-5 text-lg">
        <Header title="Todo App" />

        <TodoEditorProvider>
          <TodosProvider>
            <TodoEditor />
            <TodoList />
          </TodosProvider>
        </TodoEditorProvider>
      </div>
    </div>
  );
}
