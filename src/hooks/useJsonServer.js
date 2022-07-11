import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001/todos';

export default function useJsonServer() {
  const [todos2, settodos2] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function addTodo(payload) {
    axios.post(URL, payload).then((json) => settodos2([...todos2, json.data]));
  }

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    axios
      .get(URL)
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
  }, []);

  return [todos2, error, loading, addTodo];
}
