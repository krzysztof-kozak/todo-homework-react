import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useJsonServer(url, config) {
  const [todos2, settodos2] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    axios
      .get(url)
      .then((json) => {
        if (!ignore) {
          settodos2(json.data);
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
