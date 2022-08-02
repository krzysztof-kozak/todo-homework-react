import { useDispatch } from 'react-redux';
import { toggleCompleted, toggleSelected } from './todosSlice';
import { selected, unselected } from '../todoEditor/todoEditorSlice';

export default function TodoItem({ title, description, id, completed, editing, animationDelay }) {
  const dispatch = useDispatch();

  function handleTodoComplete() {
    dispatch(toggleCompleted(id));
  }

  function handleTodoSelect() {
    dispatch(toggleSelected(id));
    dispatch(editing ? unselected() : selected({ title, description, id, editing: !editing }));
  }

  const borderColor = completed ? 'border-emerald-600' : 'border-sky-600';
  const editDisabled = completed;
  const completeDisabled = editing;

  let badge = '';
  if (editDisabled) {
    badge = 'after:content-["completed"] after:bg-emerald-500/80';
  }
  if (completeDisabled) {
    badge = 'after:content-["editing"] after:bg-sky-500/80';
  }

  let badgeContent = '';
  if (editing || completed) {
    badgeContent = 'after:grid';
  } else {
    badgeContent = 'after:hidden';
  }

  return (
    <div
      className={`relative flex translate-y-[-100px] animate-slide-from-top flex-col overflow-clip rounded-md border-2 opacity-0 after:absolute after:left-[40%] after:top-[10%] after:w-full after:rotate-45 after:place-items-center after:py-1 after:text-sm after:font-bold ${badge} ${badgeContent} ${borderColor} p-3 shadow-xl  hover:bg-slate-700 ${animationDelay}
      
      `}
    >
      <h2 className="text-2xl font-bold text-sky-500">{title}</h2>
      <p className="mb-8 text-white">{description}</p>
      <div className="mt-auto flex w-full gap-6">
        <button
          disabled={editDisabled}
          onClick={handleTodoSelect}
          className="basis-full rounded-md bg-sky-500 px-1 py-1 text-base font-medium uppercase text-white shadow-lg hover:bg-sky-600 active:bg-sky-700 active:shadow-inner active:shadow-slate-700 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300"
        >
          {editing ? 'cancel editing' : 'edit'}
        </button>
        <button
          disabled={completeDisabled}
          onClick={handleTodoComplete}
          className="basis-full rounded-md bg-sky-500 px-1 py-1 text-base font-medium uppercase text-white shadow-lg hover:bg-sky-600 active:bg-sky-700 active:shadow-inner active:shadow-slate-700 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300"
        >
          {completed ? 'uncomplete' : 'complete'}
        </button>
      </div>
    </div>
  );
}
