import { useDispatch, useSelector } from 'react-redux';
import { changed, submitted, selectTodoEditor } from './todoEditorSlice';
import { submittedExisting, submittedNew } from '../todoItem/todosSlice';

export default function TodoEditor() {
  const todo = useSelector(selectTodoEditor);
  const dispatch = useDispatch();

  function handleTodoChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    const nextTodo = { ...todo, [key]: value };
    dispatch(changed(nextTodo));
  }

  function handleTodoSubmit(e) {
    e.preventDefault();

    dispatch(submitted());

    if (todo.editing) {
      dispatch(submittedExisting({ ...todo, editing: false }));
      return;
    }

    dispatch(submittedNew({ ...todo, editing: false }));
  }

  const disabled = todo.title.length < 1 || todo.description.length < 1;
  const editing = todo.editing;

  return (
    <form onSubmit={handleTodoSubmit} className="mx-auto mt-20 flex max-w-sm flex-wrap space-y-5">
      <div className="flex basis-full flex-wrap gap-1">
        <label htmlFor="title" className="basis-full font-semibold text-sky-400">
          title
        </label>
        <input
          placeholder="Interview"
          onChange={handleTodoChange}
          value={todo.title}
          type="text"
          name="title"
          id="title"
          className="basis-full rounded bg-slate-700 px-2 py-2 text-slate-300 shadow-md outline-offset-2 outline-emerald-500 placeholder:text-slate-500"
        />
      </div>

      <div className="flex basis-full flex-wrap gap-1">
        <label htmlFor="description" className="basis-full font-semibold text-sky-400">
          description
        </label>
        <textarea
          placeholder="Prepare for the job interview tomorrow."
          onChange={handleTodoChange}
          value={todo.description}
          name="description"
          id="description"
          cols="30"
          rows="5"
          className="basis-full rounded bg-slate-700 px-2 py-2 text-slate-300 shadow-md outline-offset-2 outline-emerald-500 placeholder:text-slate-500"
        ></textarea>

        <div className="flex basis-full flex-wrap gap-1"></div>
      </div>
      <button
        disabled={disabled}
        className="basis-full rounded bg-emerald-500 py-2 font-semibold uppercase text-slate-100 shadow-sm hover:bg-emerald-600 active:bg-emerald-700 active:shadow-inner active:shadow-slate-700 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300"
      >
        {editing ? 'save' : 'create'}
      </button>
    </form>
  );
}
