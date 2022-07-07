import { useState } from 'react';

export default function TodoEditor({ onTodoAdd }) {
  const defaultState = { title: '', description: '' };
  const [todo, setTodo] = useState(defaultState);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    const nextTodo = { ...todo, [key]: value };
    setTodo(nextTodo);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!todo.title || !todo.description) {
      return;
    }

    setTodo(defaultState);

    const nextTodo = { ...todo, id: crypto.randomUUID() };
    onTodoAdd(nextTodo);
  }

  const { title, description } = todo;

  const disabled = title.length < 1 || description.length < 1;
  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-20 flex max-w-sm flex-wrap space-y-5">
      <div className="flex basis-full flex-wrap gap-1">
        <label htmlFor="title" className="basis-full font-semibold text-sky-400">
          title
        </label>
        <input
          placeholder="Interview"
          onChange={handleChange}
          value={title}
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
          onChange={handleChange}
          value={description}
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
        className="basis-full rounded bg-emerald-500 py-2 font-semibold uppercase text-slate-100 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300"
      >
        Create
      </button>
    </form>
  );
}
