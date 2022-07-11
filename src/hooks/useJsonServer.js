import { useState, useEffect } from 'react';

export default function useJsonServer(url, params) {
  const [todos2, settodos2] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  url = params ? `${url}?id=${params.id}` : url;

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          settodos2(json);
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
    return () => {
      ignore = true;
    };
  }, [url]);
  return [todos2, error, loading];
}
