import { useEffect, useRef, useState } from 'react';

export default function Error({ message }) {
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {visible && (
        <div
          ref={ref}
          className="absolute top-2 right-2 translate-y-[-100px] animate-toast-from-top rounded bg-red-200 p-3 text-xl font-bold text-red-600 opacity-0 shadow-lg"
        >
          <h2 className="mb-4">Whoops, something went wrong :/</h2>
          <p className="text-base">{message}</p>
        </div>
      )}
    </>
  );
}
