import { useState } from 'react';

export default function TodoEditor() {
  const defaultState = { title: '', description: '' };
  const [todo, setTodo] = useState(defaultState);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    const nextTodo = { ...todo, [key]: value };
    setTodo(nextTodo);
  }

  const { title, description } = todo;

  return (
    <div className="mx-auto mt-20 flex max-w-sm flex-wrap space-y-5">
      <div className="flex basis-full flex-wrap gap-1">
        <label
          htmlFor="title"
          className="basis-full font-semibold text-sky-400"
        >
          title
        </label>
        <input
          onChange={handleChange}
          value={title}
          type="text"
          name="title"
          id="title"
          className="basis-full rounded px-2 py-2 shadow-md outline-offset-2 outline-emerald-500"
        />
      </div>

      <div className="flex basis-full flex-wrap gap-1">
        <label
          htmlFor="description"
          className="basis-full font-semibold text-sky-400"
        >
          description
        </label>
        <textarea
          onChange={handleChange}
          value={description}
          name="description"
          id="description"
          cols="30"
          rows="5"
          className="basis-full rounded px-2 py-2 shadow-md outline-offset-2 outline-emerald-500"
        ></textarea>

        <div className="flex basis-full flex-wrap gap-1"></div>
      </div>
      <button className="basis-full rounded bg-emerald-500 font-semibold uppercase text-slate-100 shadow-sm">
        Create
      </button>
    </div>
  );
}
