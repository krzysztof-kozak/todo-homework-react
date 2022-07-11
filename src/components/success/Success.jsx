export default function Success() {
  return (
    <div className="absolute top-2 right-2 translate-y-[-100px] animate-toast-from-top rounded bg-green-200 p-3 text-xl font-bold text-green-600 opacity-0 shadow-lg">
      <h2 className="mb-4">Success!</h2>
      <p className="text-base">Database updated successfuly :)</p>
    </div>
  );
}
