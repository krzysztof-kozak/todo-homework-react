import { Header, TodoEditor } from './components';

export default function App() {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto p-5 text-lg">
        <Header title="Todo App" />
        <TodoEditor />

        <div className="mt-16 grid grid-cols-ram gap-8">
          <div className="space-y-5 rounded-md border-2 border-sky-600 p-3 shadow-xl hover:border-emerald-600">
            <h2 className="text-2xl font-bold text-sky-500">Title</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam voluptatibus officiis voluptatum, quas obcaecati esse?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            </p>
            <div className="mt-8 flex gap-6">
              <button className="basis-full rounded-md bg-sky-500 text-base font-medium uppercase text-white shadow-lg">
                edit
              </button>
              <button className="basis-full rounded-md bg-sky-500 text-base font-medium uppercase text-white shadow-lg">
                complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
