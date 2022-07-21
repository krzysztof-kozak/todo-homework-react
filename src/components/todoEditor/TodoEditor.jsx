import {
  useTodoEditor,
  useTodoEditorDispatch,
  useTodosDispatch,
} from '../../context';

export default function TodoEditor() {
  const todo = useTodoEditor();
  const todoDispatch = useTodoEditorDispatch();
  const todosDispatch = useTodosDispatch();

  function handleTodoChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    const nextTodo = { ...todo, [key]: value };
    todoDispatch({ type: 'todo_changed', nextTodo });
  }

  function handleTodoSubmit(e) {
    e.preventDefault();

    todoDispatch({ type: 'todo_submitted' });

    if (todo.editing) {
      todosDispatch({
        type: 'existing_todo_submitted',
        nextTodo: { ...todo, editing: false },
      });
      return;
    }

    todosDispatch({
      type: 'new_todo_submitted',
      todo: { ...todo, editing: false },
    });
  }

  const disabled = todo.title.length < 1 || todo.description.length < 1;
  const editing = todo.editing;

  return (
    <form
      onSubmit={handleTodoSubmit}
      className="mx-auto mt-20 flex max-w-sm flex-wrap space-y-5"
    >
      <div className="flex basis-full flex-wrap gap-1">
        <label
          htmlFor="title"
          className="basis-full font-semibold text-sky-400"
        >
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
        <label
          htmlFor="description"
          className="basis-full font-semibold text-sky-400"
        >
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
