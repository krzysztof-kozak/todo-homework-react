export default function TodoItem({ title, description }) {
  return (
    <div className="flex flex-col rounded-md border-2 border-sky-600 p-3 shadow-xl hover:border-emerald-600">
      <h2 className="text-2xl font-bold text-sky-500">{title}</h2>
      <p className="mb-8 text-white">{description}</p>
      <div className="mt-auto flex gap-6">
        <button className="basis-full rounded-md bg-sky-500 py-1 text-base font-medium uppercase text-white shadow-lg">
          edit
        </button>
        <button className="basis-full rounded-md bg-sky-500 text-base font-medium uppercase text-white shadow-lg">
          complete
        </button>
      </div>
    </div>
  );
}
