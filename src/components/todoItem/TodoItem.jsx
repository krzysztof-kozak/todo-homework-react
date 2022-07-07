export default function TodoItem({ title, description, id, completed, onTodoCompleteToggle, onTodoSelect, editing }) {
  const borderColor = completed ? 'border-emerald-600' : 'border-sky-600';
  const editDisabled = completed;
  const completeDisabled = editing;

  let badge;
  if (editDisabled) {
    badge = 'after:content-["completed"] after:bg-emerald-500/80';
  }
  if (completeDisabled) {
    badge = 'after:content-["editing"] after:bg-sky-500/80';
  }

  return (
    <div
      className={`relative flex flex-col overflow-clip rounded-md border-2 after:absolute after:left-[40%] after:top-[10%]
      after:${
        completed || editing ? 'grid' : 'hidden'
      } after:w-full after:rotate-45 after:place-items-center  after:py-1 after:text-sm ${badge} ${borderColor} p-3 shadow-xl  hover:bg-slate-700
      
      `}
    >
      <h2 className="text-2xl font-bold text-sky-500">{title}</h2>
      <p className="mb-8 text-white">{description}</p>
      <div className="mt-auto flex w-full gap-6">
        <button
          disabled={editDisabled}
          onClick={onTodoSelect.bind(null, id)}
          className="basis-full rounded-md bg-sky-500 py-1 text-base font-medium uppercase text-white shadow-lg disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300"
        >
          edit
        </button>
        <button
          disabled={completeDisabled}
          onClick={onTodoCompleteToggle.bind(null, id)}
          className="basis-full rounded-md bg-sky-500 text-base font-medium uppercase text-white shadow-lg disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300"
        >
          {completed ? 'uncomplete' : 'complete'}
        </button>
      </div>
    </div>
  );
}
