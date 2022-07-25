import { Link, useLocation } from 'react-router-dom';

export default function NoMatch() {
  const { pathname } = useLocation();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-slate-800 text-2xl ">
      <div className="mt-24 rounded-md bg-red-200 p-4 text-red-700 shadow-md">
        <h2 className="mb-3 text-3xl font-bold">Whoops...</h2>
        <p>
          Sorry! The path <b>{pathname}</b> doesn't exist.
        </p>
      </div>
      <Link className="text-sky-500 underline underline-offset-2 hover:text-sky-300" to="/">
        Back to homepage
      </Link>
    </main>
  );
}
