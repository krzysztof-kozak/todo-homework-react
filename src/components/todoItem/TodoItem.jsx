export default function TodoItem({ title, description, id, completed, onTodoCompleteToggle }) {
  const borderColor = completed ? 'border-emerald-600' : 'border-sky-600';

  return (
    <div
      className={`relative flex flex-col overflow-clip rounded-md border-2 after:absolute after:left-[40%] after:top-[10%]
      after:${
        completed ? 'grid' : 'hidden'
      } after:w-full after:rotate-45 after:place-items-center after:bg-emerald-500/80 after:py-1 after:text-sm after:content-["completed"] ${borderColor} p-3 shadow-xl  hover:bg-slate-700
      
      `}
    >
      <h2 className="text-2xl font-bold text-sky-500">{title}</h2>
      <p className="mb-8 text-white">{description}</p>
      <div className="mt-auto flex w-full gap-6">
        <button className="basis-full rounded-md bg-sky-500 py-1 text-base font-medium uppercase text-white shadow-lg">
          edit
        </button>
        <button
          onClick={onTodoCompleteToggle.bind(null, id)}
          className="basis-full rounded-md bg-sky-500 text-base font-medium uppercase text-white shadow-lg"
        >
          {completed ? 'uncomplete' : 'complete'}
        </button>
      </div>
    </div>
  );
}
