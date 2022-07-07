export default function App() {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto p-5 text-lg">
        <h1 className="text-center text-5xl font-bold text-sky-500 underline decoration-emerald-500">
          Todo app
        </h1>

        <div className="mx-auto mt-20 flex max-w-sm flex-wrap space-y-5">
          <div className="flex basis-full flex-wrap gap-1">
            <label
              htmlFor="title"
              className="basis-full font-semibold text-sky-400"
            >
              title
            </label>
            <input
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
