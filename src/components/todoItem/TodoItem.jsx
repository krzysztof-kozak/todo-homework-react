export default function TodoItem() {
  return (
    <div className="space-y-5 rounded-md border-2 border-sky-600 p-3 shadow-xl hover:border-emerald-600">
      <h2 className="text-2xl font-bold text-sky-500">Title</h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptatibus officiis voluptatum, quas obcaecati esse? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit.
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
  );
}
